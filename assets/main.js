(function(){
var d=document,root=d.documentElement;
root.classList.add('js');
var BP=900;
function closeDrawer(){root.classList.remove('mob-open');d.body.classList.remove('mob-open');root.style.overflow='';var h=d.getElementById('hamb');if(h)h.setAttribute('aria-expanded','false')}
function openDrawer(){root.classList.add('mob-open');d.body.classList.add('mob-open');root.style.overflow='hidden';var h=d.getElementById('hamb');if(h)h.setAttribute('aria-expanded','true')}
var hb=d.getElementById('hamb');
if(hb){hb.addEventListener('click',function(){d.body.classList.contains('mob-open')?closeDrawer():openDrawer()})}
d.querySelectorAll('[data-close]').forEach(function(el){el.addEventListener('click',closeDrawer)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){closeDrawer();d.querySelectorAll('.has-sub.open').forEach(function(x){x.classList.remove('open')})}});
window.addEventListener('resize',function(){if(window.innerWidth>BP)closeDrawer()});
d.querySelectorAll('.sub-t').forEach(function(b){b.addEventListener('click',function(){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')})});
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var it=q.parentNode;var o=it.classList.toggle('open');q.setAttribute('aria-expanded',o?'true':'false')})});
})();
