(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e8eaed'%3e%3cpath%20d='M440-760v-160h80v160h-80Zm266%20110-55-55%20112-115%2056%2057-113%20113Zm54%20210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652%20140-763l57-56%20113%20113-56%2054Zm508%20512L651-255l54-54%20114%20110-57%2059ZM40-440v-80h160v80H40Zm157%20300-56-57%20112-112%2029%2027%2029%2028-114%20114Zm283-100q-100%200-170-70t-70-170q0-100%2070-170t170-70q100%200%20170%2070t70%20170q0%20100-70%20170t-170%2070Zm0-80q66%200%20113-47t47-113q0-66-47-113t-113-47q-66%200-113%2047t-47%20113q0%2066%2047%20113t113%2047Zm0-160Z'/%3e%3c/svg%3e",L="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.1%2023H10.5L11%2022.6875C11.3333%2022.4792%2011.6958%2022.2458%2012.0875%2021.9875C12.4792%2021.7292%2012.8417%2021.4958%2013.175%2021.2875L13.675%2020.975C15.025%2020.875%2016.2708%2020.4667%2017.4125%2019.75C18.5542%2019.0333%2019.4583%2018.075%2020.125%2016.875C18.6917%2016.7417%2017.3333%2016.3792%2016.05%2015.7875C14.7667%2015.1958%2013.6167%2014.3917%2012.6%2013.375C11.5833%2012.3583%2010.775%2011.2083%2010.175%209.925C9.575%208.64167%209.21667%207.28333%209.1%205.85C7.81667%206.56667%206.8125%207.55417%206.0875%208.8125C5.3625%2010.0708%205%2011.4333%205%2012.9V13.2L4.7%2013.3375C4.5%2013.4292%204.27917%2013.525%204.0375%2013.625C3.79583%2013.725%203.575%2013.8208%203.375%2013.9125L3.075%2014.05C3.04167%2013.8667%203.02083%2013.675%203.0125%2013.475C3.00417%2013.275%203%2013.0833%203%2012.9C3%2010.4667%203.775%208.32083%205.325%206.4625C6.875%204.60417%208.85%203.45%2011.25%203C10.95%204.65%2011.0417%206.2625%2011.525%207.8375C12.0083%209.4125%2012.8417%2010.7917%2014.025%2011.975C15.2083%2013.1583%2016.5875%2013.9917%2018.1625%2014.475C19.7375%2014.9583%2021.35%2015.05%2023%2014.75C22.5667%2017.15%2021.4167%2019.125%2019.55%2020.675C17.6833%2022.225%2015.5333%2023%2013.1%2023ZM6%2021H10.5C10.9167%2021%2011.2708%2020.8542%2011.5625%2020.5625C11.8542%2020.2708%2012%2019.9167%2012%2019.5C12%2019.0833%2011.8583%2018.7292%2011.575%2018.4375C11.2917%2018.1458%2010.95%2018%2010.55%2018H9.25L8.75%2016.8C8.51667%2016.25%208.15%2015.8125%207.65%2015.4875C7.15%2015.1625%206.6%2015%206%2015C5.16667%2015%204.45833%2015.2875%203.875%2015.8625C3.29167%2016.4375%203%2017.15%203%2018C3%2018.8333%203.29167%2019.5417%203.875%2020.125C4.45833%2020.7083%205.16667%2021%206%2021ZM6%2023C4.61667%2023%203.4375%2022.5125%202.4625%2021.5375C1.4875%2020.5625%201%2019.3833%201%2018C1%2016.6167%201.4875%2015.4375%202.4625%2014.4625C3.4375%2013.4875%204.61667%2013%206%2013C7%2013%207.9125%2013.2708%208.7375%2013.8125C9.5625%2014.3542%2010.175%2015.0833%2010.575%2016C11.525%2016.0333%2012.3333%2016.3875%2013%2017.0625C13.6667%2017.7375%2014%2018.55%2014%2019.5C14%2020.4667%2013.6583%2021.2917%2012.975%2021.975C12.2917%2022.6583%2011.4667%2023%2010.5%2023H6Z'%20fill='white'/%3e%3c/svg%3e";function m(){t.length!==0&&(g.style="display: none");let o=0;for(let e=0;e<t.length;e++)t[e].checked===!0&&++o;M.innerHTML=`You have ${t.length-o} active task(-s) / ${t.length}`}const y=()=>{if(n.value!=""){const o={text:n.value,checked:!1,id:x()};t.push(o),localStorage.setItem("todo",JSON.stringify(t)),u.style.opacity="0.5",g.style="display: none"}else d.style.removeProperty("animation")},x=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),C="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2030%2030'%20width='30px'%20height='30px'%3e%3cg%20id='surface271152487'%3e%3cpath%20style='%20stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;'%20d='M%2013%203%20C%2012.734375%202.996094%2012.472656%203.101562%2012.285156%203.289062%20C%2012.09375%203.476562%2011.988281%203.730469%2011.984375%204%20L%206%204%20C%205.640625%203.996094%205.304688%204.183594%205.121094%204.496094%20C%204.941406%204.808594%204.941406%205.191406%205.121094%205.503906%20C%205.304688%205.816406%205.640625%206.003906%206%206%20L%2024%206%20C%2024.359375%206.003906%2024.695312%205.816406%2024.878906%205.503906%20C%2025.058594%205.191406%2025.058594%204.808594%2024.878906%204.496094%20C%2024.695312%204.183594%2024.359375%203.996094%2024%204%20L%2018.015625%204%20C%2018.011719%203.730469%2017.90625%203.476562%2017.714844%203.289062%20C%2017.527344%203.101562%2017.265625%202.996094%2017%203%20Z%20M%206%208%20L%206%2024%20C%206%2025.105469%206.894531%2026%208%2026%20L%2022%2026%20C%2023.105469%2026%2024%2025.105469%2024%2024%20L%2024%208%20Z%20M%206%208%20'/%3e%3c/g%3e%3c/svg%3e",f=()=>{let o="";t.forEach((e,i)=>{e.checked==!0?o+=`
            <li class="todo__item checked" id="${e.id}">
                <label>
                    <input type="checkbox" class="input-checkbox" checked id="${i}"></input>
                    <p class="text">${e.text}</p><span class="delete" data-action="delete"><img data-action="delete" src=${C} alt="delete"></span>
                </label>
            </li>
            `:o+=`
            <li class="todo__item" id="${e.id}">
                <label>
                    <input type="checkbox" class="input-checkbox" id="${i}"></input>
                    <p class="text">${e.text}</p><span class="delete" data-action="delete"><img data-action="delete" src=${C} alt="delete"></span>
                </label>
            </li>
            `,c.innerHTML=o,n.value=""})},w=o=>{if(o.target.type!=="checkbox")return 0;const e=o.target.closest(".todo__item");e.classList.toggle("checked");for(let i=0;i<t.length;i++)t[i].id==e.id&&(t[i].checked===!1?(t[i].checked=!0,localStorage.setItem("todo",JSON.stringify(t))):(t[i].checked=!1,localStorage.setItem("todo",JSON.stringify(t))))},k=o=>{if(o.target.dataset.action!=="delete")return 0;const e=o.target.closest(".todo__item"),i=e.id,r=t.findIndex(s=>s.id===i);e.style.animation="0.5s fade-out forwards",t.splice(r,1),e.remove(),localStorage.setItem("todo",JSON.stringify(t)),t.length==0&&(g.style="display: block")},b=()=>{c.style.animation="1s fade-out forwards",c.innerHTML="",t.length=0,g.style="display: block",c.removeAttribute("style")},a=document.querySelector(".body"),S=document.querySelector(".header__theme"),p=document.querySelector("#theme-icon"),n=document.querySelector(".todo__input"),u=document.querySelector(".todo__btn"),_=document.querySelector(".todo__input-field"),g=document.querySelector(".todo__list-plug"),c=document.querySelector(".todo__list"),q=document.querySelector(".todo__delete-btn"),M=document.querySelector(".todo__tracker"),d=document.createElement("p");let t=[];localStorage.getItem("todo")!=null&&(t=JSON.parse(localStorage.getItem("todo")),f(),m());localStorage.getItem("theme")==="dark"&&(a.classList.add("dark-theme"),p.src=`${v}`);window.onload=function(){const o=()=>{d.classList.add("warning"),d.innerHTML="This field cannot be empty",d.style.removeProperty("animation"),_.appendChild(d),u.style.opacity="0.5",a.classList.contains("dark-theme")&&(n.style.border="1px solid #8E49EB"),a.classList.contains("dark-theme")||(n.style.border="1px solid #00B86A")};n.oninput=()=>{n.value===""?(a.classList.contains("dark-theme")&&(o(),n.style.border="1px solid #8E49EB"),a.classList.contains("dark-theme")||(o(),n.style.border="1px solid #00B86A")):(u.style.opacity="1",n.style.border="1px solid rgba(0, 0, 0, 0.27)",d.style.animation="1s fade-out forwards")},S.onclick=()=>{a.classList.toggle("dark-theme"),n.style.border="1px solid rgba(0, 0, 0, 0.27)",d.style.animation="1s fade-out forwards",a.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),p.src=`${v}`):(localStorage.setItem("theme","light"),p.src=`${L}`)},u.onclick=()=>{n.value===""&&o(),y(),f(),m()},q.onclick=()=>{b(),m(),localStorage.removeItem("todo")};const e=r=>{r.keyCode===13&&(y(),f(),m())};function i(r){if(r.target.dataset.action!=="delete")return 0;c.addEventListener("click",k),m()}c.addEventListener("click",w),c.addEventListener("click",k),c.addEventListener("click",m),c.addEventListener("click",i),n.addEventListener("keydown",e)};
