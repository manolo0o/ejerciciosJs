// IMPORT CLIENTS//
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
} from "../module/clients.js";

//_____________________________________________________________________________________________________//
// IMPORT EMPLOYEES //
import {
    getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName,
    getAllEmployeesThatArentAssociatedWithAnyClientOrOffice,
    getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice,
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullNamePositionDiferentSalesRepresentative,
    getAllEmployeesAndBossesNames,
    getAllEmployeesWithBossNameAndTheBossesNames,
    getAllEmployeesThatDontHaveOffice,
    getAllEmployeesThatArentAssociatedWithAnyClient,
} from "../module/employees.js";
//_____________________________________________________________________________________________________//
// IMPORT OFFICE //

import{
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    getAllOfficesAddressWithClientsInFuenlabrada,
} from "../module/office.js" 
//_____________________________________________________________________________________________________//
// IMPORT PAYMETNS //

import{
    getClientPayments_At_2008,
    getAllpaypal2008payments,
    getAll_Type_Of_Payments
}   from "../module/payments.js"
//_____________________________________________________________________________________________________//
// IMPORT PRODUCTS //
import{
    getAll_OrnamentalProducts,
    getAllProductsThatNeverHasBeenRequested,
    getAllProductsThatNeverHasBeenRequestedWithItsNDI,
} from "../module/product.js"
//_____________________________________________________________________________________________________//
// IMPORT REQUEST //
import{
    getAllStatus,
    getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime,
    getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore,
    getAllRefusedRequest_In2009,
    getAll_Request_From_January
} from "../module/request.js" 
//_____________________________________________________________________________________________________//
// CONSTRUCTOR //
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
//_____________________________________________________________________________________________________//
// CLIENTS MODULE// 
    async getAllClientsfromSpain(){
        let data = await getAllClientsfromSpain();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b> Country: </b>${val.country}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getClients_From_Madrid(){
        let data = await getClients_From_Madrid();
        data.forEach(val => {
            //let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del Empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async get_FullNameClients_And_SalesManager(){
        let data = await get_FullNameClients_And_SalesManager();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientNameAndSalesManagerWithPayment(){
        let data = await getAllClientNameAndSalesManagerWithPayment();
        data.forEach(val=>{
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.Client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientNameAndSalesManagerWithoutPayment(){
        let data = await getAllClientNameAndSalesManagerWithoutPayment();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.Client_name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                                    <p><b>payment: </b>not valid</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAllAlreadyClientsPaymentsAndManagerOffices(){
        let data = await getAllAlreadyClientsPaymentsAndManagerOffices();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.Client_name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                                    <p><b>Manager_city: </b>${val.Manager_city}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAllNotAlreadyClientsPaymentsAndManagerOffices(){
        let data = await getAllNotAlreadyClientsPaymentsAndManagerOffices();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                                    <p><b>Manager city: </b>${val.city}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAllOfficeswithFuenlabradaClients(){
        let data = await getAllOfficeswithFuenlabradaClients();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.cliente}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Manager Fullname: </b>${val.encargado}</p>
                                    <p><b>Office: </b>${val.oficina}</p>
                                    <p><b>Office adress: </b>${val.direccionOficina}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAll(){
        let data = await getAll();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Manager Fullname: </b>${val.employees_full_name}</p>
                                    <p><b>Office code: </b>${val.employees_office_code}</p>
                                    <p><b>city: </b>${val.city_client}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAllClientsWithALateDeliveryArrive(){
        let data = await getAllClientsWithALateDeliveryArrive();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.Client_Name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Stimate date: </b>${val.diaEsperado}</p>
                                    <p><b>Delivery date:</b>${val.Fecha_Entregada}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

    async getAllClientsWithALateDeliveryArrive(){
        let data = await getAllClientsWithALateDeliveryArrive();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.Client_Name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                                    <p><b>Stimate date: </b>${val.diaEsperado}</p>
                                    <p><b>Delivery date:</b>${val.Fecha_Entregada}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
    async getAllClientsWhoHaventPaid(){
        let data = await getAllClientsWhoHaventPaid();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    `;
                });
            }
    async getAllClientsWhoHaventRequest(){
        let data = await getAllClientsWhoHaventRequest();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    `;
                });
            }
    async getAllClientsWhoHaveNeitherPaidNorRequest(){
        let data = await getAllClientsWhoHaveNeitherPaidNorRequest();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    `;
                });
            }
    async getAllClientsWhoHaveRequestedButHaventPaid(){
        let data = await getAllClientsWhoHaveRequestedButHaventPaid();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    `;
                });
            }
//_____________________________________________________________________________________________________//
// EMPLOYEES MODULE //
    async getAllFullNameAndEmailsAndBoss(){
        let data = await getAllFullNameAndEmailsAndBoss();
        data.forEach(val=>{
            this.shadowRoot.innerHTML +=/*hmtl*/`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Lat Names: </b>${val.fullLastname}</p>
                            <p><b>Email:</b> ${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getBossFullNameAndEmail (){
        let data = await getBossFullNameAndEmail();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name} ${val.fullLastname}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>position: </b>${val.position}</p>
                            <p><b>Email:</b> ${val.email}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }

    async getAllFullNamePositionDiferentSalesRepresentative(){
        let data = await getAllFullNamePositionDiferentSalesRepresentative();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name} ${val.fullLastname}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>position: </b>${val.position}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
    async getAllEmployeesAndBossesNames (){
        let data = await getAllEmployeesAndBossesNames();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>${val.Empleado}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Boss: </b>${val.JefeACargo}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
    
    async getAllEmployeesWithBossNameAndTheBossesNames(){
        let data = await getAllEmployeesWithBossNameAndTheBossesNames();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Employee name and his direct boss name and the principal boss names.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Employee: </b>${val.Empleado}</p>
                            <p><b>Direct boss: </b>${val.JefeACargo}</p>
                            <p><b>Principal boss: </b>${val.JefeDeJefe}</p> 
                        </div>
                    </div>
                </div>
            `
        });
    }

    async getAllEmployeesThatDontHaveOffice(){
        let data = await getAllEmployeesThatDontHaveOffice();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Employees that not have office</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Employe #: </b>${val.employee_code}</p>
                            <p><b>name: </b>${val.name} {val.lastname1}{val.lastname2}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClient(){
        let data = await getAllEmployeesThatArentAssociatedWithAnyClient();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Empleados que no tienen un cliente asociado</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
                            <p><b>Codigo de jefe: </b>${val.code_boss}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
//_____________________________________________________________________________________________________//
// OFFICE MODULE //
    async getAllOficceAndCodeCity(){
        let data = await getAllOficceAndCodeCity();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Office code and cities with no offices.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>City : </b>${val.city}</p>
                            <p><b>Office code : </b>${val.code}</p>                           
                        </div>
                    </div>
                </div>
            `
        });
    }
    async getAllOficceCityAndMovil(){
        let data = await getAllOficceCityAndMovil();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>City & number from spain offices.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>City: </b>${val.code_office}</p>
                            <p><b>Phone#: </b>${val.movil}</p>
                            
                        </div>
                    </div>
                </div>
            `
        });
    }
//_____________________________________________________________________________________________________//
// PAYMENTS MODULE //

    async getClientPayments_At_2008(){
        let data = await getClientPayments_At_2008();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Clients that have paid in 2008.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Client# : </b>${val.ClientCode}</p>
                            <p><b>Date : </b>${val.fecha}</p>
                            
                        </div>
                    </div>
                </div>
            `
        });
    }
    async getAllpaypal2008payments(){
        let data = await getAllpaypal2008payments();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Realized payments at 2008 with paypal.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Client# : </b>${val.code_client}</p>
                            <p><b>Date : </b>${val.date_payment}</p>
                            <p><b>Payment method : </b>${val.payment}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }

    async getAll_Type_Of_Payments(){
        let data = await getAll_Type_Of_Payments();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Payment methods: ${val}</div>
            </div>
            `
        })
    }
//_____________________________________________________________________________________________________//
// PRODUCTS MODULE //
    async getAll_OrnamentalProducts(){
        let data = await getAll_OrnamentalProducts();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>Ornamental products with 100 units on stock.</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                                <p><b>Price : </b>${val.price_sale}</p>
                                <p><b>Product Name : </b>${val.name}</p>
                                <p><b>Product gama : </b>${val.gama}</p>
                                <p><b>Stock : </b>${val.stock}</p>
                            </div>
                        </div>
                    </div>
            `
        });
    }

    async getAllProductsThatNeverHasBeenRequested(){
        let data = await getAllProductsThatNeverHasBeenRequested();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>Products that never have been in a delivery.</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                                <p><b>Price : </b>${val.price_sale}</p>
                                <p><b>Product Name : </b>${val.name}</p>
                                <p><b>Product gama : </b>${val.gama}</p>
                                <p><b>Stock : </b>${val.stock}</p>
                            </div>
                        </div>
                    </div>
                `
        })
    }

    async getAllProductsThatNeverHasBeenRequestedWithItsNDI(){
        let data = await getAllProductsThatNeverHasBeenRequestedWithItsNDI();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Never deliveried products.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Product Name : </b>${val.name}</p>
                            <p><b>Description : </b>${val.description}</p>

                        </div>
                    </div>
                </div>
            `
        });
    }
    
//_____________________________________________________________________________________________________//
//REQUEST MODULE//

    async getAllStatus(){
        let data = await getAllStatus();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Different states for a delivery: ${val}</div>
            </div>
            `
        });
    }
    
    async getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime(){
        let data = await getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>List with client and deliery inf.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Client code: </b>${val.code_client}</p>
                            <p><b>Delivery code : </b>${val.code_request}</p>
                            <p><b>Date wait : </b>${val.date_wait}</p>
                            <p><b>Date delviery: </b>${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
    async getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore(){
        let data = await getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>List with client and deliveried 2 days faster.</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Client code: </b>${val.code_client}</p>
                            <p><b>Delivery code : </b>${val.code_request}</p>
                            <p><b>Date wait : </b>${val.date_wait}</p>
                            <p><b>Date delviery: </b>${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
    async getAllRefusedRequest_In2009(){
        let data = await getAllRefusedRequest_In2009();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>List with refused requests at 2009</div>
            </div>
            <div class="card__body">
            <div class="body__marck">
                    <p><b>Client code: </b>${val.code_client}</p>
                    <p><b>Delivery code : </b>${val.code_request}</p>
                    <p><b>Date wait : </b>${val.date_wait}</p>
                    <p><b>Date request : </b>${val.date_request}</p>
                    <p><b>Date delviery: </b>${val.date_delivery}</p>
                    <p><b>Status : </b>${val.status}</p>

                </div>
            </div>
        </div>
            `
        });
    }
    async getAll_Request_From_January(){
        let data = await getAll_Request_From_January();
        data.forEach(val=>{
            this.shadowRoot.innerHTML+=/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>Requests that was deliveried at january..</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                            <p><b>Client code: </b>${val.code_client}</p>
                            <p><b>Delivery code : </b>${val.code_request}</p>
                            <p><b>Date wait : </b>${val.date_wait}</p>
                            <p><b>Date delviery: </b>${val.date_delivery}</p>
                            <p><b>Date request : </b>${val.date_request}</p>
                            <p><b>Status : </b>${val.status}</p>
                            <p><b>comment by clients : </b>${val.comment}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }

//_____________________________________________________________________________________________________//

    static get observedAttributes() {
        return ["logic"];
    }
//_____________________________________________________________________________________________________//

    attributeChangedCallback(name, old, now) {
//_____________________________________________________________________________________________________//
// CLIENTS //
        if(name=="logic" && now=="client_1")this.getAllClientsfromSpain()
        if(name=="logic" && now=="client_2")this.getClients_From_Madrid()
        if(name=="logic" && now=="client_3")this.get_FullNameClients_And_SalesManager()
        if(name=="logic" && now== "client_4")this.getAllClientNameAndSalesManagerWithPayment()
        if(name=="logic" && now== "client_5")this.getAllClientNameAndSalesManagerWithoutPayment()
        if(name=="logic" && now== "client_6")this.getAllAlreadyClientsPaymentsAndManagerOffices()    
        if(name=="logic" && now== "client_7")this.getAllNotAlreadyClientsPaymentsAndManagerOffices()
        if(name=="logic" && now== "client_8")this.getAllOfficeswithFuenlabradaClients()   
        if(name=="logic" && now== "client_9")this.getAll()
        if(name=="logic" && now== "client_10")this.getAllClientsWithALateDeliveryArrive()
        if(name=="logic" && now== "client_11")this.getAllClientsWhoHaventPaid()
        if(name=="logic" && now== "client_12")this.getAllClientsWhoHaventRequest()
        if(name=="logic" && now== "client_13")this.getAllClientsWhoHaveNeitherPaidNorRequest()
        if(name=="logic" && now== "client_14")this.getAllClientsWhoHaveRequestedButHaventPaid()
//_____________________________________________________________________________________________________//
// EMPLOYEE //
        if(name=="logic" && now== "employ_1")this.getAllFullNameAndEmailsAndBoss()
        if(name=="logic" && now== "employ_2")this.getBossFullNameAndEmail()
        if(name=="logic" && now== "employ_3")this.getAllFullNamePositionDiferentSalesRepresentative()
        if(name=="logic" && now== "employ_4")this.getAllEmployeesAndBossesNames()
        if(name=="logic" && now== "employ_5")this.getAllEmployeesWithBossNameAndTheBossesNames()
        if(name=="logic" && now== "employ_6")this.getAllEmployeesThatDontHaveOffice()
        if(name=="logic" && now== "employ_7")this.getAllEmployeesThatArentAssociatedWithAnyClientDesign()
        if(name=="logic" && now== "employ_8")this.getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName()
        if(name=="logic" && now== "employ_9")this.getAllEmployeesThatArentAssociatedWithAnyClientOrOffice()
        if(name=="logic" && now== "employ_10")this.getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice()
//_____________________________________________________________________________________________________//
// OFFICE //
        if(name=="logic" && now== "ofice_1")this.getAllOficceAndCodeCity()
        if(name=="logic" && now== "ofice_2")this.getAllOficceCityAndMovil()
        if(name=="logic" && now== "ofice_3")this.getAllOfficesAddressWithClientsInFuenlabrada()
//_____________________________________________________________________________________________________//
// PAYMENTS //
        if(name=="logic" && now== "paymet_1")this.getClientPayments_At_2008()
        if(name=="logic" && now== "paymet_2")this.getAllpaypal2008payments()
        if(name=="logic" && now== "paymet_3")this.getAll_Type_Of_Payments()
//_____________________________________________________________________________________________________//
// PRODUCTS //
        if(name=="logic" && now== "product_1")this.getAll_OrnamentalProducts()
        if(name=="logic" && now== "product_2")this.getAllProductsThatNeverHasBeenRequested()
        if(name=="logic" && now== "product_3")this.getAllProductsThatNeverHasBeenRequestedWithItsNDI()
    
//_____________________________________________________________________________________________________//
// REQUEST //
        if(name=="logic" && now== "request_1")this.getAllStatus()
        if(name=="logic" && now== "request_2")this.getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime()
        if(name=="logic" && now== "request_3")this.getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore()
        if(name=="logic" && now== "request_4")this.getAllRefusedRequest_In2009()
        if(name=="logic" && now== "request_5")this.getAll_Request_From_January()
    }
//_____________________________________________________________________________________________________//
}


