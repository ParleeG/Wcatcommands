const fs= require("fs")
function sflag(data){
    f1=data.split("\r\n")
    spaceIncluded=false
    removedSpaces=[]
    for(let i=0;i<f1.length;i++){
        if(f1[i]=="" && spaceIncluded==false){
            removedSpaces.push(f1[i])
            spaceIncluded=true
        }
        else if(f1[i]!=""){
            removedSpaces.push(f1[i])
            if(i<f1.length-2){
                spaceIncluded=false
            }
        }
    }
    return removedSpaces.join("\r\n")
}
function bflag(data){
    f1=data.split("\r\n")
    b=[]
    count=1
    for(let i=0;i<f1.length;i++){
        if(f1[i]!=""){
            b.push(`${count}. ${f1[i]}`)
            count++
        }
        else{
            b.push(f1[i])
        }
    }
    return b.join("\r\n")
}
function nflag(data){
    f1=data.split("\r\n")
    n=[]
    count=1
    for(let i=0;i<f1.length;i++){
        n.push(`${count}. ${f1[i]}`)
        count++
    }
    return n.join("\r\n")
}
function getFilesData(files){
    let filesData=""
    for(let i=0;i<files.length;i++){
        if(!fs.readFileSync(`./${files[i]}`)){
            console.log("One or more file doesn't exist")
            return ""
        }
        filesData+=fs.readFileSync(`./${files[i]}`)
    }
    return filesData
}
module.exports={sflag,bflag,nflag,getFilesData}