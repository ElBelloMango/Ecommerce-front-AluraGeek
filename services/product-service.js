import { map } from "lodash";
import data from "../db/products.js"

const getLocalStorage = () => JSON.parse(localStorage.getItem("productos")) || [];

export const listProductos = () => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length == 0) {
        localStorage.setItem("productos", JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    resolve(productosAdded);
});


export const agregarProducto = (producto) => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length == 0) {
        localStorage.setItem("productos", JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    const addproduct = { ...producto, "id": uuid.v4() }
    productosAdded.push(addproduct);
    localStorage.setItem("productos", JSON.stringify(productosAdded));
    resolve(productosAdded);
});

export const getProducto = (id) => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length == 0) {
        localStorage.setItem("productos", JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    resolve(productosAdded.find((producto) => producto.id == id));
});
export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        let productos = getLocalStorage();
        if (productos.length == 0) {
            localStorage.setItem("productos", JSON.stringify(data.productos));
            productos = getLocalStorage();
        }
        localStorage.setItem("productos", JSON.stringify(productos.filter((producto) => producto.id != id)));
        resolve(localStorage.getItem("productos"));
    })
}
export const updateProducto = async (id, updatedProduct) => {
    let updated = {};
    await getProducto(id).then((producto) => {
        updated = {
            ...updatedProduct,
            "categoria": producto["categoria"]
        };
    })
    return new Promise((resolve, reject) => {
        let productos = getLocalStorage();
        if (productos.length == 0) {
            localStorage.setItem("productos", JSON.stringify(data.productos));
            productos = getLocalStorage();
        };
        let newProds = productos.map((elemento) => {
            if (elemento.id == id) {
                return {
                    id: id,
                    ...updated
                };
            }
            return elemento;
        });
        localStorage.setItem("productos",JSON.stringify(newProds));
        resolve(localStorage.getItem("productos"));
    })
}