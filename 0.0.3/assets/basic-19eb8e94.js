import{H as i,j as r,M as c,T as d,O as g,V as p,D as m,d as w}from"./index-5c77e257.js";i.registerLanguage("json",r);const s=new c({layers:[new d({source:new g})],target:"map",view:new p({center:[0,0],zoom:2,rotation:.08})});s.addInteraction(new m);const t=document.getElementById("map-description"),h=document.getElementById("raw-description"),a=document.getElementById("speak"),o=async()=>{const e=await w(s),n=i.highlight(JSON.stringify(e,void 0,"  "),{language:"json"}).value;t.innerHTML=e.text,h.innerHTML=n,a.disabled=e.text===""};s.on("moveend",o);o();a&&a.addEventListener("click",()=>{const e=t==null?void 0:t.innerHTML;if(e){var n=new SpeechSynthesisUtterance;n.text=e,window.speechSynthesis.speak(n)}});