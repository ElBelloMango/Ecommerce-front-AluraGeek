export const listProductos = (categoria) =>{
    return fetch(`http://localhost:3000/${categoria}`).then(response=>response.json());
}