import { 
    getAllClientsfromSpain,
    getClients_From_Madrid,
    get_FullNameClients_And_SalesManager,
    getAllClientNameAndSalesManagerWithPayment,
    getAllClientNameAndSalesManagerWithoutPayment, 
    getAllAlreadyClientsPaymentsAndManagerOffices,
    getAllNotAlreadyClientsPaymentsAndManagerOffices,
    getAllOfficeswithFuenlabradaClients,
    getAll,
    getAllClientsWithALateDeliveryArrive,
    getAllClientsWhoHaventPaid,
    getAllClientsWhoHaventRequest,
    getAllClientsWhoHaveNeitherPaidNorRequest,
    getAllClientsWhoHaveRequestedButHaventPaid
} from "./module/clients.js";

/* console.log(await getAllClientsWhoHaveRequestedButHaventPaid());  */

import {
    //--getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName,---//
    //--getAllEmployeesThatArentAssociatedWithAnyClientOrOffice,--//
    //--getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice,--//
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullNamePositionDiferentSalesRepresentative,
    getAllEmployeesAndBossesNames,
    getAllEmployeesWithBossNameAndTheBossesNames,
    getAllEmployeesThatDontHaveOffice,
    getAllEmployeesThatArentAssociatedWithAnyClient,
} from "./module/employees.js"

// console.log(await getAllEmployeesThatArentAssociatedWithAnyClient()); 


import{
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    getAllOfficesAddressWithClientsInFuenlabrada,
} from "./module/office.js"

//console.log(await getAllOfficesAddressWithClientsInFuenlabrada()); 

import{
    getClientPayments_At_2008,
    getAllpaypal2008payments,
    getAll_Type_Of_Payments
}   from "./module/payments.js"

// console.log(await getAll_Type_Of_Payments()); 

import{
    getAll_OrnamentalProducts,
    getAllProductsThatNeverHasBeenRequested,
    getAllProductsThatNeverHasBeenRequestedWithItsNDI,
} from "./module/product.js"

// console.log(await getAllProductsThatNeverHasBeenRequestedWithItsNDI()); 


import{
    getAllStatus,
    getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime,
    getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore,
    getAllRefusedRequest_In2009,
    getAll_Request_From_January
} from "./module/request.js"

// console.log(await getAll_Request_From_January()); 
