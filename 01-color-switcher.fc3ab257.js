!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){r.style.backgroundColor=n(),o=setInterval((function(){r.style.backgroundColor=n()}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled"),console.log(o)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled","")})),e.setAttribute("disabled","");var o=0;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.fc3ab257.js.map
