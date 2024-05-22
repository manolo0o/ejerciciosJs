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


import{
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    getAllOfficesAddressWithClientsInFuenlabrada,
} from "../module/office.js" 

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
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
            static get observedAttributes() {
                return ["logic"];
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
            this.shadowRoot.innerHTML/*html*/`
            <div class="report__card">
            <div class="card__title">
                <div>${val.code_office}</div>
            </div>
            `
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClientDesign(){
        let data = await getAllEmployeesThatArentAssociatedWithAnyClient();
        data.forEach(val=>{
            this.shadowRoot.innerHTML/*HTML*/`
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
            `;
        });
    }

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

            static get observedAttributes() {
                return ["logic"];
            }

    attributeChangedCallback(name, old, now) {
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

        
        if(name=="logic" && now== "ofice_1")this.getAllOficceAndCodeCity()
        if(name=="logic" && now== "ofice_2")this.getAllOficceCityAndMovil()
        if(name=="logic" && now== "ofice_3")this.getAllOfficesAddressWithClientsInFuenlabrada()
    }
}


