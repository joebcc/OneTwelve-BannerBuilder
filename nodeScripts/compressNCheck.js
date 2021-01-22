const AdmZip = require('adm-zip');
const fs = require("fs"); //Load the filesystem module

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegtran = require('imagemin-jpegtran');

module.exports = async function(banners) {	

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const data = {};
  const alerts = [];

  //? - after build, loop through each banner folder
  (async () => {
    await asyncForEach(banners, async (banner) => { 
      let {key} = banner;
      data[key] = [];
      
      //? - - compress each folder
      await compressFolder(key);
      await printResults(key);
      
    })
  })();

  async function compressFolder(slug, minifiedCount = 0) {
    const bannerFolder = `./public/banners/${slug}`
    const zipPath = `./public/banners/${slug}.zip`
    // creating archives
    var zip = new AdmZip();
    zip.addLocalFolder(bannerFolder);
    zip.writeZip(/*target file name*/ zipPath);

    //? - - check the final size of the folder
    const fileSizeInBytes = checkSize(zipPath);

    if (fileSizeInBytes >= 300000) {
      data[slug].push(`${zipPath} is over 300kb - minification of images needed. filesize: ${fileSizeInBytes}`)
      alerts.push(zipPath)

    } else if (fileSizeInBytes >= 150000) {
      if (minifiedCount > 0) {
        data[slug].push(`${zipPath} is over 150kb and images have already been compressed. filesize: ${fileSizeInBytes}`)
        alerts.push(zipPath)
        return
      }
      
      data[slug].push(`${zipPath} is over 150kb and images are being compressed. original filesize: ${fileSizeInBytes}`)
      minifiedCount += 1;
      
      await imageCompression(bannerFolder);
      await compressFolder(slug, minifiedCount)
      
    } else {
      data[slug].push(`${zipPath} is under 150kb. filesize: ${fileSizeInBytes}`)

    }
  }

  function checkSize(zipPath) {
    const stats = fs.statSync(zipPath);
    const fileSizeInBytes = stats.size;

    return fileSizeInBytes;

  }


  const shuffleFile = async (file, fi , fa) => {
    const search = [...file.sourcePath.matchAll(/(.+)(?:\/)(.+)/g)][0];
    const pathBase = search[1];
    const filename = search[2];
    const tempMinPath = pathBase + '-min/'
    const maxFolder = pathBase + '-max/'
    const maxFilePath = maxFolder + filename;

    // if no folder for -max yet, create one
    if (!fs.existsSync(maxFolder)) {
      fs.mkdir(maxFolder,(err) => { if (err) throw err; });
    }
    // move original files to -max, move minimized files to original location
    fs.rename(file.sourcePath, maxFilePath, (err) => {
      if (err) throw err;
      fs.rename(file.destinationPath, file.sourcePath, (err) => {
        if (err) throw err;
        if (fi === fa.length - 1) {
          deletefolder(tempMinPath)
        }
      })
    })
  }

  const deletefolder = async (path) => {
    if (fs.existsSync(path)) {
      fs.rmdir( path, (err) => {
        if (err) throw err;
        console.log(`moved original images to max and replaced them with compressed copies, that were temporarily stored at ${path}`)
      })
    }
  };

  async function imageCompression(path) {
    console.error(`${path} is over 150kb, trying to minify PNG's`);
    const tempMinPath = `${path}-min/`
    const files = await imagemin([`${path}/*.{jpg,png}`], {
      destination: tempMinPath,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 1]
        })
      ]
    });

    await asyncForEach(files, async (file, fi, fa) => { 
      await shuffleFile(file, fi, fa)
    })
  }

  async function printResults() {
    console.log(data)
    if (alerts[0]) {
      console.log('File Size Alerts ------------------------')
      alerts.forEach(alert => console.log(alert, " < check image sizes"))
    }
  }

  
  
};
