const PRO_KEY = "ebike_pro_unlocked";
const VALID_CODE = "PRO2026";
const ABBR = {AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District of Columbia",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};
const stateData = {
  "Alabama": { system:"3-tier", class3:true, paths:"Yes", helmet:"All ages (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 allowed on paths. Helmet required for Class 3 all ages." },
  "Alaska": { system:"Custom", class3:true, paths:"No", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"No statewide 3-class system. Local rules dominate." },
  "Arizona": { system:"3-tier", class3:true, paths:"No (local option)", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"All three classes generally treated as bicycles." },
  "Arkansas": { system:"3-tier", class3:true, paths:"No", helmet:"Under 21 (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 restricted from many bike paths." },
  "California": { system:"3-tier", class3:true, paths:"Yes (with limits)", helmet:"All ages (Class 3) + under 18 any class", age:"16 (Class 3)", license:"No", reg:"No", notes:"UL 2849 battery certification required. Strong local variation (e.g., SF)." },
  "Colorado": { system:"3-tier", class3:true, paths:"No (Class 3)", helmet:"Under 18 (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 1 & 2 on paths unless prohibited; Class 3 primarily roads/bike lanes." },
  "Connecticut": { system:"3-tier", class3:true, paths:"No", helmet:"All ages (all classes)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Helmets for every rider, every age, every class." },
  "Delaware": { system:"3-tier", class3:true, paths:"Yes", helmet:"All ages (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 allowed on paths in many cases." },
  "District of Columbia": { system:"Custom", class3:false, paths:"No", helmet:"Under 16", age:"16", license:"No", reg:"No", notes:"No Class 3 category." },
  "Florida": { system:"3-tier", class3:true, paths:"Yes", helmet:"Under 16", age:"None statewide", license:"No", reg:"No", notes:"Relatively permissive. Local ordinances still apply." },
  "Georgia": { system:"3-tier", class3:true, paths:"No", helmet:"All ages (Class 3)", age:"15 (Class 3)", license:"No", reg:"No", notes:"Class 3 restricted from many paths." },
  "Hawaii": { system:"3-tier", class3:true, paths:"No", helmet:"Under 18", age:"16 (Class 3)", license:"No", reg:"Yes ($30 one-time)", notes:"Registration required. Act 259 (2026) formalized classes." },
  "Idaho": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"15 (Class 3)", license:"No", reg:"No", notes:"Relatively open path access." },
  "Illinois": { system:"3-tier", class3:true, paths:"No", helmet:"Not required", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 primarily for roads." },
  "Indiana": { system:"3-tier", class3:true, paths:"No", helmet:"Under 18 (Class 3)", age:"15 (Class 3)", license:"No", reg:"No", notes:"Class 3 path access limited." },
  "Iowa": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"16 (Class 3)", license:"No", reg:"No", notes:"Good path access for Class 3." },
  "Kansas": { system:"3-tier", class3:true, paths:"No", helmet:"All ages (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Helmet required for Class 3 all ages." },
  "Kentucky": { system:"Custom", class3:false, paths:"No", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"No statewide 3-class system." },
  "Louisiana": { system:"3-tier", class3:true, paths:"Yes", helmet:"All ages (Class 3)", age:"12 (Class 3)", license:"No", reg:"No", notes:"Lowest Class 3 minimum age among states that set one." },
  "Maine": { system:"3-tier", class3:true, paths:"No", helmet:"Under 16", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 restricted from many paths." },
  "Maryland": { system:"3-tier", class3:true, paths:"No", helmet:"Under 16", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 on highways has age restriction." },
  "Massachusetts": { system:"Custom", class3:false, paths:"No", helmet:"Under 16", age:"16", license:"No", reg:"No", notes:"Recognizes Class 1 & 2; no Class 3 category currently." },
  "Michigan": { system:"3-tier", class3:true, paths:"No", helmet:"Under 18 (Class 3)", age:"14 (Class 3)", license:"No", reg:"No", notes:"Lower Class 3 age threshold than many states." },
  "Minnesota": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"15 (Class 3)", license:"No", reg:"No", notes:"Class 3 allowed on many paths." },
  "Mississippi": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"16 (Class 3)", license:"No", reg:"No", notes:"Relatively open." },
  "Missouri": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"16 (Class 3)", license:"No", reg:"No", notes:"Path access available for Class 3." },
  "Montana": { system:"Custom", class3:false, paths:"No", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"No statewide 3-class framework." },
  "Nebraska": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"Permissive statewide rules." },
  "Nevada": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"Permissive. Local rules still matter in urban areas." },
  "New Hampshire": { system:"3-tier", class3:true, paths:"No", helmet:"Under 18 (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 path restrictions common." },
  "New Jersey": { system:"Custom (2026)", class3:true, paths:"No", helmet:"All ages", age:"15", license:"Yes", reg:"Yes", notes:"Registration with MVC + license required as of July 2026." },
  "New Mexico": { system:"3-tier", class3:true, paths:"No", helmet:"Under 18 (Class 3)", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 path access limited." },
  "New York": { system:"3-tier", class3:true, paths:"Limited", helmet:"Class 3 + some ages", age:"16 (Class 3)", license:"No", reg:"No", notes:"Class 3 capped at 25 mph. NYC caps all e-bikes at 15 mph on city streets." },
  "North Carolina": { system:"Custom", class3:false, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Historically no Class 3; check current statute." },
  "North Dakota": { system:"3-tier", class3:true, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Confirm with state DOT." },
  "Ohio": { system:"3-tier", class3:true, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"3-class system; path access often local." },
  "Oklahoma": { system:"3-tier", class3:true, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Confirm local path and park rules." },
  "Oregon": { system:"3-tier", class3:true, paths:"Limited (Class 3)", helmet:"Varies", age:"16 (Class 2/3)", license:"No", reg:"No", notes:"Allows up to 1,000 W in some cases." },
  "Pennsylvania": { system:"Custom", class3:false, paths:"No", helmet:"Varies", age:"16", license:"Possible", reg:"Possible", notes:"No standard Class 3." },
  "Rhode Island": { system:"3-tier", class3:true, paths:"Varies", helmet:"Under 21 on e-bikes", age:"Varies", license:"No", reg:"No", notes:"Helmet age higher for e-bikes than regular bikes." },
  "South Carolina": { system:"Custom", class3:false, paths:"No", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"No statewide 3-class system." },
  "South Dakota": { system:"3-tier", class3:true, paths:"Varies", helmet:"Not required", age:"Varies", license:"No", reg:"No", notes:"Generally permissive." },
  "Tennessee": { system:"3-tier", class3:true, paths:"Local authority expanded 2026", helmet:"Varies", age:"16 (Class 3)", license:"No", reg:"No", notes:"Cities gained broader authority to restrict e-bikes on greenways (2026)." },
  "Texas": { system:"3-tier", class3:true, paths:"Limited (Class 3)", helmet:"Under 18", age:"15 (Class 3)", license:"No", reg:"No", notes:"Class 3 restricted to roads and bike lanes in many contexts." },
  "Utah": { system:"3-tier", class3:true, paths:"Local option", helmet:"Under 21 (roads)", age:"Detailed tiers", license:"No", reg:"No", notes:"Helmet rule expanded 2026. Age tiers for younger riders." },
  "Vermont": { system:"3-tier", class3:true, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Confirm path rules locally." },
  "Virginia": { system:"3-tier", class3:true, paths:"Yes (default)", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Defaults to allowing e-bikes where bicycles are allowed." },
  "Washington": { system:"3-tier", class3:true, paths:"Limited (Class 3)", helmet:"Under 16", age:"None statewide for Class 1/2", license:"No", reg:"No", notes:"Class 3 restricted from many separated paths." },
  "West Virginia": { system:"3-tier", class3:true, paths:"Varies", helmet:"Varies", age:"Varies", license:"No", reg:"No", notes:"Confirm current class and helmet rules." },
  "Wisconsin": { system:"3-tier", class3:true, paths:"Varies", helmet:"Not required statewide", age:"Varies", license:"No", reg:"No", notes:"Local path rules important." },
  "Wyoming": { system:"3-tier", class3:true, paths:"Yes", helmet:"Not required", age:"None", license:"No", reg:"No", notes:"Among the most permissive statewide frameworks." }
};
function isPro(){ return localStorage.getItem(PRO_KEY)==="1"; }
function applyTier(){
  const pro=isPro();
  document.body.classList.toggle("is-pro", pro);
  document.getElementById("appHeader").classList.toggle("pro-active", pro);
  document.getElementById("tierBadge").textContent = pro ? "PRO" : "FREE";
  if(selectedAbbr) pinState(selectedAbbr, false);
}
function openUpgradeModal(){ document.getElementById("upgradeModal").classList.add("open"); }
function closeUpgradeModal(){ document.getElementById("upgradeModal").classList.remove("open"); }
function tryUnlock(){
  const code=(document.getElementById("unlockCode").value||"").trim().toUpperCase();
  if(code===VALID_CODE){ localStorage.setItem(PRO_KEY,"1"); applyTier(); closeUpgradeModal(); }
  else alert("Invalid code. Demo code is PRO2026");
}
function resetToFree(){ localStorage.removeItem(PRO_KEY); applyTier(); }
function dataForAbbr(abbr){
  const name=ABBR[abbr];
  return name ? {name, abbr, ...stateData[name]} : null;
}
function chips(d){
  return `<div class="chips"><span class="chip neu">${d.system}</span><span class="chip ${d.class3?"ok":"no"}">${d.class3?"Class 3 legal":"No Class 3 / custom"}</span><span class="chip ${d.license==="Yes"||(d.license||"").includes("Possible")?"warn":"ok"}">${d.license==="Yes"?"License required":"No license"}</span><span class="chip ${(d.reg||"").startsWith("Yes")||(d.reg||"").includes("Possible")?"warn":"ok"}">${(d.reg||"").startsWith("Yes")?"Registration required":"No registration"}</span></div>`;
}
function tooltipHTML(d){
  return `<h3>${d.name}</h3>${chips(d)}<div class="tip-row"><div><strong>Paths (Class 3)</strong>${d.paths}</div><div><strong>Helmet</strong>${d.helmet}</div><div><strong>Min age</strong>${d.age}</div><div><strong>License / Reg</strong>${d.license} / ${d.reg}</div></div><div class="tip-foot">${isPro()?d.notes:"Click the state to pin details. Full notes are a Pro feature."}</div>`;
}
function panelHTML(d){
  const notes = isPro()
    ? `<div class="info-item" style="margin-top:1rem;border-left-color:#f59e0b"><strong>Notes & local considerations</strong><span>${d.notes}</span></div>`
    : `<div style="position:relative;margin-top:1rem"><div class="info-item locked"><strong>Notes</strong><span>${d.notes}</span></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;background:rgba(255,255,255,.72)"><strong style="color:var(--pro-dark)">Detailed notes are Pro</strong><button class="btn-pro" onclick="openUpgradeModal()">Unlock Pro</button></div></div>`;
  return `${chips(d)}<div class="detail-grid"><div class="info-item"><strong>Class 3 on bike paths</strong><span>${d.paths}</span></div><div class="info-item"><strong>Helmet</strong><span>${d.helmet}</span></div><div class="info-item"><strong>Minimum age (Class 3)</strong><span>${d.age}</span></div><div class="info-item"><strong>License / registration</strong><span>License: ${d.license} · Reg: ${d.reg}</span></div></div>${notes}`;
}
let selectedAbbr=null, scale=1, tx=0, ty=0, dragging=false, lastX=0, lastY=0;
function applyTransform(){ document.getElementById("mapInner").style.transform = `translate(${tx}px,${ty}px) scale(${scale})`; }
function zoomBy(f){ scale=Math.min(4, Math.max(.7, scale*f)); applyTransform(); }
function resetView(){ scale=1; tx=0; ty=0; applyTransform(); }
function category(d){
  if(d.license==="Yes" || (d.reg||"").startsWith("Yes")) return "strict";
  if(!d.class3 || (d.system||"").toLowerCase().includes("custom")) return "custom";
  return "tier3";
}
function stateClassFromEl(el){
  const cls=(el.getAttribute("class")||"").split(/\s+/);
  return cls.find(c=>c.length===2 && ABBR[c.toUpperCase()]) || null;
}
function colorize(){
  const mode=document.getElementById("filterMode").value;
  const q=(document.getElementById("stateSearch").value||"").trim().toLowerCase();
  document.querySelectorAll("#mapInner svg path, #mapInner svg circle").forEach(el=>{
    const code=stateClassFromEl(el);
    if(!code){ el.classList.add("border-line"); el.style.opacity=""; return; }
    const d=dataForAbbr(code.toUpperCase());
    if(!d) return;
    el.classList.add("state-hit", category(d));
    el.setAttribute("data-abbr", code.toUpperCase());
    const match = !q || d.name.toLowerCase().includes(q) || code.toLowerCase()===q;
    const cat=category(d);
    const pass = mode==="all" || (mode==="tier3"&&cat==="tier3") || (mode==="custom"&&cat==="custom") || (mode==="strict"&&cat==="strict");
    el.style.opacity = (match && pass) ? "1" : ".18";
    el.style.pointerEvents = (match && pass) ? "auto" : "none";
  });
}
function showTip(abbr, ev){
  const d=dataForAbbr(abbr); if(!d) return;
  const tip=document.getElementById("tooltip");
  tip.innerHTML=tooltipHTML(d);
  tip.classList.add("visible");
  moveTip(ev);
}
function hideTip(){ document.getElementById("tooltip").classList.remove("visible"); }
function moveTip(ev){
  const tip=document.getElementById("tooltip");
  const x=Math.min(window.innerWidth-tip.offsetWidth-12, ev.clientX+14);
  const y=Math.min(window.innerHeight-tip.offsetHeight-12, ev.clientY+14);
  tip.style.left=Math.max(8,x)+"px";
  tip.style.top=Math.max(8,y)+"px";
}
function pinState(abbr, scroll){
  const d=dataForAbbr(abbr); if(!d) return;
  selectedAbbr=abbr;
  document.querySelectorAll("#mapInner svg .selected").forEach(n=>n.classList.remove("selected"));
  document.querySelectorAll("#mapInner svg [data-abbr=\""+abbr+"\"]").forEach(n=>n.classList.add("selected"));
  document.getElementById("pinnedTitle").textContent = d.name + " e-bike rules";
  document.getElementById("pinnedHint").style.display="none";
  document.getElementById("stateInfo").innerHTML=panelHTML(d);
  if(scroll) document.getElementById("pinnedCard").scrollIntoView({behavior:"smooth", block:"nearest"});
}
async function loadMap(){
  const sources=["https://upload.wikimedia.org/wikipedia/commons/1/1a/Blank_US_Map_%28states_only%29.svg","us-map.svg"];
  let svg="";
  for (const url of sources){
    try { const res=await fetch(url); if(res.ok){ svg=await res.text(); break; } } catch(e){}
  }
  if(!svg){ document.getElementById("mapInner").innerHTML="<p style='padding:1rem'>Could not load the U.S. map.</p>"; return; }
  document.getElementById("mapInner").innerHTML=svg;
  const svgEl=document.querySelector("#mapInner svg");
  if(svgEl){
    svgEl.removeAttribute("width"); svgEl.removeAttribute("height");
    svgEl.setAttribute("viewBox", svgEl.getAttribute("viewBox") || "0 0 959 593");
    svgEl.querySelectorAll("style, defs").forEach(n=>n.remove());
  }
  colorize();
  const host=document.getElementById("mapHost");
  host.addEventListener("mousedown", e=>{ dragging=true; lastX=e.clientX; lastY=e.clientY; });
  window.addEventListener("mouseup", ()=>dragging=false);
  window.addEventListener("mousemove", e=>{
    if(dragging){ tx+=e.clientX-lastX; ty+=e.clientY-lastY; lastX=e.clientX; lastY=e.clientY; applyTransform(); }
  });
  host.addEventListener("wheel", e=>{ e.preventDefault(); zoomBy(e.deltaY<0?1.12:1/1.12); }, {passive:false});
  document.getElementById("mapInner").addEventListener("pointerover", e=>{
    const abbr=e.target.getAttribute && e.target.getAttribute("data-abbr");
    if(!abbr) return; showTip(abbr, e);
  });
  document.getElementById("mapInner").addEventListener("pointermove", e=>{
    if(document.getElementById("tooltip").classList.contains("visible")) moveTip(e);
  });
  document.getElementById("mapInner").addEventListener("pointerleave", hideTip);
  document.getElementById("mapInner").addEventListener("click", e=>{
    const abbr=e.target.getAttribute && e.target.getAttribute("data-abbr");
    if(abbr) pinState(abbr, true);
  });
}
document.getElementById("stateSearch").addEventListener("input", colorize);
document.getElementById("filterMode").addEventListener("change", colorize);
document.getElementById("upgradeModal").addEventListener("click", e=>{ if(e.target.id==="upgradeModal") closeUpgradeModal(); });
applyTier();
loadMap();
