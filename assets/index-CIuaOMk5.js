(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e8eaed'%3e%3cpath%20d='M440-760v-160h80v160h-80Zm266%20110-55-55%20112-115%2056%2057-113%20113Zm54%20210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652%20140-763l57-56%20113%20113-56%2054Zm508%20512L651-255l54-54%20114%20110-57%2059ZM40-440v-80h160v80H40Zm157%20300-56-57%20112-112%2029%2027%2029%2028-114%20114Zm283-100q-100%200-170-70t-70-170q0-100%2070-170t170-70q100%200%20170%2070t70%20170q0%20100-70%20170t-170%2070Zm0-80q66%200%20113-47t47-113q0-66-47-113t-113-47q-66%200-113%2047t-47%20113q0%2066%2047%20113t113%2047Zm0-160Z'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.1%2023H10.5L11%2022.6875C11.3333%2022.4792%2011.6958%2022.2458%2012.0875%2021.9875C12.4792%2021.7292%2012.8417%2021.4958%2013.175%2021.2875L13.675%2020.975C15.025%2020.875%2016.2708%2020.4667%2017.4125%2019.75C18.5542%2019.0333%2019.4583%2018.075%2020.125%2016.875C18.6917%2016.7417%2017.3333%2016.3792%2016.05%2015.7875C14.7667%2015.1958%2013.6167%2014.3917%2012.6%2013.375C11.5833%2012.3583%2010.775%2011.2083%2010.175%209.925C9.575%208.64167%209.21667%207.28333%209.1%205.85C7.81667%206.56667%206.8125%207.55417%206.0875%208.8125C5.3625%2010.0708%205%2011.4333%205%2012.9V13.2L4.7%2013.3375C4.5%2013.4292%204.27917%2013.525%204.0375%2013.625C3.79583%2013.725%203.575%2013.8208%203.375%2013.9125L3.075%2014.05C3.04167%2013.8667%203.02083%2013.675%203.0125%2013.475C3.00417%2013.275%203%2013.0833%203%2012.9C3%2010.4667%203.775%208.32083%205.325%206.4625C6.875%204.60417%208.85%203.45%2011.25%203C10.95%204.65%2011.0417%206.2625%2011.525%207.8375C12.0083%209.4125%2012.8417%2010.7917%2014.025%2011.975C15.2083%2013.1583%2016.5875%2013.9917%2018.1625%2014.475C19.7375%2014.9583%2021.35%2015.05%2023%2014.75C22.5667%2017.15%2021.4167%2019.125%2019.55%2020.675C17.6833%2022.225%2015.5333%2023%2013.1%2023ZM6%2021H10.5C10.9167%2021%2011.2708%2020.8542%2011.5625%2020.5625C11.8542%2020.2708%2012%2019.9167%2012%2019.5C12%2019.0833%2011.8583%2018.7292%2011.575%2018.4375C11.2917%2018.1458%2010.95%2018%2010.55%2018H9.25L8.75%2016.8C8.51667%2016.25%208.15%2015.8125%207.65%2015.4875C7.15%2015.1625%206.6%2015%206%2015C5.16667%2015%204.45833%2015.2875%203.875%2015.8625C3.29167%2016.4375%203%2017.15%203%2018C3%2018.8333%203.29167%2019.5417%203.875%2020.125C4.45833%2020.7083%205.16667%2021%206%2021ZM6%2023C4.61667%2023%203.4375%2022.5125%202.4625%2021.5375C1.4875%2020.5625%201%2019.3833%201%2018C1%2016.6167%201.4875%2015.4375%202.4625%2014.4625C3.4375%2013.4875%204.61667%2013%206%2013C7%2013%207.9125%2013.2708%208.7375%2013.8125C9.5625%2014.3542%2010.175%2015.0833%2010.575%2016C11.525%2016.0333%2012.3333%2016.3875%2013%2017.0625C13.6667%2017.7375%2014%2018.55%2014%2019.5C14%2020.4667%2013.6583%2021.2917%2012.975%2021.975C12.2917%2022.6583%2011.4667%2023%2010.5%2023H6Z'%20fill='white'/%3e%3c/svg%3e";function d(){t.length!==0&&(l.style="display: none"),a.innerHTML.trim()===""&&(l.style="display: block");let n=0;for(let s=0;s<t.length;s++)t[s].checked===!0&&++n;_.innerHTML=`You have ${t.length-n} active task(-s) / ${t.length}`}const L=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),k=()=>{if(c.value!=""){const n={text:c.value,checked:!1,id:L()};t.push(n),localStorage.setItem("todo",JSON.stringify(t)),g.style.opacity="0.5",l.style="display: none"}else u.style.removeProperty("animation")},b="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2030%2030'%20width='30px'%20height='30px'%3e%3cg%20id='surface271152487'%3e%3cpath%20style='%20stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25)%20;fill-opacity:1;'%20d='M%2013%203%20C%2012.734375%202.996094%2012.472656%203.101562%2012.285156%203.289062%20C%2012.09375%203.476562%2011.988281%203.730469%2011.984375%204%20L%206%204%20C%205.640625%203.996094%205.304688%204.183594%205.121094%204.496094%20C%204.941406%204.808594%204.941406%205.191406%205.121094%205.503906%20C%205.304688%205.816406%205.640625%206.003906%206%206%20L%2024%206%20C%2024.359375%206.003906%2024.695312%205.816406%2024.878906%205.503906%20C%2025.058594%205.191406%2025.058594%204.808594%2024.878906%204.496094%20C%2024.695312%204.183594%2024.359375%203.996094%2024%204%20L%2018.015625%204%20C%2018.011719%203.730469%2017.90625%203.476562%2017.714844%203.289062%20C%2017.527344%203.101562%2017.265625%202.996094%2017%203%20Z%20M%206%208%20L%206%2024%20C%206%2025.105469%206.894531%2026%208%2026%20L%2022%2026%20C%2023.105469%2026%2024%2025.105469%2024%2024%20L%2024%208%20Z%20M%206%208%20'/%3e%3c/g%3e%3c/svg%3e",h=(n="allTasks")=>{let s="";t.forEach((o,r)=>{let e=!1;switch(n){case"allTasks":e=!0;break;case"activeTasks":e=!o.checked,l.innerHTML="You don't have active tasks, let's<br> create the first one";break;case"completedTasks":e=o.checked,l.innerHTML="You don't have completed tasks, let's<br> finish the first one";break;default:return}if(e){const i=o.checked?"checked":"";s+=`
            <li class="todo__item ${o.checked?"checked":""}" id="${o.id}">
            <label>
                <input type="checkbox" class="input-checkbox" ${i} id="${r}"></input>
                <p class="text">${o.text}</p><span class="delete" data-action="delete"><img data-action="delete" src=${b} alt="delete"></span>
            </label>
            </li>
            `}}),a.innerHTML=s,c.value=""},T=n=>{if(n.target.type!=="checkbox")return 0;const s=n.target.closest(".todo__item");s.classList.toggle("checked");for(let o=0;o<t.length;o++)t[o].id==s.id&&(t[o].checked===!1?(t[o].checked=!0,localStorage.setItem("todo",JSON.stringify(t))):(t[o].checked=!1,localStorage.setItem("todo",JSON.stringify(t))))},y=n=>{if(n.target.dataset.action!=="delete")return 0;const s=n.target.closest(".todo__item"),o=s.id,r=t.findIndex(e=>e.id===o);s.style.animation="0.5s fade-out forwards",t.splice(r,1),s.remove(),localStorage.setItem("todo",JSON.stringify(t)),t.length==0&&(l.style="display: block")},w=()=>{a.style.animation="1s fade-out forwards",a.innerHTML="",t.length=0,l.style="display: block",a.removeAttribute("style")},m=document.querySelector(".body"),x=document.querySelector(".header__theme"),p=document.querySelector("#theme-icon"),c=document.querySelector(".todo__input"),g=document.querySelector(".todo__btn"),S=document.querySelector(".todo__input-field"),l=document.querySelector(".todo__list-plug"),a=document.querySelector(".todo__list"),M=document.querySelector(".todo__delete-btn"),_=document.querySelector(".todo__tracker"),u=document.createElement("p"),q=document.getElementById("allTasks"),E=document.getElementById("activeTasks"),I=document.getElementById("completedTasks");let t=[];localStorage.getItem("todo")!=null&&(t=JSON.parse(localStorage.getItem("todo")),h(),d());localStorage.getItem("theme")==="dark"&&(m.classList.add("dark-theme"),p.src=`${v}`);window.onload=function(){const n=()=>{u.classList.add("warning"),u.innerHTML="This field cannot be empty",u.style.removeProperty("animation"),S.appendChild(u),g.style.opacity="0.5",m.classList.contains("dark-theme")&&(c.style.border="1px solid #8E49EB"),m.classList.contains("dark-theme")||(c.style.border="1px solid #00B86A")};c.oninput=()=>{c.value===""?(m.classList.contains("dark-theme")&&(n(),c.style.border="1px solid #8E49EB"),m.classList.contains("dark-theme")||(n(),c.style.border="1px solid #00B86A")):(g.style.opacity="1",c.style.border="1px solid rgba(0, 0, 0, 0.27)",u.style.animation="1s fade-out forwards")},x.onclick=()=>{m.classList.toggle("dark-theme"),c.style.border="1px solid rgba(0, 0, 0, 0.27)",u.style.animation="1s fade-out forwards",m.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),p.src=`${v}`):(localStorage.setItem("theme","light"),p.src=`${C}`)},g.onclick=()=>{c.value===""&&n(),k(),h(),d()},M.onclick=()=>{w(),d(),localStorage.removeItem("todo")};const s=r=>{r.keyCode===13&&(k(),h(),d())};function o(r){if(r.target.dataset.action!=="delete")return 0;a.addEventListener("click",y),d()}a.addEventListener("click",T),a.addEventListener("click",y),a.addEventListener("click",d),a.addEventListener("click",o),c.addEventListener("keydown",s),q.addEventListener("click",()=>{h("allTasks"),l.innerHTML="You don't have tasks, let's<br> create the first one",d()}),E.addEventListener("click",()=>{h("activeTasks"),l.innerHTML="You don't have active tasks, let's<br> create the first one",d()}),I.addEventListener("click",()=>{h("completedTasks"),l.innerHTML="You don't have completed tasks, let's<br> finish the first one",d()})};
