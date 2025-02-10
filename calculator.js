let store=""
let cal=(value)=>{     //1//2//+//5

    store=store+value   //1 =>"12+5"

    let show=document.querySelector("#display")

    show.innerHTML=store
}

let ans=()=>{
    let show=document.querySelector("#display")
    show.innerHTML=eval(store)  //"12+6"==>18 number'
    store=eval(store)  //18 number  +-*/ answer will give u
    store.toString()  //18 string
}

let AC=()=>{
    store=""
    let show=document.querySelector("#display")
    show.innerHTML=""  //or  write store
}
let del=()=>{
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store
}


let SQ=()=>{
    let a=store*store
    let show=document.querySelector("#display")
    show.innerHTML=a


}







































































