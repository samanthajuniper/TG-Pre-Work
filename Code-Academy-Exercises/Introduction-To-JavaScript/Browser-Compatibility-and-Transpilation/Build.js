$ npm run build

#The npm command line on line 1 runs the build script in "package.json". The npm run build command will transpile all JavaScript files inside of the src folder. The directory now contains a new folder called lib. Babel writes the ES5 code to a file named main.js (it's always the same name as the original file), inside the folder "lib". 