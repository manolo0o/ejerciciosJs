
import { getAllRequestDetailsByCode } from "./request_details.js"
// 15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y 
//que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio
// de venta, mostrando en primer lugar los de mayor precio.

export const getAll_OrnamentalProducts = async() => {
    let res = await fetch ("http://172.16.101.146:5597/products?gama=Ornamentales&stock_gt=100");
    let data = await res.json();
    let dataUpdate = data.sort((a,b) =>{
        return b.price_sale - a.price_sale
    })
    return dataUpdate
}

//8. Devuelve un listado de los productos que nunca han aparecido en un pedido.
export const getAllProductsThatNeverHasBeenRequested = async () => {
    let res = await fetch("http://172.16.101.146:5597/products")
    let data = await res.json();
    let dataUpdate = [];
    for (let i = 0; i < data.length; i++) {
        let [request_details] = await getAllRequestDetailsByCode(data[i].code_product);
        if (request_details === undefined) dataUpdate.push(data[i]);
    }
    return dataUpdate;
}

//9. Devuelve un listado de los productos que nunca han aparecido en un pedido.
//El resultado debe mostrar el nombre, la descripción y la imagen del producto.
export const getAllProductsThatNeverHasBeenRequestedWithItsNDI = async () => {
    let res = await fetch("http://172.16.101.146:5597/products")
    const data = await res.json();
    let dataUpdate = [];
    for (let i = 0; i < data.length; i++) {
        let [request_details] = await getAllRequestDetailsByCode(data[i].code_product);
        if (request_details === undefined) {
            dataUpdate.push({
                name: data[i].name,
                description: data[i].description
            });
        }
    }
    return dataUpdate;
}

//obtener los productos por codigo
export const getAllProductsByCode = async (code_product) => {
    let res = await fetch(`http://172.16.101.146:5597/products?code_product=${code_product}`)
    let data = await res.json();
    return data;
}

export const getProductByCode = async (code = '') => {
    let res = await fetch("http://172.16.101.146:5597/products?code_product=${code}")
    let data = await res.json()
    return data
}