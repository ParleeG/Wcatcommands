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
    console.log(removedSpaces.join("\r\n"))
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
    console.log(b.join("\r\n"))
}
function nflag(data){
    f1=data.split("\r\n")
    n=[]
    count=1
    for(let i=0;i<f1.length;i++){
        n.push(`${count}. ${f1[i]}`)
        count++
    }
    console.log(n.join("\r\n"))
}
module.exports={sflag,bflag,nflag}