import "../styles/blocks/search.css"

const searchForm = document.querySelector("[data-form]");

searchForm.addEventListener("submit",event=>{
    event.preventDefault();
    const busqueda = searchForm.children[0].value
    window.location = `./productos.html?search=${busqueda}`

});