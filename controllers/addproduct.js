import '../styles/blocks/addproduct.css'
import { agregarProducto } from '../services/product-service.js';

const form = document.querySelector("[data-form-add]");
const success = document.querySelector(".success-message");
let formValues = {};

for(let i=0; i<form.children.length;i++){
    form.children[i].addEventListener("change",(event)=>{
        formValues = {...formValues, [event.target.name] : event.target.value};
    })
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    agregarProducto(formValues).then(()=>{
        success.classList.remove("success-message--hidden");
    });
    
})
