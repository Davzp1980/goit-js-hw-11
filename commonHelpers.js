import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function u(t){return`<li class="list-item">
        <img
          src="${t.userImageURL}"
          alt="${t.tags}"
          width="360"
          
        />
        <ul class="description-list">
          <li class="description-item">
            <p>Likes</p>
            <p>${t.likes}</p>
          </li>
          <li class="description-item">
            <p>Views</p>
            <p>${t.views}</p>
          </li>
          <li class="description-item">
            <p>Comments</p>
            <p>${t.comments}</p>
          </li>
          <li class="description-item">
            <p>Downloads</p>
            <p>${t.downloads}</p>
          </li>
        </ul>
      </li>`}function A(t){return t.map(u).join("")}const m={iconUrl:a,backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"},p=document.querySelector(".img-list"),d=document.querySelector(".loading");function h(t){const i=`https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${t}&image_type=photo
  &orientation=horizontal&safesearch=true`;fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0){l.show(m),d.classList.add("visually-hidden");return}p.innerHTML=A(r.hits),console.log(r.hits)}).catch(r=>{throw new Error(r)})}const n=document.querySelector(".search-form");document.querySelector(".search-btn");const f=document.querySelector(".loading");n.addEventListener("submit",t=>{t.preventDefault(),f.classList.remove("visually-hidden");const i=n.elements.searchText.value.trim();i!==""&&(h(i),n.reset())});
//# sourceMappingURL=commonHelpers.js.map
