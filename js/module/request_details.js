export const getAllRequestDetailsByCode = async(product_code)=>{
    let res = await fetch(`http://172.16.101.146:5599/request_details?product_code=${product_code}`);
    let data = await res.json();
    return data;
}

//obtener los detalles del pedido por codigo de pedido
export const getAllRequestDetailsByRequestCode = async(code_request)=>{
    let res = await fetch(`http://172.16.101.146:5599/request_details?product_code=${code_request}`);
    let data = await res.json();
    return data;
}


//Obtener detalles de un pedido mediante su codigo
export const getAllDetailsByOrderCode = async (code)=>{
    let res = await fetch(`http://172.16.101.146:5599/request_details?product_code=${code}`).then(response => response.json());
    return res
}