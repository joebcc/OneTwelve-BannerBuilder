const AdmZip = require('adm-zip');
module.exports = function(banners) {	

  //? - after build, loop through each banner folder
  console.log ( banners );
  banners.forEach(function(banner) {
    let {key} = banner;
    console.log ( key );
    
    //? - - compress each folder
    compress(key);

    //? - - check the final size of the folder
    //? - - - if >150kb && <250kb, 
    //? - - - - run tinypng
    //? - - - - mark +1 minification
    //? - - - - if < 3 minifications
    //? - - - - - compress+check once again
    //? - - - if one of them is larger than 300kb, send warning in the compiler

  })
};


function compress(slug) {
	// creating archives
	var zip = new AdmZip();
	
	// add local file
	zip.addLocalFolder(`./public/banners/${slug}`);
	// or write everything to disk
  zip.writeZip(/*target file name*/`/public/bannersCompressed/${slug}.zip`);
  console.log('compressed', slug)
	
}