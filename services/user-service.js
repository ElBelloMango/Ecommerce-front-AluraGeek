export const createUser = (user) => {
    return fetch(`http://localhost:3000/usuarios/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                ...user
            }
        )
    }).catch((error) => console.error(`Se presentó un error: ${error}`))
}

export const getUser = (id) => {
    function ErrorUsuario(mensaje, codigo) {
        this.mensaje = mensaje; 
        this.codigo = codigo;  
    }
    return fetch(`http://localhost:3000/usuarios/${id}`).then((response) => {
        if (!response.ok) {
            throw new ErrorUsuario(response.statusText,response.status);
        }
        console.log(response)
        return response.json();
    }).catch((error) => { 
        console.error(error.mensaje);
        throw error; 
    });
}