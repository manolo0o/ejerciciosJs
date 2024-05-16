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

console.log(await getAllClientsWhoHaventRequest()); 


// import { 
//        getAllOfficesCodeAndCity, 
//        getAllOfficesFromSpainCityAndMovil 
//     } from "./module/offices.js";
    
    //import { 
    //    getAllEmployeesWithBossAndCodeSeven,
    //    getBossFullNameAndEmail,
    //    getAllEmployeesNotSalesReps,
    //    getAll3,
    //    getAll
    //} from "./module/employees.js";