const fs= require("fs")
f1kadata=fs.readFileSync("./f1.txt","utf-8")
f2kadata=fs.readFileSync("./f2.txt","utf-8")
console.log(f1kadata+f2kadata)