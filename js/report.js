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
//_____________________________________________________________________________________________________//
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
            `;
        }
//_____________________________________________________________________________________________________//
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
//_____________________________________________________________________________________________________//
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <my-details logic="ofice_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas. "></my-details>
                <my-details logic="ofice_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
                <my-details logic="ofice_3" text="3. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada."></my-details>  
            `;
        }
//_____________________________________________________________________________________________________//
        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
                <my-details logic="paymet_1" text="1. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta: "></my-details>
                <my-details logic="paymet_2" text="2. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor. "></my-details>
                <my-details logic="paymet_3" text="3. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>

            `;
        }
//_____________________________________________________________________________________________________//
        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
            <my-details logic="product_1" text="1. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su preciode venta, mostrando en primer lugar los de mayor precio. "></my-details>
            <my-details logic="product_2" text="2. Devuelve un listado de los productos que nunca han aparecido en un pedido."></my-details>
            <my-details logic="product_3" text="3. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto."></my-details>
            `;
        }
//_____________________________________________________________________________________________________//
        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
            <my-details logic="request_1" text="1. Devuelve un listado con los distintos estados por los que puede pasar un pedido.  "></my-details>
            <my-details logic="request_2" text="2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo. "></my-details>
            <my-details logic="request_3" text="3. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>
            <my-details logic="request_4" text="4. Devuelve un listado de todos los pedidos que fueron rechazados en 2009. "></my-details>
            <my-details logic="request_5" text="5. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año. "></my-details>
            `;
        }
        

//_____________________________________________________________________________________________________//
    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)