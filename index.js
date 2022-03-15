// Libraries
import Mustache from 'mustache'
import fs from 'fs'

// Constants
const MUSTACHE_MAIN_DIR = './main.mustache';

// Variables
let DATA = {
  name: 'Thomas',
  date: new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Europe/Stockholm',
  }),
};
``
// 
const generateReadMe = () => {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;

    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();