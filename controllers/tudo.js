import '../styles/blocks/banner.css'
import '../styles/blocks/galeryElement.css'
import '../styles/blocks/tudoGalery.css'
import { listProductos } from '../services/product-service'

const galery = document.querySelector("[data-galery-starwars]");

let productos;

listProductos("starwars").then((data) => {
    productos = data;
    const displayProducts = productos.map((producto)=>`
    <div class="galery__element">
        <img class="galery__element__img" src=${producto.imgsrc} alt=${producto.nombre}>
        <span class="galery__element__title">${producto.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(producto.precio).toFixed(2)}</span>
        <i class="galery__element__detail">Ver producto</i>
    </div>`)
    galery.innerHTML = displayProducts.join('');
})
