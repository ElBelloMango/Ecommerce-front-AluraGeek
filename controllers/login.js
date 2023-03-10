import '../styles/blocks/login.css'
const form = document.querySelector("[data-login-form]");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.location = "tudo.html"
})