import '../styles/blocks/addproduct.css'
import { agregarProducto } from '../services/product-service.js';

const form = document.querySelector("[data-form-add]");
const success = document.querySelector(".success-message");
const image = document.querySelector("[data-form-image]");

let formValues = {};

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

for (let i = 0; i < form.children.length; i++) {
    form.children[i].addEventListener("change", (event) => {
        formValues = { ...formValues, [event.target.name]: event.target.value };
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toBase64(image.files[0]).then((encoded) => {
        formValues = {...formValues, "imgsrc":encoded}
        agregarProducto(formValues).then(() => {
            success.classList.remove("success-message--hidden");
        });
    }
    )

    for (let i = 0; i < form.children.length-1; i++) {
        form.children[i].value = ""
    }
})
