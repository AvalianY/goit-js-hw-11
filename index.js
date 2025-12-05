import{a as u,S as g,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com/api/";function h(s){return u.get("",{params:{key:"53548536-2a5565f3da63b0c0db767d1af",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){n();const t=s.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img 
                class="gallery-image" 
                src="${o.webformatURL}" 
                alt="${o.tags}" 
                />
            </a>
            <div class="info-container">
                <p class="info">Likes<br>${o.likes}</p>
                <p class="info">Views<br>${o.views}</p>
                <p class="info">Comments<br>${o.comments}</p>
                <p class="info">Downloads<br>${o.downloads}</p>
            </div>
        </li>`).join("");f.insertAdjacentHTML("afterbegin",t),b.refresh()}function n(){f.innerHTML=""}function v(){d.style.display="block"}function S(){d.style.display="none"}const p=document.querySelector(".form"),m=document.querySelector(".form input"),y=document.querySelector(".form button");let c=[];y.disabled=!0;p.addEventListener("input",()=>{y.disabled=m.value===""});p.addEventListener("submit",s=>{s.preventDefault(),n(),v(),h(m.value).then(t=>{if(t.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n();return}c=t.hits,L(c)}).catch(t=>{l.error({message:t.message,position:"topRight"})}).finally(S())});
//# sourceMappingURL=index.js.map
