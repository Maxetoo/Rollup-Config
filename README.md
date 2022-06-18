# Rollup-Config
Full setup for javaScript bundler (ROLLUP)

# Global Installation
npm install rollup --global

# Main Entry Point 
src/main.js

# Create A Bundle 
rollup src/main.js -f cjs

# Install Locally
npm i -D rollup

# Package.json Configuration
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "rollup -c --watch",
        "build": "rollup -c",
        "dev": "rollup src/main.js -f cjs -d dist"
    },
  
  # Install Css Plugins
  npm i rollup-plugin-css-only
  
 # Rollup Congig.js
 import css from 'rollup-plugin-css-only'

export default {
    input: 'src/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'cjs',
        inlineDynamicImports: true,
    },
    plugins: [css({ output: 'bundle.css' })],
}

# Bundle Package
run npm start
 
 



