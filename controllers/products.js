import '../styles/blocks/galeryElement.css'
import '../styles/blocks/galery.css'
import { listProductos } from '../services/product-service'

const galery = document.querySelector("[data-galery]");

listProductos().then((data) => {
    addToAllGalery(galery,data)
})

export const filterProducts = (category, data) =>
    data.filter((product) => {
        if (product.categoria == category) {
            return product;
        }
    })

export const addToGalery = (galery, products) => {
    const displayProducts = products.map((product) => `
    <div class="galery__element">
        <img class="galery__element__img" src=${product.imgsrc} alt=${product.nombre}>
        <span class="galery__element__title">${product.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(product.precio).toFixed(2)}</span>
        <i class="galery__element__detail">Ver producto</i>
    </div>`)
    galery.innerHTML = displayProducts.join('');
}
const addToAllGalery = (galery, products) => {
    const displayProducts = products.map((product) => `
    <div class="galery__element">
        <img class="galery__element__img" src=${product.imgsrc} alt=${product.nombre}>
        <span class="galery__element__title">${product.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(product.precio).toFixed(2)}</span>
        <i class="galery__element__id">#${product.id}</i>
    </div>`)
    galery.innerHTML = displayProducts.join('');
}

