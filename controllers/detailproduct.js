import '../styles/blocks/galery.css'
import '../styles/blocks/addproduct.css'
import '../styles/blocks/detailedproduct.css'

import { getProducto, listProductos, updateProducto } from '../services/product-service.js';
import { addToGalery } from './products.js';
import { toBase64 } from './toBase64';

const relatedGalery = document.querySelector("[data-galery-related]");
let product = document.querySelector("[data-product]");

const params = new URL(window.location).searchParams;
getProducto(params.get("id")).then((producto) => {
    product.innerHTML =
        `<img class="product__image" src=${producto.imgsrc} alt="">
        <div class="product__description">
            <div class="product__options" data-product-options>
                <i class="fa-solid fa-pencil" data-product-edit></i>
                <i class="fa-solid fa-trash" data-product-delete></i>
            </div>
            <h1 class="product__name">${producto.nombre}</h1>
            <span class="product__price">$ ${parseFloat(producto.precio).toFixed(2)}</span>
            <p class="product__details">${producto.desc ? producto.desc : "No hay una descripción de este producto disponible"}</p>
        </div>`
    document.title = `Producto - ${producto.nombre}`
    const product_edit = document.querySelector("[data-product-edit]");
    const product_delete = document.querySelector("[data-product-delete]");

    product_edit.addEventListener("click", () => {
        product.outerHTML = `
        <form class="product" data-product>
            <input name="imgsrc" accept="image/*" required type="file" class="product__image--edit formadd__image" src=${producto.imgsrc} alt="">
            <div class="product__description">
                <div class="product__options" data-product-options>
                    <i class="fa-solid fa-cancel" data-product-cancel></i>
                    <button type="submit" >
                        <i class="fa-solid fa-check" data-product-submit></i>
                    </button>
                </div>
                <input name="nombre" required type="text" class="product__name--edit input" placeholder="${producto.nombre}">
                <input name="precio" required type="number" step="0.01" class="product__price input" placeholder="$ ${parseFloat(producto.precio).toFixed(2)}">
                <textarea name="desc" required class="product__details--edit input" placeholder="${producto.desc ? producto.desc : "No hay una descripción de este producto disponible"}"></textarea>
            </div>
        </form>`

        product = document.querySelector("[data-product]");
        let formValues = {};
        for (let i = 0; i < product.elements.length; i++) {
            product.elements[i].addEventListener("change", (event) => {
                if (event.target.name == "imgsrc") {
                    toBase64(event.target.files[0]).then((value) => {
                        formValues = { ...formValues, "imgsrc": value };
                    })
                }
                else formValues = { ...formValues, [event.target.name]: event.target.value };
            })
        }
        const cancel = document.querySelector("[data-product-cancel]");
        product.addEventListener("submit", (event) => {
            event.preventDefault();
            updateProducto(params.get("id"), formValues).then(()=>{window.location.reload()}).catch(e=>console.warn(e));
        })
        cancel.addEventListener("click", () => window.location.reload());
    })

    product_delete.addEventListener("click", () => {

    })

    listProductos().then((data) => {
        const itemsRelacionados = data.filter((elemento) => elemento.categoria == producto.categoria && elemento.id != producto.id);
        addToGalery(relatedGalery, itemsRelacionados.slice(0, 6));
    })
}).catch((error) => {
    product.innerHTML = `<img class="product__image" src="https://www.lucushost.com/blog/wp-content/uploads/2022/07/ejemplo-http-error-503-servidor-litespeed.png" alt="">
    <div class="product__description">
        <h1 class="product__name">El servidor no responde</h1>
        <span class="product__price"></span>
        <p class="prodcut__details">Por favor intentelo más tarde</p>
    </div>`
});

