!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){r.style.backgroundColor=o(),timerId=setInterval((function(){r.style.backgroundColor=o()}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(timerId),t.removeAttribute("disabled"),e.setAttribute("disabled","")})),e.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.13dd7175.js.map
