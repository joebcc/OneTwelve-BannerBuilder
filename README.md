# OneTwelve-BannerBuilder

This is a framework for building banner campaigns in an organized and streamlined manner.

## Configuring the campaign

First step would be to open `/src/_layouts/banner.njk`, which is the top level banner template, and adjust the title and the clickUrl for the campaign. If you desire individual titles / clickUrl's, these can be removed from this main file, and instead set within the individual implementations of the banners (`.njk` files within `/src/banners/`)

## Adding New Banners

To get started, run `npm run addbanners` and following the prompts set the desired banner sizes, and banner versions you would like to build. This command will create the appropriate files + folders for each of possible combination of the supplied sizes + versions.

To customize the template files used for new banners, you can edit the template files located in `/src/_templates/`. There is one for the banner template itself - `bannerTemplate.njk`, and one for the banner's animation script `bannerAnimationScriptTemplate.njk`.

## Populating SVG's + images for banners

After adding new banners using the `addbanners` script the `/banners` folder will have a folder for each banner iteration. Populate these folders with the matching .svg and any linked images for each banner. 

By default, the banner template looks for an svg that matches the  default naming convention used within this tool `{BannerVersion}-{BannerWidth}x{BannerHeight}` however this can be altered by adjusting a banners .njk template (found directly in `/banners`), by altering the `svg` data point at the top of the file.

## Controlling animations for individual banners

Each banner has a file ending in `-script.njk` within it's folder , the folder 

## Setting global variables + css

Global animation variables can be set in `src/_includes/scripts/_GlobalAnimationDefs.njk` which is by default brought in to every banner.

Global CSS can be set in `/src/_includes/scripts/main.css` which is by default brought in to every banner.

## Testing the framework

Running `npm run start` will start the development server

## Building the final files

Running `npm run build` will build the files for distribution with the `/public/` folder.


