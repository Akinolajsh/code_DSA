import path from "path";

let newPath = "C:/Users/USER/Documents/DSA/ignore/index.js";
// console.log(path.basename(newPath));
// console.log(path.dirname(newPath));
// console.log(path.extname(newPath));
console.log(path.join(__dirname, "ignore", "index.js"));
