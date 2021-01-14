
//! script to auto populate the necessary files for a new banner or set of banners


//? Todo:
//? -----
  const fs = require('fs');



  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  const bannerSlugs = [];

//? - Set the variables for the desired size(s), and version(s) to be added
  rl.question(`NEW SIZES (>1 entries separate with a space & use WIDTHxHEIGHT format (300x250 300x600) : `, function(sizes) {
      rl.question(`NEW VERSIONS : (>1 entries separate with a space (VerA VerB) : `, function(versions) {
        
        sizes = [...sizes.match(/(\w)+/g)];
        
        versions = [...versions.match(/(\w)+/g)];

        console.log(sizes,  versions);

          //? - Combine sizes and versions into an array of slugs, joining version and size for each iteration 
          setSlugs(sizes, versions);

          //? - ForEach iteration
          loopBanners(bannerSlugs);

          rl.close();
      });
  });


  function setSlugs(sizes,versions) {
    if (!Array.isArray(sizes)) {sizes = [sizes]}
    if (!Array.isArray(versions)) {versions = [versions]}
    sizes.forEach(size => versions.forEach(version => bannerSlugs.push(`${version}-${size}`)))
    console.log(bannerSlugs)
  }

  function loopBanners(banners) {
    banners.forEach(function(slug) {
      //? - - Populate /banners with a folder with the slug 
      newFolder(slug);

      //? - - Populate _includes/animationScripts with {slug.njk} copying from a global template
      newAnimationScript(slug);
    })
  }

  function newFolder(slug) {
    const location = './src/banners/' + slug;
    fs.mkdir(location, 
      { recursive: true }, (err) => { 
      if (err) { 
        return console.error(err); 
      } 
      
      //? - - Populate /banners {slug}.njk copying from a global template
      newBannerFromTemplate(slug);
      console.log('Directory created successfully!', location); 
    }); 
    // console.log('Directory created successfully!', location); 
  }

  function newBannerFromTemplate(slug) {
    const src = "./src/_templates/bannerTemplate.njk_";
    const dest = `./src/banners/${slug}.njk`;
    fs.copyFile( src, dest, fs.constants.COPYFILE_EXCL, (err) => { 
      if (err) { console.log("Error Found:", err); } 
      else { 
        
        //? - - auto-fill variables in each /banners/{slug}.njk 
        fillBannerVariables(slug, dest);
      }  
    })
    // fillBannerVariables(slug, dest);
    // console.log('Banner File created successfully!', dest); 
  }
  
  function fillBannerVariables(slug, src) {
    const search = [...slug.matchAll(/(?<version>.+)-(?<width>\d+)x(?<height>\d+$)/g)][0];
    const version = search[1];
    const width = search[2];
    const height = search[3];

    fs.readFile(src, 'utf8', (err, data) => {
      if (err) return console.log(err);

      var fileContents = data.replace(/\$\$version/g, version);
      fileContents = fileContents.replace(/\$\$width/g, width);
      fileContents = fileContents.replace(/\$\$height/g, height);

      fs.writeFile(src, fileContents, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log(version, width, height, 'written to ', src)
      });
    });
  }



  function newAnimationScript(slug) {
    const src = "./src/_templates/bannerAnimationScriptTemplate.js";
    const dest = `./src/banners/${slug}/${slug}-script.js`;
    fs.copyFile( src, dest, fs.constants.COPYFILE_EXCL, (err) => { 
      if (err) { console.log("Error Found:", err); } 
      else { 
        console.log('new animation script file created ', dest)
      }  
    })

  }

