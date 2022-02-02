
let flag=document.querySelector("#myform").addEventListener("submit", function(event){
    event.preventDefault();
});
function success(){
    document.querySelector("h3").textContent="";
}  
function formValidation(){
    debugger;
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const phone=document.querySelector("#phone").value;
    const dob=document.querySelector("#dob").value;
    const gender=document.querySelector("#gender").value;
    const psswd=document.querySelector("#password").value;
    const confirm_psswd=document.querySelector("#confirm-psswd").value;
    let flag=true;
    
if(name!=""){
    if(!name.match(/^[A-Za-z ]+$/)){
        document.querySelector(".name-err").textContent="Name should not contain any special characters or digits";
        flag=false;
    }
    else{
        document.querySelector(".name-err").textContent="";
    }
}
else{
    document.querySelector(".name-err").textContent="Please enter your name";
    flag=false;
}

if(phone!=""){
    if(!phone.match(/^[6-9][0-9]{9}$/)){
        document.querySelector(".phone-err").textContent="Please enter valid phone number";
        flag=false;
    }
    else{
        document.querySelector(".phone-err").textContent="";
    }
}
else{
    document.querySelector(".phone-err").textContent="Please enter phone number";
    flag=false;
}

if(email!=""){
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        document.querySelector(".email-err").textContent="Please enter valid email address";
        flag=false;
    }
    else{
        document.querySelector(".email-err").textContent="";
    }
}
else{
    document.querySelector(".email-err").textContent="Please enter email address";
    flag=false;
}

if(dob!=""){
    if((Number(new Date().getFullYear() - new Date(dob).getFullYear())<18)){
       document.querySelector(".date-err").textContent="You are not eligible";
       flag=false;
    }
    else{
        document.querySelector(".date-err").textContent="";
    }
}
else{
    document.querySelector(".date-err").textContent="Please enter date of birth"; 
    flag=false;
}

if(gender=="-1"){
    document.querySelector(".gender-err").textContent="Please select your Gender";
    flag=false;
}
else{
     document.querySelector(".gender-err").textContent="";
 }

if(psswd!=""){
    if(!psswd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/))
    {
         document.querySelector(".pass-err").textContent="Password should contain atleast one lowercase character, uppercase character, a special character and should not be less than 8 characters ";
         flag=false;
    }
    else{
        document.querySelector(".pass-err").textContent="";
    }
}
else{
    document.querySelector(".pass-err").textContent="Please enter password";
    flag=false;
}

if(confirm_psswd!=""){
    if(confirm_psswd!=psswd){
        document.querySelector(".conpass-err").textContent="Confirm Password is not matching with actual password";
        flag=false;
    }
    else{
        document.querySelector(".conpass-err").textContent="";
    }
}
else{
    document.querySelector(".conpass-err").textContent="Please enter password";
    flag=false;
}

if(flag){
    
    document.querySelector("#myform").reset();
    document.querySelector("h3").textContent="Registration is successful";
    let timeout=setTimeout(success,3000);
   
}
return flag;

}

