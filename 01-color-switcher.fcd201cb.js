const t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyElement:document.body},{startButton:e,stopButton:o,bodyElement:n}=t;let a=null;function d(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=t}e.addEventListener("click",(()=>{e.disabled=!0,a=setInterval((()=>{d()}),1e3)})),o.addEventListener("click",(()=>{e.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.fcd201cb.js.map
