import{A as p}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=document.querySelector("button.js-burger-menu"),u=document.querySelector("div.js-mobile-menu"),v=document.querySelector("#mobile-menu"),l=document.querySelector("div.js-nav-menu"),L=window.matchMedia("(min-width: 768px)");h();L.addEventListener("change",y);function h(){window.innerWidth>=768?l.addEventListener("click",d):a.addEventListener("click",r)}function r(){u.classList.add("is-open"),document.body.style.position="fixed",this.removeEventListener("click",r),v.addEventListener("click",m)}function m(n){n.target.nodeName!=="DIV"&&n.target.nodeName!=="UL"&&(u.classList.remove("is-open"),document.body.style.position="",this.removeEventListener("click",m),a.addEventListener("click",r))}function d(){document.querySelector("ul.menu-nav-list").classList.toggle("is-visible")}function y(n){if(!n.matches){a.addEventListener("click",r),l.removeEventListener("click",d);return}u.classList.remove("is-open"),document.body.style.position="",v.removeEventListener("click",m),l.addEventListener("click",d)}document.querySelector(".accordion-container");new p(".accordion",{duration:500,showMultiple:!1,openOnInit:[],elementClass:"accordion-item",triggerClass:"btn-svg-opn",panelClass:"accordion-content"});const f=document.querySelectorAll(".btn-svg-opn");f.forEach(n=>{n.addEventListener("click",()=>{f.forEach(o=>{o!==n&&o.classList.remove("rotate")}),n.classList.toggle("rotate")})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".covers-section"),o=document.querySelectorAll(".marquee__line"),c=e=>{e.forEach(t=>{t.isIntersecting?o.forEach(i=>i.classList.add("animate")):o.forEach(i=>i.classList.remove("animate"))})};new IntersectionObserver(c,{threshold:.5}).observe(n)});
//# sourceMappingURL=index.js.map