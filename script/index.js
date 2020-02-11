const fs = require('fs');

let pkg = JSON.parse(fs.readFileSync('package.json'));
let sw = fs.readFileSync('service-worker.js').toString();
let newSw = sw.replace(
  /const LATEST_VERSION = '.+';/,
  `const LATEST_VERSION = '${pkg.version}';`,
);
fs.writeFileSync('service-worker.js', newSw);
