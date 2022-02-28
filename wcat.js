const fs=require("fs")
const {sflag,bflag,nflag,getFilesData}= require("./util.js")
const args=process.argv.slice(2,)
const files=[]
const flags=[]
for(let i=0;i<args.length;i++){                //loop to seperate the files and flags 
    if(args[i].startsWith("-")){
        flags.push(args[i])
    }
    else{
        files.push(args[i])
    }
}
let filesData=getFilesData(files)              //getFilesData method to get all the data from the files
if(flags.includes("-s")){
    filesData=sflag(filesData)                 //apply the sflag
}
if(flags.includes("-b")&&flags.includes("-n")){ // check if -b and -n both flags are available  
    if(flags.indexOf("-b")<flags.indexOf("-n")){
        filesData=bflag(filesData)
    }
    else{
        filesData=nflag(filesData)
    }
}
else if(flags.includes("-b")){
    filesData=bflag(filesData)
}
else if(flags.includes("-n")){
    filesData=nflag(filesData)
}
console.log(filesData)