import{l as y,r as g,H as b,j as T,M as x,T as S,O as M,V as j,t as $,d as E}from"./index-rtHF9Jzw.js";/* empty css               */import{D as L}from"./DragRotateAndZoom-r2JVVunD.js";const s=async(t=0,e=0,n=0)=>{let a=null;const o=await(await fetch("https://nominatim.terrestris.de/reverse.php"+"?"+new URLSearchParams({lon:`${g(t,5)}`,lat:`${g(e,5)}`,zoom:`${Math.round(n)}`,format:"jsonv2"}))).json();return o.error||(a=o.display_name),a},I=async t=>{var u,f;const{zoom:e=0}=t,n=((u=t==null?void 0:t.epsg4326)==null?void 0:u.center)||[0,0],a=((f=t==null?void 0:t.epsg4326)==null?void 0:f.bbox)||[0,0,0,0],r=[];let i=await s(n[0],n[1],e),o=await s(a[0],a[1],e),l=await s(a[0],a[3],e),m=await s(a[2],a[3],e),h=await s(a[2],a[1],e);return i&&r.push(`The map is centered at ${i}.`),o&&r.push(`The lower left of the visible map extent is at ${o}.`),l&&r.push(`In the upper left corner of the visible extent, ${l} is located.`),m&&r.push(`${m} is in the upper right corner of the map.`),h&&r.push(`The lower right corner of the map shows ${h}.`),(i||o||l||m||h)&&r.push("Place determination uses a Nominatim service from terrestris – https://nominatim.terrestris.de/ –, based on data from the OpenStreetMap project, © OpenStreetMap contributors."),r.join(" ")},H=async(t,e)=>{let n=[];return t!==void 0&&n.push(await I(t)),e!==void 0&&n.push(...y(e)),n.join("")};b.registerLanguage("json",T);const c=new x({layers:[new S({source:new M})],target:"map",view:new j({center:$([7,51],"EPSG:4326","EPSG:3857"),zoom:10})});c.addInteraction(new L);const p=document.getElementById("map-description"),O=document.getElementById("raw-description"),d=document.getElementById("speak"),w=async()=>{const t=await E(c,{textualDescriber:H}),e=b.highlight(JSON.stringify(t,void 0,"  "),{language:"json"}).value;p.innerHTML=t.text,O.innerHTML=e,c.getTargetElement().setAttribute("aria-description",t.text),d.disabled=t.text===""};c.on("moveend",w);w();d&&d.addEventListener("click",()=>{const t=p==null?void 0:p.innerHTML;if(t){var e=new SpeechSynthesisUtterance;e.text=t,window.speechSynthesis.speak(e)}});
