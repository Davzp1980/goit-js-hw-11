import{s as d,i as u}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function p(t){return`<li class="list-item">
          <div class="img-box">
            <a
              class="gallery-link"
              href="${t.largeImageURL}"
            >
              <img
                src="${t.previewURL}"
                alt="${t.tags}"
                width="360"
              />
            </a>
          </div>
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
        </li>`}function A(t){return t.map(p).join("")}const h=new d(".img-list a"),f={iconUrl:m,backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"},a=document.querySelector(".img-list"),c=document.querySelector(".loading");function g(t){const s=`https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${t}&image_type=photo
  &orientation=horizontal&safesearch=true`;fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0){u.show(f),c.classList.add("visually-hidden");return}a.innerHTML=A(r.hits),c.classList.add("visually-hidden"),h.refresh()}).catch(r=>{throw new Error(r)})}const n=document.querySelector(".search-form");document.querySelector(".search-btn");const y=document.querySelector(".loading");n.addEventListener("submit",t=>{t.preventDefault(),a.innerHTML="",y.classList.remove("visually-hidden");const s=n.elements.searchText.value.trim();s!==""&&(g(s),n.reset())});
//# sourceMappingURL=commonHelpers.js.map
