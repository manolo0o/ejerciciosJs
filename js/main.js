import prompt from 'async-prompt'

//import { 
//    getAllFullNameAndEmailsAndBoss,
//    getBossFullNameAndEmail, getAllFullNamePositionDiferentSalesRepresentative,
//    getEmployeesByCode
//} 
//from "./module/employees.js";

//console.log (await getEmployeesByCode())
// console.log(await getAllFullNameAndEmailsAndBoss())
//console.log(await getBossFullNameAndEmail());
//console.log(await getAllFullNamePositionDiferentSalesRepresentative())

import { getAllClientsfromSpain, getClients_From_Madrid, 
        get_FullNameClients_And_SalesManager} 
from "./module/clients.js";
console.log(await get_FullNameClients_And_SalesManager())


//import { getAllStatus, getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime,
//        getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore, getAllRefusedRequest_In2009,
//        getAll_Request_From_January  } 
//from "./module/request.js";
//console.log(await getAll_Request_From_January ());


//import { getClientPayments_At_2008, getAll_Type_Of_Payments} 
//from "./module/payments.js"
//console.log(await getAll_Type_Of_Payments())

//import {getAll_OrnamentalProducts} 
//from "./module/product.js"
//console.log(await getAll_OrnamentalProducts())