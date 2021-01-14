const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgContents = require("eleventy-plugin-svg-contents");
const compressNCheck = require("./nodeScripts/compressNCheck");
// import { compressNCheck } from "./nodeScripts/compressNCheck";

const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addWatchTarget("./src/scss/");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/static");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.png");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.jpg");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.gif");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.PNG");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.JPG");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.JPEG");
    eleventyConfig.addPassthroughCopy("./src/banners/**/*.GIF");
    
    // add naviagtion plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(svgContents);


    let bannerslugs = [];
    eleventyConfig.addCollection("banners", function(collectionApi) {
        bannerslugs = [];
        const banners = collectionApi.getFilteredByGlob(["./src/banners/*.njk"]);
        banners.forEach(function(banner) {
            bannerslugs.push(banner.data.eleventyNavigation)
        })
        return banners;
    });

    eleventyConfig.on('afterBuild', () => {
    // Run me after the build ends
        // console.log(process.argv, 'after any build')
        if (process.argv[2] && process.argv[2] === "--serve") {
            // console.log('running only on serve/watch')
            compressNCheck(bannerslugs);
        } else {
            console.log(bannerslugs)
            // console.log('afterbuild')
        }

    });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
        }
    }

}