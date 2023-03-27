import data from "../db/users.js"

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
    return new Promise((resolve, reject) => {
        if (!data['usuarios'].find((user)=>user.id == id)) {
            throw new ErrorUsuario("Error ",404);
        }
        resolve(data['usuarios'].find((user)=>user.id == id));
    });
}