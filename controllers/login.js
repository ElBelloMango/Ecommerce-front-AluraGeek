import '../styles/blocks/login.css'
import { getUser } from '../services/user-service.js';
import { SHA256 } from 'crypto-js';
import '../styles/blocks/navbar.css'
import '../styles/elements/button.css'
import '../styles/elements/input.css'
import '../styles/blocks/footer.css'


const form = document.querySelector("[data-login-form]");
const auth = document.querySelector("[data-auth]");
const contactForm = document.querySelector(".footer__form");

function errorAutenticacion(){
    auth.classList.remove("form__auth--hidden");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.children[0].value;
    const password = form.children[1].value;
    const hashpass = SHA256(password).toString();
    getUser(email)
        .then((user) => {
            if (user["password-hash"] == hashpass) {
                window.location = "tudo.html"
            }
            else errorAutenticacion();
        }).catch((e) => {
            if (e.codigo == 404) {
                errorAutenticacion();
            }
            else console.error("Error en el servidor" + e);
        });
})

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "mailto:magozuleta@gmail.com"
})