const s=o=>new Promise((r,a)=>{const e=new FileReader;e.readAsDataURL(o),e.onload=()=>r(e.result),e.onerror=t=>a(t)});export{s as t};
