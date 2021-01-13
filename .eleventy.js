const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgContents = require("eleventy-plugin-svg-contents");


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


    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
        }
    }

}