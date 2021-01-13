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
    eleventyConfig.addPassthroughCopy("./src/banners");
    // add naviagtion plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(svgContents);

    // eleventyConfig.addNunjucksFilter("svgImageUrlSetter", function(svg, loc) {
    //     svg.replace(/:href="/g, `:href="${loc}`)
    // });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            layouts: "_layouts",
        }
    }

}