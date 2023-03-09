export const listProductos = () => {
    return fetch(`http://localhost:3000/productos`).then(response => response.json()).catch((error)=>console.error(`Se presentó un error: ${error}`))
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
        }).catch((error)=>console.error(`Se presentó un error: ${error}`))
}

export const getProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(response => response.json()).catch((error)=>console.error(`Se presentó un error: ${error}`))
}