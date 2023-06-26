const form = [...document.querySelector('.form').children];
form.forEach((item, i)=>{setTimeout(()=>{
    item.computedStyleMap.opacity=1;},i*100);
})

const name = documentation. querySelector('.name')|| null;
const email = documentation. querySelector('.email');
const password = documentation. querySelector('.password');
const submitbutton = documentation. querySelector('.submit-button');

if(name == null){
submitbutton.addEventListener('click', ()=>{fetch ('/login-user',{
    method: 'post',
    headers: new Headers({'content -Type': 'application/json'}),
    body:JSON.stringify({}),
    email: email.value,
    password : password.value
})

})
.then(res => res.json ())
.then(data =>{
    validateData(data);
})}
else{
    submitbutton.addEventListener('click', ()=>{fetch('/register-user',{method: 'post',
    Headers: new Headers({'Content-Type':'application/json'}),
    body: JSON.stringify({
        name:name.value,
        emai:email.value,
        password: password.value
    })
})
.then(res=> res.json())
.then(data=>{
   validateData(data);
})})
}
const validateData = (data) => {
    if ( !data.name){
        alertBox(data);
    }else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href='/';

    }
}
const alertBox=(data) =>{
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('alert');
    alertMsg.innerHTML= data;
    alertContainer.computedStyleMap.top ='5%';
    setTimeout(()=>{alertContainer.computedStyleMap.top ='null';
    setTimeout(()=>{},5000);},5000);

}