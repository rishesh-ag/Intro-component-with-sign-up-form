let submit = document.querySelector('.submit');
let fnameField = document.querySelector('#firstname');
let lnameField = document.querySelector('#lastname');
let emailField = document.querySelector('#email');
let passField = document.querySelector('#password');

let label=document.getElementsByTagName('label');

submit.addEventListener('click',()=>{
    let fname=fnameField.value;
    let lname=lnameField.value;
    let email=emailField.value; 
    let pass=passField.value;

    if(fname.trim()==''){
        fnameField.classList.add('error');
        label[0].classList.remove('hide');
        fnameField.placeholder = "";
    }
    else{
        fnameField.classList.remove('error');
        label[0].classList.add('hide');
        fnameField.placeholder = "First Name";

    }

    if(lname.trim()==''){
        lnameField.classList.add('error');
        label[1].classList.remove('hide');
        lnameField.placeholder = "";
    }
    else{
        lnameField.classList.remove('error');
        label[1].classList.add('hide');
        lnameField.placeholder = "Last Name";
    }

    if(!(isValid(email))){
        emailField.classList.add('error');
        label[2].classList.remove('hide');
        emailField.placeholder = "email@example/com";
    }
    else{
        emailField.classList.remove('error');
        label[2].classList.add('hide');
        emailField.placeholder = "Email Address";
    }

    if(pass.trim()==''){
        passField.classList.add('error');
        label[3].classList.remove('hide');
        passField.placeholder = "";
    }
    else{
        passField.classList.remove('error');
        label[3].classList.add('hide');
        passField.placeholder = "Password";
    }
});

function isValid(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}