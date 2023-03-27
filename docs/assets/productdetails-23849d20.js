import"./footer-1d411986.js";import"./base-0daf5ed6.js";import{a as l}from"./products-3664da34.js";import{t as p}from"./toBase64-f5fc9a40.js";import{g as u,u as m,d as _,l as g}from"./product-service-e2f75ab7.js";import"./_commonjsHelpers-edff4021.js";const h=document.querySelector("[data-galery-related]");let d=document.querySelector("[data-product]");const s=new URL(window.location).searchParams;u(s.get("id")).then(e=>{d.innerHTML=`<img class="product__image" src=${e.imgsrc} alt="">
        <div class="product__description">
            <div class="product__options" data-product-options>
                <i class="fa-solid fa-pencil" data-product-edit></i>
                <i class="fa-solid fa-trash" data-product-delete></i>
            </div>
            <h1 class="product__name">${e.nombre}</h1>
            <span class="product__price">$ ${parseFloat(e.precio).toFixed(2)}</span>
            <p class="product__details">${e.desc?e.desc:"No hay una descripción de este producto disponible"}</p>
        </div>`,document.title=`Producto - ${e.nombre}`;const i=document.querySelector("[data-product-edit]"),n=document.querySelector("[data-product-delete]");i.addEventListener("click",()=>{d.outerHTML=`
        <form class="product" data-product>
            <input name="imgsrc" accept="image/*" required type="file" class="product__image--edit formadd__image" src=${e.imgsrc} alt="">
            <div class="product__description">
                <div class="product__options" data-product-options>
                    <i class="fa-solid fa-cancel" data-product-cancel></i>
                    <button type="submit" >
                        <i class="fa-solid fa-check" data-product-submit></i>
                    </button>
                </div>
                <input name="nombre" required type="text" class="product__name--edit input" placeholder="${e.nombre}">
                <input name="precio" required type="number" step="0.01" class="product__price input" placeholder="$ ${parseFloat(e.precio).toFixed(2)}">
                <textarea name="desc" required class="product__details--edit input" placeholder="${e.desc?e.desc:"No hay una descripción de este producto disponible"}"></textarea>
            </div>
        </form>`,d=document.querySelector("[data-product]");let t={};for(let a=0;a<d.elements.length;a++)d.elements[a].addEventListener("change",c=>{c.target.name=="imgsrc"?p(c.target.files[0]).then(o=>{t={...t,imgsrc:o}}):t={...t,[c.target.name]:c.target.value}});const r=document.querySelector("[data-product-cancel]");d.addEventListener("submit",a=>{a.preventDefault(),m(s.get("id"),t).then(()=>{window.location.reload()}).catch(c=>console.warn(c))}),r.addEventListener("click",()=>window.location.reload())}),n.addEventListener("click",()=>{const t=document.querySelector(".modal__content"),r=document.querySelector("[data-modal-cancel]"),a=document.querySelector("[data-modal-confirm]"),c=o=>{(o.target==t.parentElement||o.target==r)&&t.parentElement.classList.remove("confirm__modal--shown")};t.parentElement.classList.add("confirm__modal--shown"),t.parentElement.addEventListener("click",c),r.addEventListener("click",c),a.addEventListener("click",()=>{_(s.get("id")).then(()=>{window.location="./tudo.html"})})}),g().then(t=>{const r=t.filter(a=>a.categoria==e.categoria&&a.id!=e.id);l(h,r.slice(0,6))})}).catch(e=>{d.innerHTML=`<img class="product__image" src="https://www.lucushost.com/blog/wp-content/uploads/2022/07/ejemplo-http-error-503-servidor-litespeed.png" alt="">
    <div class="product__description">
        <h1 class="product__name">El servidor no responde</h1>
        <span class="product__price"></span>
        <p class="prodcut__details">Por favor intentelo más tarde</p>
    </div>`});
