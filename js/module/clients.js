//------------------------------------------------------------------------------
import { getEmployeesByCode } from './employees.js'; import { getPaymentByClientCode } from './payments.js';

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

//-------------------------------------------------------------------------------

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientNameAndSalesManagerWithPayment = async () => {
    let payment = await getPaymentByClientCode()
    let dataUpdate = []
    for (const val of payment) {
        let res = await fetch(`http://localhost:5501/clients?client_code=${val.code_client}`);
        let data = await res.json();
        let [dataEmployee] = await getEmployeesByCode(data[0].code_employee_sales_manager)
        if (!dataUpdate.some(elmt => elmt.Client_name == data[0].client_name)) {
            let datos = ({
                Client_name: data[0].client_name,
                Client_Code: val.code_client,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                Manager_Code: dataEmployee.employee_code
            })
            dataUpdate.push(datos)
        }
    }
    return dataUpdate;
}

//-------------------------------------------------------------------------------
// 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientNameAndSalesManagerWithoutPayment = async () => {
    let res = await fetch("http://localhost:5501/clients").then(res => res.json());
    let dataUpdate = [];
    for (const val of res) {
        let [employee] = await getEmployeesByCode (val.code_employee_sales_manager)
        let [pago] = await getPaymentByClientCode(val.client_code)
        if (pago == undefined) dataUpdate.push({
            Client_name: val.client_name,
            ClientCode: val.client_code,
            Manager_name:`${employee.name}${employee.lastname1}${employee.lastname2}`,
            Manager_Code: val.code_employee_sales_manager
        });
    }
    return dataUpdate
}
//-------------------------------------------------------------------------------