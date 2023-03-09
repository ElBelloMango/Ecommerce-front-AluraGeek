import '../styles/blocks/galery.css'
import '../styles/blocks/detailedproduct.css'
import { getProducto, listProductos } from '../services/product-service.js';
import { addToGalery } from './products.js';

const relatedGalery = document.querySelector("[data-galery-related]");
const product = document.querySelector("[data-product]");

const params = new URL(window.location).searchParams;
getProducto(params.get("id")).then((producto) => {
    product.innerHTML =
        `<img class="product__image" src=${producto.imgsrc} alt="">
        <div class="product__description">
            <h1 class="product__name">${producto.nombre}</h1>
            <span class="product__price">$ ${parseFloat(producto.precio).toFixed(2)}</span>
            <p class="prodcut__details">${producto.desc ? producto.desc : "No hay una descripción de este producto disponible"}</p>
        </div>`
    listProductos().then((data) => {
        const itemsRelacionados = data.filter((elemento) => elemento.categoria == producto.categoria && elemento.id != producto.id);
        addToGalery(relatedGalery, itemsRelacionados.slice(0, 6));
    });
})

