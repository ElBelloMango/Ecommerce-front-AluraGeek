import data from "../db/products.js"

const getLocalStorage = ()=> JSON.parse(localStorage.getItem("productos")) || [];

export const listProductos = () => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length==0){
        localStorage.setItem("productos",JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    resolve(productosAdded);    
});


export const agregarProducto = (producto) => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length==0){
        localStorage.setItem("productos",JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    const addproduct = {...producto,"id": uuid.v4()}
    productosAdded.push(addproduct);
    localStorage.setItem("productos",JSON.stringify(productosAdded));
    resolve(productosAdded); 
});

export const getProducto = (id) => new Promise((resolve, reject) => {
    let productosAdded = getLocalStorage();
    if (productosAdded.length==0){
        localStorage.setItem("productos",JSON.stringify(data.productos));
        productosAdded = getLocalStorage();
    }
    resolve(productosAdded.find((producto)=>producto.id == id));  
});