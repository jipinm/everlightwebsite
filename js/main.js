var r=document.documentElement,dk=matchMedia("(prefers-color-scheme:dark)").matches;
document.getElementById("mode").onclick=function(){dk=!dk;r.setAttribute("data-theme",dk?"dark":"light")};
var mobileNav=document.querySelector(".mobile-nav");
if(mobileNav){var page=document.body.dataset.p;mobileNav.value=page==="home"?"index.html":page==="404"?"":page+".html";mobileNav.addEventListener("change",function(){if(this.value)location.href=this.value})}
var links=[].slice.call(document.querySelectorAll("#idx a"));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");var id=e.target.id;if(id)links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+id)})}})},{threshold:.3});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
function hh(){document.documentElement.style.setProperty("--hh",document.querySelector("header").offsetHeight+"px")}
hh();addEventListener("resize",hh);addEventListener("load",hh);
