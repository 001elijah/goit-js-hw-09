!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyElement:document.body},n=t.startButton,o=t.stopButton,e=t.bodyElement,a=null;function r(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}n.addEventListener("click",(function(){n.disabled=!0,a=setInterval((function(){r()}),1e3)})),o.addEventListener("click",(function(){n.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.fd1a3226.js.map