(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p=document.querySelector(".support.container-s");p||console.error("Parent container not found.");let g=0;const h=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],u=document.createElement("div");u.classList.add("swiper-container");const a=document.createElement("div");a.classList.add("swiper-wrapper");a.id="swiper-wrapper";function f(t){const n=document.createElement("div");n.classList.add("swiper-slide");const l=(g+1).toString().padStart(2,"0"),i=document.createElement("a");i.classList.add("link-s"),i.href=t.url,i.target="_blank";const e=document.createElement("img");e.classList.add("img-s"),e.src=t.img,e.alt=t.title,i.appendChild(e);const r=document.createElement("span");r.classList.add("charity-index"),r.textContent=l,n.appendChild(r),n.appendChild(i),a.appendChild(n),g++}h.forEach(t=>{f(t)});u.appendChild(a);p.appendChild(u);const m=document.createElement("div");m.classList.add("button-con");const s=document.createElement("label");s.classList.add("container-btn");s.classList.add("btn-s");const o=document.createElement("input");o.setAttribute("type","checkbox");o.checked=!0;o.setAttribute("hidden",!0);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("viewBox","0 0 512 512");c.setAttribute("height","1em");c.classList.add("chevron-down");c.innerHTML='<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';s.appendChild(o);s.appendChild(c);m.appendChild(s);p.appendChild(m);o.addEventListener("change",()=>{const t=document.querySelector(".swiper-wrapper"),n=document.querySelector(".chevron-down");o.checked?n.style.transform="":n.style.transform="rotate(-180deg)",(t.scrollTop<=0?"down":"up")==="down"?t.scrollTop+t.clientHeight>=t.scrollHeight?t.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight:t.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:t.scrollTop<=0?t.scrollTop+=3*document.querySelector(".swiper-slide").offsetHeight:t.scrollTop-=3*document.querySelector(".swiper-slide").offsetHeight});
//# sourceMappingURL=commonHelpers.js.map
