import"./base-5371dab3.js";import{a as c}from"./products-181ed323.js";import{g as o,l as d}from"./product-service-33b11f10.js";const i=document.querySelector("[data-galery-related]"),a=document.querySelector("[data-product]"),l=new URL(window.location).searchParams;o(l.get("id")).then(e=>{a.innerHTML=`<img class="product__image" src=${e.imgsrc} alt="">
        <div class="product__description">
            <h1 class="product__name">${e.nombre}</h1>
            <span class="product__price">$ ${parseFloat(e.precio).toFixed(2)}</span>
            <p class="prodcut__details">${e.desc?e.desc:"No hay una descripción de este producto disponible"}</p>
        </div>`,d().then(r=>{const t=r.filter(s=>s.categoria==e.categoria&&s.id!=e.id);c(i,t.slice(0,6))})}).catch(e=>{a.innerHTML=`<img class="product__image" src="https://www.lucushost.com/blog/wp-content/uploads/2022/07/ejemplo-http-error-503-servidor-litespeed.png" alt="">
    <div class="product__description">
        <h1 class="product__name">El servidor no responde</h1>
        <span class="product__price"></span>
        <p class="prodcut__details">Por favor intentelo más tarde</p>
    </div>`});
