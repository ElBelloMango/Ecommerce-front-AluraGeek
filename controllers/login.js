import '../styles/blocks/login.css'

const login = document.querySelector("[data-login]");

login.addEventListener("submit",(event)=>{
    event.preventDefault();
    window.location = "./tudo.html"
})