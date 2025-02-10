let sub=()=>{
let inpname=document.querySelector("#name").value;
let inpnumber=document.querySelector("#number").value;
let inpemail=document.querySelector("#email").value;
let inppass=document.querySelector("#pass").value;
let inpcpass=document.querySelector("#cpass").value;


let errname=document.querySelector("#errorname")
let errnum=document.querySelector("#errornum")
let erremail=document.querySelector("#erroremail")
let errpass=document.querySelector("#errorpass")
let errcpass=document.querySelector("#errorcpass")


if(inpname==""){
    errname.innerHTML="please fill the name field"
    errname.style.color="red"
    return false;
}
   


    // if(inpname==""||inppass==""||inpcpass=="")
    // {
    //     alert("all fields are mendatory");
    //         return false;
    // }
    // else if(inppass!=inpcpass)
    // {
    //     alert("please enter same password");
    //     return false;
    // }else
    // {
    //     true;
    // }
    // }
else if(isNaN(inpnumber)){       //if number then ans will be false

    errnum.innerHTML="please enter number only"
    errnum.style.color="green"
    return false;

}
else if( inpnumber.length!==10){
    errnum.innerHTML="please enter 10 digit only"
    
    return false

}
// email
else if( !(inpemail.includes("@") && inpemail.includes(".com")))
    {   

erremail.innerHTML="please enter valid email"
return false
}


//    else if(inppass.match()) 
    
   else  if(inppass==inpcpass){
        alert("submitted")
        return true;
    }
    else{
       errcpass.innerHTML="password not matching please enter the correct password"
        errcpass.style.color="brown"
        
        
        return false;
    
    }

}




