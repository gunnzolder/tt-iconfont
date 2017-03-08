# Twisted Tools Icon Font #

A tool for automated icon font generation.

### Dependencies: ###

* Node.js https://nodejs.org/en/download/

### Installation

* install node.js 
* run `npm install` and `npm install gulp -g` from `app` folder

### Configuration

* The script is configured by modifying the `app/gulpfile.js` file
* The templates are located in the `app/templates` folder

### How to use ###

* By default the icons are generated from the 'tt-iconfont' sketch file - add/remove/edit them there
* run `gulp iconfont` from the `app` folder or `sh generate.sh` from the root
* look for the font files in the `output` folder 
* NOTE: please verify the symbols by opening `output/preview.html` in the browser

### Debug/SVG fallback ###

* you can also use svg files as a source putting them into `svg` folder and running `gulp iconfont --source='svg'` from the `app` folder or `sh generate-from-svg.sh` from the root
