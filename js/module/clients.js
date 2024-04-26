//------------------------------------------------------------------------------

import { getEmployeesByCode } from './employees.js';

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.


export const getClients_From_Madrid = async () => {
    let res = await fetch ("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let clientUpdate = [];
    clientUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return clientUpdate
}

//-------------------------------------------------------------------------------

//CONSULTAS MULTITABLA

// 1.Obtén un listado con el nombre de cada cliente y el nombre y apellido 
// de su representante de ventas.

export const get_FullNameClients_And_SalesManager = async () => {
    let res = await fetch ("http://localhost:5501/clients");
    let data = await res.json();
    for(let i = 0; i< data.length; i++){
        let [dataEmployee] = await getEmployeesByCode(data[i].code_employee_sales_manager)
        data[i]={
            client_name: data[i].client_name,
            Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`
        }
    }
    return data;
}