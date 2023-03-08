export const listProductos = () => {
    return fetch(`http://localhost:3000/productos`).then(response => response.json())
}