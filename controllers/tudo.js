import '../styles/blocks/banner.css'
import '../styles/blocks/galeryElement.css'
import '../styles/blocks/tudoGalery.css'
import { listProductos } from '../services/product-service'

const galery_StarWars = document.querySelector("[data-galery-starwars]");
const galery_Consoles = document.querySelector("[data-galery-consoles]");


const filterProducts = (category, data) =>
    data.filter((product) => {
        if (product.categoria == category) {
            return product;
        }
    })

const addToGalery = (galery, products) => {
    const displayProducts = products.map((product) => `
    <div class="galery__element">
        <img class="galery__element__img" src=${product.imgsrc} alt=${product.nombre}>
        <span class="galery__element__title">${product.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(product.precio).toFixed(2)}</span>
        <i class="galery__element__detail">Ver producto</i>
    </div>`)
    galery.innerHTML = displayProducts.join('');
}
listProductos().then((data) => {
    addToGalery(galery_StarWars, filterProducts("Star Wars", data))
    addToGalery(galery_Consoles, filterProducts("Consolas", data))
})
