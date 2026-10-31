(function(){
var chips=[].slice.call(document.querySelectorAll(".chip")),dept=document.getElementById("dept"),h1=dept.parentNode,wrap=document.querySelector(".fanwrap"),fanEl=document.getElementById("fan"),def=dept.textContent,act=-2;
function lock(){var t=dept.textContent;dept.textContent=def;h1.style.minHeight="";h1.style.minHeight=h1.offsetHeight+"px";dept.textContent=t}
function set(a){if(a===act)return;act=a;chips.forEach(function(c,i){c.style.setProperty("--s",a>-1?(i<a?-9:i>a?9:0):0);c.style.setProperty("--ly",a===i?"-60px":"0px");c.style.zIndex=a===i?10:""});dept.textContent=a>-1?chips[a].dataset.n:def}
function pick(e){var p=fanEl.getBoundingClientRect(),dx=e.clientX-p.left,dy=p.top-e.clientY,d=Math.sqrt(dx*dx+dy*dy);if(dy<=0||d>chips[0].offsetHeight+60)return -1;var i=Math.round(Math.atan2(dx,dy)*180/Math.PI/17)+2;return i>=0&&i<chips.length?i:-1}
wrap.addEventListener("pointermove",function(e){set(pick(e))});
wrap.addEventListener("pointerdown",function(e){set(pick(e))});
wrap.addEventListener("pointerleave",function(){set(-1)});
lock();addEventListener("resize",lock);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(lock);
set(-1);
})();
