// Libraries
import Mustache from 'mustache'
import fs from 'fs'
import axios from 'axios'

// Constants
import { 
  JB_GITHUB_API_URL as apiUrl,
  MUSTACHE_PATH as mustache_path
} from './constants.js'

// Variables
let DATA = {
  commits: {
    counts: {
      daily: 6,
      weekly: 15,
      monthly: 100
    }
  }
}

// Script
const fetchData = async () => {
  const data = axios.get(apiUrl, { per_page: 100 })
  .then(json => console.log(json.data.length))
  // .then(json => console.log(Object.keys(json)))
// .then(response => response.json())
// .then(json => console.log(json))

}

fetchData()


// const generateReadMe = () => {
//   fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
//     if (err) throw err;

//     const output = Mustache.render(data.toString(), DATA);
//     fs.writeFileSync('README.md', output);
//   });
// }

// generateReadMe();