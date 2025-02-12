setTimeout(()=>{
    console.log("Running.....");
 },3000)

console.log("In proccess");


let shiv=()=>{
let show=document.querySelector("#bt1")
setTimeout(()=>{
show.innerHTML="shivani"
},3000)
}

//===============================SETINTERVAL===============================================

setInterval(()=>{
    console.log("Running.....");
},2000)


//=========================================COUNT======================================
// let count=0;
// setInterval(()=>{
//     console.log(count);                     //console prrr
//     count++
// },2000)

//  let clear;
// let counta=0;
// let ram=()=>{
//     let show=document.querySelector("#bt2")
//   clear=setInterval(()=>{
//     show.innerHTML=counta;                     
//     counta++
// },2000)

// }