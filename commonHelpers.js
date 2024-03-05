(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".support.container-s");c||console.error("Parent container not found.");const m=9;let u=0;const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],l=document.createElement("div");l.classList.add("swiper-container");const s=document.createElement("div");s.classList.add("swiper-wrapper");s.id="swiper-wrapper";function h(r){const n=document.createElement("div");n.classList.add("swiper-slide");const o=(u+1).toString().padStart(2,"0"),i=document.createElement("a");i.classList.add("link-s"),i.href=r.url,i.target="_blank";const e=document.createElement("img");e.classList.add("img-s"),e.src=r.img,e.alt=r.title,i.appendChild(e);const t=document.createElement("span");t.classList.add("charity-index"),t.textContent=o,n.appendChild(t),n.appendChild(i),s.appendChild(n),u++}g.slice(0,Math.min(m,g.length)).forEach(r=>{h(r)});l.appendChild(s);c.appendChild(l);const d=document.createElement("div");d.classList.add("button-con");const p=document.createElement("button");p.classList.add("btn-s");p.innerHTML='<svg class="icon-s" width="32" height="32"><use href="./img/sprite.svg#icon-up" class="arrow-s"></use></svg>';d.appendChild(p);c.appendChild(d);
//# sourceMappingURL=commonHelpers.js.map
