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

console.log(await getAllEmployeesAndBossesNames()); 


import{
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    getAllOfficesAddressWithClientsInFuenlabrada,
} from "./module/office.js"

console.log(await getAllOficceCityAndMovil()); 

