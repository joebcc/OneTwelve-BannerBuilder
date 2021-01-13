# OneTwelve-BannerBuilder

This is a framework for building banner campaigns in an organized and streamlined manner.

## Adding New Banners

To get started, run `npm run addbanners` and following the prompts set the desired banner sizes, and banner versions you would like to build. This command will create the appropriate files + folders for each of possible combination of the supplied sizes + versions.

To customize the template files used for new banners, you can edit the template files located in `/src/_templates/`. There is one for the banner template itself - `bannerTemplate.njk`, and one for the banner's animation script `bannerAnimationScriptTemplate.njk`.

## Working with files within the framework

After adding new banners using the `addbanners` script the `/banners` folder will have a folder for each banner iteration. Populate these folders with the matching .svg and any linked images. 

By default, the banner template looks for an svg that matches the  default naming convention used within this tool `{BannerVersion}-{BannerWidth}x{BannerHeight}` however this can be altered by adjusting a banners .njk template (found directly in `/banners`), by altering the `svg` data point at the top of the file.

## Testing the framework

Running `npm run start` will start the development server

## Building the final files

Running `npm run build` will build the files for distribution with the `/public/` folder.