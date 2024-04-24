// 7.Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllRequestStatus = async()=>{
    // let status = encodeURIComponent("status");
    let res = await fetch("http://localhost:5507/requests");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return{
            code_request: val.code_request,
            status: val.status
        }
    })
    return dataUpdate
}  

export const getAllStatus = async() =>{
    let res = await fetch("http://localhost:5507/requests")
    let data = await res.json();
    let uniqueStatusMethods = new Set();
    data.forEach(val => {
        uniqueStatusMethods.add(val.status);
    });

    let uniqueStatusMethodsArray = Array.from(uniqueStatusMethods);
    return uniqueStatusMethodsArray;

}