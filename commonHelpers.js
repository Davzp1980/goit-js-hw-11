import{s as a,i as u}from"./assets/vendor-5c957d73.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function d(t){return`<a class="gallery-link" href="${t.largeImageURL}">
        <li class="list-item">
        <img
          src="${t.previewURL}"
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
      </li>
      </a>`}function m(t){return t.map(d).join("")}const A=new a(".img-list a"),h={iconUrl:p,backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"},f=document.querySelector(".img-list"),c=document.querySelector(".loading");function g(t){const i=`https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${t}&image_type=photo
  &orientation=horizontal&safesearch=true`;fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0){u.show(h),c.classList.add("visually-hidden");return}f.innerHTML=m(r.hits),c.classList.add("visually-hidden"),A.refresh(),console.log(r.hits)}).catch(r=>{throw new Error(r)})}const n=document.querySelector(".search-form");document.querySelector(".search-btn");const y=document.querySelector(".loading");n.addEventListener("submit",t=>{t.preventDefault(),y.classList.remove("visually-hidden");const i=n.elements.searchText.value.trim();i!==""&&(g(i),n.reset())});
//# sourceMappingURL=commonHelpers.js.map
