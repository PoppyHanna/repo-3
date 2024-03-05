(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".support.container-s");c||console.error("Parent container not found.");const m=9;let p=0;const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@2x.png"}],l=document.createElement("div");l.classList.add("swiper-container");const o=document.createElement("div");o.classList.add("swiper-wrapper");o.id="swiper-wrapper";function h(n){const i=document.createElement("div");i.classList.add("swiper-slide");const s=(p+1).toString().padStart(2,"0"),r=document.createElement("a");r.classList.add("link-s"),r.href=n.url,r.target="_blank";const e=document.createElement("img");e.classList.add("img-s"),e.src=n.img,e.alt=n.title,r.appendChild(e),i.appendChild(document.createTextNode(`${s} `)),i.appendChild(r),o.appendChild(i),p++}g.slice(0,Math.min(m,g.length)).forEach(n=>{h(n)});l.appendChild(o);c.appendChild(l);const d=document.createElement("div");d.classList.add("button-con");const u=document.createElement("button");u.classList.add("btn-s");u.innerHTML='<svg class="icon-s" width="24" height="24"><use href="./img/sprite.svg#icon-up" class="arrow-s"></use></svg>';d.appendChild(u);c.appendChild(d);
//# sourceMappingURL=commonHelpers.js.map
