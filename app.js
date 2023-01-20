const nameArea = document.getElementById(`name`)
const emailArea = document.getElementById(`email`)
const passwordArea = document.getElementById(`password`)
const cPasswordArea = document.getElementById(`Cpassword`)
const btn = document.getElementById(`btn`)
const submit = document.getElementsByClassName(`submit`)[0]
const button = document.getElementById(`button`)

let data = []

const checkMatch=(mail)=>{
   return data.find(element=> element.email==mail)
}

const validatepwd=(pwd)=>{
   const minLength = 8
   const maxLength =16
   const regularExp = (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9!@#.$%&*]{8,16}$/)
    if(pwd.length<minLength||pwd.length>maxLength){
       return true
    }
    else if(!regularExp.test(pwd)){
        return true
    }
}

const validateMail=(email)=>{
    var validRegex = /^(?=.*[@])(?=.*[.])[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!validRegex.test(email)){
        return true
    }
}

let signup=()=>{
    const name = nameArea.value
    const email = emailArea.value
    const password = passwordArea.value
    const cPassword = cPasswordArea.value
    let div = document.createElement(`div`)
    // console.log(name,email,password,cPassword)
    if(!name || !email || !password || !cPassword){
        div.innerHTML = `<p>Please fill all the fields</p>`
        submit.appendChild(div)
        div.style.color = `red`
        // document.getElementsByClassName(`error`)[0].innerHTML=``
    }
    else if(name.length<2){
        div.innerHTML = `<p>Please Enter valid name</p>`
        submit.appendChild(div)
        div.style.color = `red`
    }
    else if(checkMatch(email)){
        div.innerHTML = `<p>User is already registered</p>`
        submit.appendChild(div)
        div.style.color = `red`
    }
    else if(password==name||password==email){
        div.innerHTML = `<p>Password should not be Username or email</p>`
        submit.appendChild(div)
        div.style.cssText = `color : red; font-size : 15px;`
    }
    else if(validatepwd(password)){
        div.innerHTML = `<p>Please Enter valid Password</p>`
        submit.appendChild(div)
        div.style.color = `red`
    }
    else if(validateMail(email)){
        div.innerHTML = `<p>Please Enter valid Email</p>`
        submit.appendChild(div)
        div.style.color = `red`
    }
    else if(password!=cPassword){
        div.innerHTML = `<p>Password do not match</p>`
        submit.appendChild(div)
        div.style.color = `red`
    }
    else{
        let usersignup = {
            id : data.length+1,
            name : name,
            email : email,
            password : password
        }

        data.push(usersignup)
        // window.location.href = "/login/login.html";
        // button.addEventListener(`click`, login)
    }
    console.log(data)
    console.log(btn)
}
btn.addEventListener(`click`, signup)


function login(){
    const email = emailArea.value
    const password = passwordArea.value
    let div = document.createElement(`div`)
    // console.log(name,email,password,cPassword)
    if(!email || !password){
        div.innerHTML = `<p>Please fill all the fields</p>`
        submit.appendChild(div)
        div.style.color = `red`
        // document.getElementsByClassName(`error`)[0].innerHTML=``
    }

}











