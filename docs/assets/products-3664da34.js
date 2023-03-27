const n=(t,i)=>i.filter(s=>{if(s.categoria==t)return s}),r=(t,i)=>{i.map(e=>{const a=document.createElement("div");return a.classList.add("galery__element"),a.id=e.id,a.addEventListener("click",l=>{l.target==a?window.location=`./productdetails.html?id=${l.target.id}`:window.location=`./productdetails.html?id=${l.target.parentElement.id}`}),a.innerHTML=`
        <img class="galery__element__img" src=${e.imgsrc} alt=${e.nombre}>
        <span class="galery__element__title">${e.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(e.precio).toFixed(2)}</span>
        <i class="galery__element__detail">Ver producto</i>`,a}).forEach(e=>{t.appendChild(e)})},d=(t,i)=>{i.map(e=>{const a=document.createElement("div");return a.classList.add("galery__element"),a.id=e.id,a.addEventListener("click",l=>{l.target==a?window.location=`./productdetails.html?id=${l.target.id}`:window.location=`./productdetails.html?id=${l.target.parentElement.id}`}),a.innerHTML=`
        <img class="galery__element__img" src=${e.imgsrc} alt=${e.nombre}>
        <span class="galery__element__title">${e.nombre}</span>
        <span class="galery__element__price">$ ${parseFloat(e.precio).toFixed(2)}</span>
        <i class="galery__element__id">#${e.id.split("-")[0]}</i>`,a}).forEach(e=>{t.appendChild(e)})};export{r as a,d as b,n as f};
