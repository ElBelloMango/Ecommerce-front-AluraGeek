import { listProductos } from '../services/product-service.js'
import { addToAllGalery } from './products.js';

const galery = document.querySelector("[data-galery]");

listProductos().then((data) => {
    addToAllGalery(galery,data)
})