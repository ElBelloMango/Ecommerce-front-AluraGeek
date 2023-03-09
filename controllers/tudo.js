import '../styles/blocks/banner.css'
import '../styles/blocks/galeryElement.css'
import '../styles/blocks/galery.css'
import { listProductos } from '../services/product-service'
import { filterProducts,addToGalery } from './products.js'

const galery_StarWars = document.querySelector("[data-galery-starwars]");
const galery_Consoles = document.querySelector("[data-galery-consoles]");
const galery_Diverse = document.querySelector("[data-galery-diverse]");


listProductos().then((data) => {
    addToGalery(galery_StarWars, filterProducts("Star Wars", data))
    addToGalery(galery_Consoles, filterProducts("Consolas", data))
    addToGalery(galery_Diverse, filterProducts("Diversos", data))
})
