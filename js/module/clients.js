//------------------------------------------------------------------------------
import { getEmployeesByCode } from './employees.js';
import { getOfficesByCode } from './office.js'; 
import { getPaymentByClientCode } from './payments.js'; 
import { getAllClientsWhoPaid } from "./payments.js";
import {getAllOrdersByClientCode} from './request.js' ;
import { getAllClientsWhoRequest } from "./request.js";

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
// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la 
// ciudad de la oficina a la que pertenece el representante.


export const  getAllAlreadyClientsPaymentsAndManagerOffices = async () => {
    let clients = await getAllClientNameAndSalesManagerWithPayment();
    let dataUpdate = [];
    for (const client of clients){
        let [dataEmployee] = await getEmployeesByCode(client.Manager_Code);
        let [offices] = await getOfficesByCode(dataEmployee.code_office);
        if(!dataUpdate.some(elmt => elmt.Client_name == client.Client_name)){
            dataUpdate.push({
                Client_name: client.Client_name,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                Manager_city: offices.city
            })
        }
    }
    return dataUpdate;
}
//-------------------------------------------------------------------------------
// 5.Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllNotAlreadyClientsPaymentsAndManagerOffices = async () =>{
    let clients = await getAllClientNameAndSalesManagerWithoutPayment();
    let dataUpdate = [];
    for (const client of clients) {
        let [dataEmployee] = await getEmployeesByCode(client.Manager_Code);
        let [offices] =  await getOfficesByCode(dataEmployee.code_office);
        if(!dataUpdate.some(elmt => elmt.Client_name == client.Client_name)){
            dataUpdate.push({
                client_name: client.Client_name,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                city: offices.city
            });
        }
    }
    return dataUpdate;
}
//-------------------------------------------------------------------------------
// 6 Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

export const getAllOfficeswithFuenlabradaClients = async() =>{
    let res = await fetch ("http://localhost:5501/clients?city=Fuenlabrada").then(res => res.json());
    let dataUpdate = [];
    for (const val of res) {
        let [employee] = await getEmployeesByCode(val.code_employee_sales_manager)
        let { code_office } = employee
        let [officeDirection] = await getOfficesByCode(code_office)
        dataUpdate.push({
            cliente: val.client_name,
            encargado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            oficina: code_office,
            direccionOficina:`${officeDirection.address1} ${officeDirection.address2}`
        });
    }
    return dataUpdate;
}

//-------------------------------------------------------------------------------
// 7. Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con la ciudad de la oficina a la que pertenece el representante.

export const getAll = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for (let i = 0; i < client.length; i++) {

        let {
            id: id_client,
            limit_credit,
            postal_code: postal_code_client,
            country: country_client,
            region: region_client,
            city,
            address2: address2_client,
            address1: address1_client,
            fax,
            phone,
            ...clientUpdate } = client[i]
        client[i] = clientUpdate
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)

        let {
            id: id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id: id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = { ...clientUpdate, ...employeeUpdate, ...officeUpdate }
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_client: data.city
        }
    }
    return client;
}

//-------------------------------------------------------------------------------
// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getAllClientsWithALateDeliveryArrive = async ()=>{
    let res = await fetch("http://localhost:5501/clients").then(res => res.json());
    let dataUpdate = res.map(async(val) => {
        let pedido = await getAllOrdersByClientCode (val.client_code);
        let devData = []
        pedido.forEach(elmt => {
            if(elmt.date_delivery == null) return
            let stimateDt = elmt.date_wait
            let arriveDt = elmt.date_delivery
            stimateDt = stimateDt.split("-")
            arriveDt = arriveDt.split("-")
            let mesEsperado = Number(stimateDt[stimateDt.length - 2])
            let mesEntregado = Number(arriveDt[arriveDt.length - 2])
            let diaEsperado = Number (stimateDt[stimateDt.length - 1])
            let diaEntregado = Number (arriveDt[arriveDt.length - 1])
            if ((mesEntregado > mesEsperado)|| (mesEntregado == mesEsperado && diaEntregado > diaEsperado)){
                devData.push({
                    Client_Name : val.client_name,
                    Fecha_Estimada : stimateDt.join("-"),
                    Fecha_Entregada :arriveDt.join("-"),
                })
            } 
        })  
        return devData;
    })

    let newArr = await Promise.all(dataUpdate)
    newArr = newArr.filter(respo => respo.length > 0)
    return newArr
}

//-------------------------------------------------------------------------------
//*.Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago. 
export const getAllClientsWhoHaventPaid = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataClient = [];
    for (let i = 0; i < data.length; i++) {
        let [payments] = await getAllClientsWhoPaid(data[i].client_code);
        if (payments === undefined) {
            dataClient.push(data[i]);
        }
    }
    return dataClient;
}

//-------------------------------------------------------------------------------
//*. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido. 
export const getAllClientsWhoHaventRequest  = async()=>{
    let res = await fetch ("http://localhost:5501/clients")
    let data = await res.json();
    let dataClient =[];
    for (let i = 0; i < data.length; i++){
        let [requests] = await getAllClientsWhoRequest(data[i].client_code);
        if (requests === undefined){
            dataClient.push(data[i]);
        }
    }
    return dataClient;
}

//-------------------------------------------------------------------------------
//*. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido. 

export const getAllClientsWhoHaveNeitherPaidNorRequest = async () =>{
    let res = await fetch ("http://localhost:5501/clients")
    let data = await res.json();
    let dataClient = [];
    for (let i = 0; i< data.length; i++){
        let [payments] = await getAllClientsWhoPaid(data[i].client_code);
        let [requests] = await getAllClientsWhoRequest(data[i].client_code);
        if (payments === undefined && requests == undefined);{
            dataClient.push(data[i]);
        }
    }
    return dataClient;
}

//-------------------------------------------------------------------------------
//*. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago. 

export const getAllClientsWhoHaveRequestedButHaventPaid = async () =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataClient = [];
    for (let i = 0; i < data.length; i++){
        let [payments] = await getAllClientsWhoPaid(data[i].client_code);
        let [requests] = await getAllClientsWhoRequest(data[i].client_code);
        if (payments === undefined && requests != undefined) {
            dataClient.push(data[i]);
        }
    }
    return dataClient;
}
