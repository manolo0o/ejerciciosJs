import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_1" text="1.Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
                <my-details logic="client_2"text="2. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
                <my-details logic="client_3" text="3.Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="client_4" text="4. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_5" text="5. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_6" text="6.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la  ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_7" text="7.Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes 
                junto con la ciudad de la oficina a la que pertenece el representante.
                "></my-details>
                <my-details logic="client_8" text="8.Lista la dirección de las oficinas que tengan clientes en Fuenlabrada."></my-details>
                <my-details logic="client_9" text="9. Devuelve el nombre de los clientes y el nombre de sus representantes
                junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_10" text="10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido."></my-details>
                <my-details logic="client_11" text="11. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago."></my-details>
                <my-details logic="client_12" text="12. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido."></my-details>
                <my-details logic="client_13" text="13. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido."></my-details>
                <my-details logic="client_14" text="14. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago."></my-details>
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
            <my-details logic="employ_1" text="1. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
            <my-details logic="employ_2" text="2. Devuelve el nombre del puesto, nombre, apellidos yemail del jefe de la empresa."></my-details>
            <my-details logic="employ_3" text="3. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>
            <my-details logic="employ_4" text="4. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>
            <my-details logic="employ_5" text="5. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe."></my-details>
            <my-details logic="employ_6" text="6. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada."></my-details>
            <my-details logic="employ_7" text="7. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado."></my-details>            
            `;
        }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
            <my-details logic="ofice_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas. "></my-details>
            <my-details logic="ofice_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
            <my-details logic="ofice_3" text="3. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada."></my-details>  
            `;
        }
    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)