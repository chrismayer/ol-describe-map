import{H as s,j as r,M as c,T as d,O as g,V as p,d as m}from"./index-rtHF9Jzw.js";/* empty css               */import{D as l}from"./DragRotateAndZoom-r2JVVunD.js";s.registerLanguage("json",r);const a=new c({layers:[new d({source:new g})],target:"map",view:new p({center:[0,0],zoom:2,rotation:.08})});a.addInteraction(new l);const n=document.getElementById("map-description"),w=document.getElementById("raw-description"),i=document.getElementById("speak"),o=async()=>{const e=await m(a),t=s.highlight(JSON.stringify(e,void 0,"  "),{language:"json"}).value;n.innerHTML=e.text,w.innerHTML=t,a.getTargetElement().setAttribute("aria-description",e.text),i.disabled=e.text===""};a.on("moveend",o);o();i&&i.addEventListener("click",()=>{const e=n==null?void 0:n.innerHTML;if(e){var t=new SpeechSynthesisUtterance;t.text=e,window.speechSynthesis.speak(t)}});
