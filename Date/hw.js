function btn() {
    let birthdayYear = document.querySelector("#birthdayYear").value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthdayYear;

    document.querySelector("#age").innerHTML = "Your age is:"+age;
}


// milisecond

// function n() {

//     let n= document.querySelector("#age").value;
//     let display=new Date()
//     a.innerHTML=display.toLocaleString()

// }