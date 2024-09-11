import{A as C,S as g,K as w,N as b,M as P,E as B,a as y,i as V,b as j}from"./assets/vendor-DELip65d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const L=document.querySelector("button.js-burger-menu"),E=document.querySelector("div.js-mobile-menu"),M=document.querySelector("#mobile-menu"),p=document.querySelector("div.js-nav-menu"),O=window.matchMedia("(min-width: 768px)");A();O.addEventListener("change",I);function A(){window.innerWidth>=768?p.addEventListener("click",v):L.addEventListener("click",u)}function u(){E.classList.add("is-open"),document.body.style.position="fixed",this.removeEventListener("click",u),M.addEventListener("click",x)}function x(e){e.target.nodeName!=="DIV"&&e.target.nodeName!=="UL"&&(E.classList.remove("is-open"),document.body.style.position="",this.removeEventListener("click",x),L.addEventListener("click",u))}function v(){document.querySelector("ul.menu-nav-list").classList.toggle("is-visible")}function I(e){if(!e.matches){L.addEventListener("click",u),p.removeEventListener("click",v);return}E.classList.remove("is-open"),document.body.style.position="",M.removeEventListener("click",x),p.addEventListener("click",v)}const N=new C(".accordion-container",{duration:500,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",showMultiple:!0,openOnInit:[]});N.open(0);const W=document.querySelectorAll(".scroll-header"),F=document.querySelector(".scroll-button");function T(){W.forEach(e=>{e.getAttribute("aria-expanded")===!0&&e.classList.add("rotate-icon"),button.classList.add("rotate-icon")})}F.addEventListener("click",T);document.querySelector(".skill-wrap");new g(".swiper-of-skills",{speed:400,slidesPerView:2,spaceBetween:0,modules:[w,b],edgeSwipeDetection:!0,grabCursor:!0,loop:!0,noSwipingSelector:".skills-swiper-button-next",slideActiveClass:"accent-color",breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{keyPress:D},keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".skills-swiper-button-next"}});function D(e,t){switch(t){case 9:e.slideNext();break;case 8:e.slidePrev();break}}const f=document.querySelector(".swiper-button-prev"),S=document.querySelector(".swiper-button-next");new g("section.projects-section .swiper",{modules:[b,w,P,B],slidesPerView:1,spaceBetween:32,speed:500,effect:"coverflow",on:{beforeInit:f.classList.add("is-inactive"),slideChange:R,keyPress:K},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},edgeSwipeDetection:!0,coverflowEffect:{depth:300}});function K(e,t){switch(t){case 9:e.slideNext();break;case 8:e.slidePrev();break}}function R(e){if(e.isBeginning===!0){f.classList.add("is-inactive");return}if(f.classList.remove("is-inactive"),e.isEnd===!0){S.classList.add("is-inactive");return}S.classList.remove("is-inactive")}document.querySelector(".accordion-container");new C(".accordion",{duration:500,showMultiple:!1,openOnInit:[],elementClass:"accordion-item",triggerClass:"btn-svg-opn",panelClass:"accordion-content"});const k=document.querySelectorAll(".btn-svg-opn");k.forEach(e=>{e.addEventListener("click",()=>{k.forEach(t=>{t!==e&&t.classList.remove("rotate")}),e.classList.toggle("rotate")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee__line"),i=s=>{s.forEach(o=>{o.isIntersecting?t.forEach(c=>c.classList.add("animate")):t.forEach(c=>c.classList.remove("animate"))})};new IntersectionObserver(i,{threshold:.5}).observe(e)});const _=async()=>await y.get("https://portfolio-js.b.goit.study/api/reviews"),$=document.querySelector(".review-card-list"),z=e=>`<li class="swiper-slide review-section-card">
      <img
        src="${e.avatar_url}"
        class="review-card-avatar"
        alt="reviewer-avatar"
        width="48px"
        height="48px"
      />
      <p class="reviewer-name">${e.author}</p>
      <p class="review-content">${e.review}</p>
    </li>`,H=async()=>{try{const t=(await _()).data.map(i=>z(i)).join("");$.insertAdjacentHTML("afterbegin",t),U.update()}catch{}};H();const U=new g(".review-swiper",{speed:400,spaceBetween:200,modules:[b,w],slidesPerView:4,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}}),l=document.querySelector(".js-footer-form"),a=document.querySelector(".js-email-field"),m=document.querySelector(".js-comment-field"),h=document.querySelector(".js-success-email"),q=document.querySelector(".js-invalid-email");y.defaults.baseURL="https://portfolio-js.b.goit.study/api";let n,r;const Z=()=>{const e=j.create(`
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
`);e.show();const t=e.element(),i=d=>{e.close(),t.querySelector(".js-modal-close-btn").removeEventListener("click",i)};t.querySelector(".js-modal-close-btn").addEventListener("click",i)},Q=()=>{n=a.value,r=m.value,n.length>50?n.endsWith("...")||(a.value=n.substring(0,50)+"..."):n.endsWith("...")&&(a.value=n.substring(0,50)),r.length>50?r.endsWith("...")||(m.value=r.substring(0,50)+"..."):r.endsWith("...")&&(m.value=r.substring(0,50)),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)?(q.classList.add("is-hidden"),h.classList.remove("is-hidden"),a.style.borderBottom="1px solid #3cbc81"):(h.classList.add("is-hidden"),q.classList.remove("is-hidden"),a.style.borderBottom="1px solid #e74a3b")},G=async e=>{e.preventDefault(),n=l.elements.userEmail.value.trim(),r=l.elements.userComment.value.trim();try{await y.post("/requests",{email:n,comment:r}),a.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",h.classList.add("is-hidden"),l.reset(),Z()}catch{V.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#e74a3b",progressBarColor:"#B51B1B"})}};l.addEventListener("submit",G);l.addEventListener("input",Q);
//# sourceMappingURL=index.js.map
