import { 
    getAllClientsfromSpain,
    getClients_From_Madrid,
    get_FullNameClients_And_SalesManager,
    getAllClientNameAndSalesManagerWithPayment,
    getAllClientNameAndSalesManagerWithoutPayment,    
} from "./module/clients.js";

console.log(await getAllClientNameAndSalesManagerWithoutPayment());

//import { 
    //    getAllOfficesCodeAndCity, 
    //    getAllOfficesFromSpainCityAndMovil 
    //} from "./module/offices.js";
    
    //import { 
    //    getAllEmployeesWithBossAndCodeSeven,
    //    getBossFullNameAndEmail,
    //    getAllEmployeesNotSalesReps,
    //    getAll3,
    //    getAll
    //} from "./module/employees.js";