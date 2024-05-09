import { 
    getAllClientsfromSpain, 
    getClients_From_Madrid,
    get_FullNameClients_And_SalesManager,
    getAllClientNameAndSalesManagerWithPayment
} from "../module/clients.js";
//import {
 //   getAllEmployNotClients 
//} from "../module/employees.js";

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
                            <p><b> Client Name: </b>${val.name}</p>
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
                            <p><b>Nombre del Cliente: </b> ${val.client_name}</p>
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
                            <p><b>Client Name: </b> ${val.client_name}</p>
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
                            <p><b>Client Name: </b> ${val.Client_name}</p>
                            <p><b>Manager Fullname: </b>${val.Manager_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getAllClientsfromSpain()
        if(name=="logic" && now=="client_16") this.getClients_From_Madrid()
        if(name=="logic" && now=="client_1") this.get_FullNameClients_And_SalesManager()
        if(name=="logic" && now== "client_2")this.getAllClientNameAndSalesManagerWithPayment()

    }
}