const apiUrl = `http://localhost:3000/productos`

export const listProductos = () => {
    return fetch(`${apiUrl}`).then(response => response.json()).catch((error) => console.error(`Se presentó un error: ${error}`))
}

export const agregarProducto = (producto) => {
    return fetch("${apiUrl}", {
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
    }).catch((error) => console.error(`Se presentó un error: ${error}`))
}

export const getProducto = (id) => fetch(`${apiUrl}/${id}`).then(response => response.json()).catch((error) => console.error(`Se presentó un error: ${error}`))

export const updateProducto = async (id,updatedProduct) => {
    let updated = {};
    await getProducto(id).then((producto) => {
        updated = {
            ...updatedProduct,
            "categoria": producto["categoria"]
        };
    })
    return fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(updated)
    }).catch((error) => console.error(`Se presentó un error: ${error}`))
}