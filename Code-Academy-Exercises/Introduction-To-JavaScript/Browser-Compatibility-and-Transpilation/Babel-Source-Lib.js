{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

 
 
 In order to transpile my code, I needed to specify a script in "package.json" that initiates the ES6+ to ES5 transpilation. The "scripts" property on line 6 contains the object "test". Within the "scripts" property, I added a property called "build" that has a value of "babel src -d lib", which is a command line method that transpiles ES6+ code to ES5. "Babel" is the command call responsible for transpiling code; "src" instructs Babel to transpile all JavaScript code inside the src directory; "-d" tells "Babel" to write the transpiled code to a directory; "lib" is a directory that "Babel" writes the transpiled code to.
 
 