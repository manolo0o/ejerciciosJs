//6.Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllClientsfromSpain = async () => {
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.client_name,
            country: val.country
        }
    })
    return dataUpdate;
}

