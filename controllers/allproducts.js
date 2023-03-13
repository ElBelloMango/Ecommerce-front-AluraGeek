import { listProductos } from '../services/product-service.js'
import { addToAllGalery } from './products.js';

const galery = document.querySelector("[data-galery]");
const parametros = new URL(window.location).searchParams.get("search");
listProductos().then((data) => {
    if (!parametros) {
        addToAllGalery(galery, data);
    }
    else {
        const content = `
            <h3 class="galery__title">Todas las coincidencias de: ${parametros.toLocaleUpperCase()}</h3>
            <span class="galery__seemore"><a href="./productos.html">Ver Todo 🡢</a></span>`
        const header = document.querySelector(".galery__header");
        header.innerHTML = content;
        const regex = new RegExp(parametros, 'i');
        const filter = data.filter((producto) => regex.test(producto.nombre));
        addToAllGalery(galery, filter);
    }
})