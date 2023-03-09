export const listProductos = () => {
    return fetch(`http://localhost:3000/productos`).then(response => response.json())
}

export const agregarProducto = (producto) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                ...producto,
                "id": uuid.v4()
            }
        )
    })
}