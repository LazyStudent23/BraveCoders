import{A as P,S as w,K as g,N as b,M,E as j,a as y,i as B,b as O}from"./assets/vendor-DELip65d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const L=document.querySelector("button.js-burger-menu"),E=document.querySelector("div.js-mobile-menu"),V=document.querySelector("#mobile-menu"),p=document.querySelector("div.js-nav-menu"),N=window.matchMedia("(min-width: 768px)");T();N.addEventListener("change",A);function T(){window.innerWidth>=768?p.addEventListener("click",v):L.addEventListener("click",u)}function u(){E.classList.add("is-open"),document.body.style.position="fixed",this.removeEventListener("click",u),V.addEventListener("click",x)}function x(e){e.target.nodeName!=="DIV"&&e.target.nodeName!=="UL"&&(E.classList.remove("is-open"),document.body.style.position="",this.removeEventListener("click",x),L.addEventListener("click",u))}function v(){document.querySelector("ul.menu-nav-list").classList.toggle("is-visible")}function A(e){if(!e.matches){L.addEventListener("click",u),p.removeEventListener("click",v);return}E.classList.remove("is-open"),document.body.style.position="",V.removeEventListener("click",x),p.addEventListener("click",v)}const I=new P(".accordion-container",{duration:500,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",showMultiple:!0,openOnInit:[]});I.open(0);new w(".swiper-of-skills",{speed:400,slidesPerView:2,spaceBetween:0,modules:[g,b],edgeSwipeDetection:!0,grabCursor:!0,loop:!0,noSwipingSelector:".skills-swiper-button-next",slideActiveClass:"accent-color",breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{keyPress:W},keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".skills-swiper-button-next"}});function W(e,t){switch(t){case 9:e.slideNext();break;case 8:e.slidePrev();break}}const f=document.querySelector(".swiper-button-prev"),k=document.querySelector(".swiper-button-next");new w("section.projects-section .swiper",{modules:[b,g,M,j],slidesPerView:1,spaceBetween:32,speed:500,effect:"coverflow",on:{beforeInit:f.classList.add("is-inactive"),slideChange:R,keyPress:F},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},edgeSwipeDetection:!0,coverflowEffect:{depth:300}});function F(e,t){switch(t){case 9:e.slideNext();break;case 8:e.slidePrev();break}}function R(e){if(e.isBeginning===!0){f.classList.add("is-inactive");return}if(f.classList.remove("is-inactive"),e.isEnd===!0){k.classList.add("is-inactive");return}k.classList.remove("is-inactive")}document.querySelector(".accordion-container");new P(".accordion",{duration:500,showMultiple:!1,openOnInit:[],elementClass:"accordion-item",triggerClass:"btn-svg-opn",panelClass:"accordion-content"});const S=document.querySelectorAll(".btn-svg-opn");S.forEach(e=>{e.addEventListener("click",()=>{S.forEach(t=>{t!==e&&t.classList.remove("rotate")}),e.classList.toggle("rotate")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee__line"),i=s=>{s.forEach(n=>{n.isIntersecting?t.forEach(c=>c.classList.add("animate")):t.forEach(c=>c.classList.remove("animate"))})};new IntersectionObserver(i,{threshold:.5}).observe(e)});const D=async()=>await y.get("https://portfolio-js.b.goit.study/api/reviews"),q=document.querySelector(".review-card-list"),K=()=>`<li class="swiper-slide review-section-card">
      <p class="not-found-content"> Not Found :(</p>
    </li>`,_=e=>`<li class="swiper-slide review-section-card">
      <img
        src="${e.avatar_url}"
        class="review-card-avatar"
        alt="reviewer-avatar"
        width="48px"
        height="48px"
      />
      <p class="reviewer-name">${e.author}</p>
      <p class="review-content">${e.review}</p>
    </li>`,$=async()=>{try{const t=(await D()).data.map(i=>_(i)).join("");q.insertAdjacentHTML("afterbegin",t),z.update()}catch{B.error({title:"Info",message:"There was an error loading reviews. Please check your internet connection or try refreshing the page.",position:"topRight"});const t=K();q.insertAdjacentHTML("afterbegin",t)}};$();const z=new w(".review-swiper",{speed:400,modules:[b,g,M],breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},mousewheel:{enabled:!0}}),l=document.querySelector(".js-footer-form"),a=document.querySelector(".js-email-field"),m=document.querySelector(".js-comment-field"),h=document.querySelector(".js-success-email"),C=document.querySelector(".js-invalid-email");y.defaults.baseURL="https://portfolio-js.b.goit.study/api";let o,r;const H=()=>{const e=O.create(`
    <div class="form-modal">
    <button class="modal-close-btn js-modal-close-btn" type="button">
    <svg width="22" height="22">
       <use href="/img/icons.svg#icon-icon-cross"></use>
      </svg></button>
      <h3 class="modal-heading">Thank you for your interest in cooperation!</h3>
      <p class="modal-text">
        The manager will contact you shortly to discuss further details and
        opportunities for cooperation. Please stay in touch.
      </p>
    </div>
`);e.show();const t=e.element(),i=d=>{e.close(),t.querySelector(".js-modal-close-btn").removeEventListener("click",i)};t.querySelector(".js-modal-close-btn").addEventListener("click",i)},U=()=>{o=a.value,r=m.value,o.length>50?o.endsWith("...")||(a.value=o.substring(0,50)+"..."):o.endsWith("...")&&(a.value=o.substring(0,50)),r.length>50?r.endsWith("...")||(m.value=r.substring(0,50)+"..."):r.endsWith("...")&&(m.value=r.substring(0,50)),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)?(C.classList.add("is-hidden"),h.classList.remove("is-hidden"),a.style.borderBottom="1px solid #3cbc81"):(h.classList.add("is-hidden"),C.classList.remove("is-hidden"),a.style.borderBottom="1px solid #e74a3b")},Z=async e=>{e.preventDefault(),o=l.elements.userEmail.value.trim(),r=l.elements.userComment.value.trim();try{await y.post("/requests",{email:o,comment:r}),a.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",h.classList.add("is-hidden"),l.reset(),H()}catch{B.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#e74a3b",progressBarColor:"#B51B1B"})}};l.addEventListener("submit",Z);l.addEventListener("input",U);
//# sourceMappingURL=index.js.map
