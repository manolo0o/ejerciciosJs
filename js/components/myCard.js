import { 
    getAllClientsfromSpain, 
    getClients_From_Madrid,
    get_FullNameClients_And_SalesManager

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
    async getAllEmployNotClientsDesign(){
        let data = await getAllEmployNotClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Jefe encargado: </b>${val.name_boss}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
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
        if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}