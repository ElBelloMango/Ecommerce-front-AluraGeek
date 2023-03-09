import '../styles/blocks/banner.css'
import '../styles/blocks/galeryElement.css'
import '../styles/blocks/galery.css'
import { listProductos } from '../services/product-service'
import { filterProducts,addToGalery } from './products.js'

const galery_StarWars = document.querySelector("[data-galery-starwars]");
const galery_Consoles = document.querySelector("[data-galery-consoles]");
const galery_Diverse = document.querySelector("[data-galery-diverse]");
const content = document.querySelector("[data-content]");

listProductos().then((data) => {
    addToGalery(galery_StarWars, filterProducts("Star Wars", data).reverse().slice(0,6))
    addToGalery(galery_Consoles, filterProducts("Consolas", data).reverse().slice(0,6))
    addToGalery(galery_Diverse, filterProducts("Diversos", data).reverse().slice(0,6))
}).catch(error=>{
    content.classList.add("error");
    content.innerHTML = `<h1>El servidor no responde. Intentelo de nuevo más tarde</h1><h2>Codigo de error 503</h2>`
})
