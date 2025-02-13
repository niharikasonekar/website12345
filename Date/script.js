console.log(new Date())



// get full year

let t=new Date()
console.log(t.getFullYear())

// to readable mode

console.log(t.toDateString())

// get month
console.log(t.getMonth())


// get day
console.log(t.getDay())

// get hour

console.log(t.getHours())

// get minutes

console.log(t.getMinutes())

// get second

console.log(t.getSeconds())

// get milli second

console.log(t.getMilliseconds())



// get day in Array form



let a=["Sun", "Mon","tues", "Wes","thus", "fri","sat"]
let b=document.querySelector("#s")

let s1=()=>{

    b.innerHTML=a[t.getDay()] 
}

<
