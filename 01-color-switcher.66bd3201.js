const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){r.style.backgroundColor=d(),timerId=setInterval((()=>{r.style.backgroundColor=d()}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(timerId),t.removeAttribute("disabled"),e.setAttribute("disabled","")})),e.setAttribute("disabled","");
//# sourceMappingURL=01-color-switcher.66bd3201.js.map
