var r=document.documentElement,dk=matchMedia("(prefers-color-scheme:dark)").matches;
document.getElementById("mode").onclick=function(){dk=!dk;r.setAttribute("data-theme",dk?"dark":"light")};
var links=[].slice.call(document.querySelectorAll("#idx a"));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");var id=e.target.id;if(id)links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+id)})}})},{threshold:.3});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
function hh(){document.documentElement.style.setProperty("--hh",document.querySelector("header").offsetHeight+"px")}
hh();addEventListener("resize",hh);addEventListener("load",hh);
