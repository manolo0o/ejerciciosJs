// -------------------------------------------------------------------------------------------------

// 7.Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatus = async() =>{
    let res = await fetch("http://172.16.101.146:5598/requests")
    let data = await res.json();
    let uniqueStatusMethods = new Set();
    data.forEach(val => {
        uniqueStatusMethods.add(val.status);
    });

    let uniqueStatusMethodsArray = Array.from(uniqueStatusMethods);
    return uniqueStatusMethodsArray;
}
//---------------------------------------------------------------------------------------------------

// 9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime = async () =>{
    let res = await fetch("http://172.16.101.146:5598/requests?status=Entregado")
    let data = await res.json();
    let overDueOrders = [];
    data.forEach(order => { 
        if (order.date_delivery > order.date_wait){
            overDueOrders.push({
                code_request: order.code_request,
                code_client: order.code_client,
                date_wait: order.date_wait,
                date_delivery: order.date_delivery
            });
        }
    });
    return overDueOrders
}

//---------------------------------------------------------------------------------------------------

// 10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido 
// al menos dos días antes de la fecha esperada.

export const getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore = async () =>{
    let res = await fetch ("http://172.16.101.146:5598/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach( val=>{
        let date_wait = new Date(val.date_wait);
        let date_delivery = new Date(val.date_delivery);
        if(date_delivery < date_wait){
            let diferenciaM = date_wait.getTime()-date_delivery.getTime();
            let diferenciaD = diferenciaM /(1000*3600*24)
            if (diferenciaD>=2 && val.date_delivery !=null){
                dataUpdate.push({
                    code_request: val.code_request,
                    code_client: val.code_client,
                    date_wait: val.date_wait,
                    date_delivery: val.date_delivery
                })
            }
        }
    })
    return dataUpdate;
}


//-----------------------------------------------------------------------------------------------------

//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRefusedRequest_In2009 = async () =>{
    let res = await fetch("http://172.16.101.146:5598/requests?status=Rechazado")
    let data = await res.json();
    let rejectedOrders = data.filter(order =>{
        let year = new Date(order.date_request).getFullYear();
        return year === 2009;
    });
    return rejectedOrders; 
}   

//-----------------------------------------------------------------------------------------------------

// 12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAll_Request_From_January  = async () =>{
    let res = await fetch("http://172.16.101.146:5598/requests?status=Entregado")
    let data = await res.json();
    let deliveriedOrders = data.filter(order =>{
        let month = new Date(order.date_delivery).getMonth();
        return month === 0;    
    });
    return deliveriedOrders
}

// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const getAllClientsWhoRecievedLateAProduct = async () => {
    let res = await fetch("http://172.16.101.146:5598/requests?status=Entregado");
    let dataRequest = await res.json();
    let dataClients = [];

    // Obtener todos los clientes
    let clientsRes = await fetch("http://172.16.101.146:5598/requests");
    let clientsData = await clientsRes.json();
    let clientsMap = new Map(clientsData.map(client => [client.client_code, client.client_name]));

    for (let i = 0; i < dataRequest.length; i++) {
        let fecha1 = new Date(dataRequest[i].date_wait);
        let fecha2 = new Date(dataRequest[i].date_delivery);
        if (fecha2 > fecha1) {
            let clientName = clientsMap.get(dataRequest[i].code_client);
            if (clientName) {
                let exists = dataClients.some(item => item.client_name === clientName);
                if (!exists) {
                    dataClients.push({
                        "client_name": clientName,
                    });
                }
            }
        }
    }
    return dataClients;
};

//Obtener el estado de un pedido mediante el codigo de su cliente
export const getAllOrdersByClientCode = async(code = "")=>{
    let res = await fetch(`http://172.16.101.146:5598/requests?code_client=${code}`).then(res => res.json());
    return res
}


export const getAllClientsWhoRequest = async (code) => {
    let res = await fetch(`http://172.16.101.146:5598/requests?code_client=${code}`)
    let data = await res.json();
    return data;
}
