!function(){var o=document.querySelector("form.form");function n(o,n){return new Promise((function(e,t){var c=Math.random()>.3;setTimeout((function(){c&&e({position:o,delay:n}),t({position:o,delay:n})}),n)}))}o.addEventListener("submit",(function(e){e.preventDefault();for(var t=0;t<o.amount.value;t+=1)n(t,+o.delay.value+ +o.step.value*t).then((function(o){var n=o.position,e=o.delay;console.log("%c✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"),"background-color: lightgreen")})).catch((function(o){var n=o.position,e=o.delay;console.log("%c❌ Rejected promise ".concat(n," in ").concat(e,"ms"),"background-color: #eb8c86")}))}))}();
//# sourceMappingURL=03-promises.2624ea95.js.map