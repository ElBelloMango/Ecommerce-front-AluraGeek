import '../styles/blocks/navbar.css'
import '../styles/elements/button.css'
import '../styles/elements/input.css'
import '../styles/blocks/footer.css'

const contactForm = document.querySelector(".footer__form");
contactForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    window.location.href = "mailto:magozuleta@gmail.com"
})
