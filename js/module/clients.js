//6.Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllFullNameSpanishClients = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
        }
    })
    return dataUpdate;
}

