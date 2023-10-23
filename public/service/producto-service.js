const BASE_PATH = '/productos'

const listaProductos = () => {
    return fetch(`${BASE_PATH}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Ocurrio in error')
        })
}

const criaProducto = (name, description, price) => {
    return fetch(`${BASE_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: name,
            descion: description,
            precio: price
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error('Ocurrio in error')
        })
}

const removeProducto = (id) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Ocurrio in error')
            }
        })
}

const detalhaProducto = (id) => {
    return fetch(`${BASE_PATH}/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }

            throw new Error('Ocurrio in error')
        })
}

const atualizaProducto = (id, name, description, price) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nombre: name,
            descripcion: description,
            precio: price
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Ocurrio in error')
        })
}

export const productoService = {
    listaProductos,
    criaProducto,
    removeProducto,
    detalhaProducto,
    atualizaProducto
}
