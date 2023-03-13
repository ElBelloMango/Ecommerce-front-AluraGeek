import '../styles/blocks/navbar.css'
import '../styles/elements/button.css'
import '../styles/elements/input.css'
import '../styles/blocks/footer.css'


const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const searchButton = document.querySelector("[data-search-button]");
const logo = document.querySelector(".navbar__logo");

const contactForm = document.querySelector(".footer__form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "mailto:magozuleta@gmail.com"
})

searchButton.addEventListener("click", (e) => {
    var x = window.matchMedia("(max-width: 700px)");
    e.preventDefault();
    if (x.matches){
        window.location = "./search.html"
    }
    if (!x.matches && !searchInput.validity.valueMissing) {
        searchInput.setCustomValidity("");
        window.location = `./productos.html?search=${searchInput.value}`
    }
    else {
        searchInput.setCustomValidity("Por favor ingrese un valor");
        searchInput.reportValidity();
    }
})
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (!searchInput.validity.valueMissing) {
        searchInput.setCustomValidity("");
        window.location = `./productos.html?search=${searchInput.value}`
    }
    else {
        searchInput.setCustomValidity("Por favor ingrese un valor");
        searchInput.reportValidity();
    }
})
logo.addEventListener("click",()=>window.location="./tudo.html")
