(function(){
if(window.__maleoA11y)return;window.__maleoA11y=1;
const G='#c8b07a',D='#05170c',K='maleo-a11y',CK='maleo-cookies';
const st=Object.assign({fs:0,contrast:false,gray:false,links:false,font:false,motion:false},JSON.parse(localStorage.getItem(K)||'{}'));
const css=document.createElement('style');css.id='maleo-a11y-css';document.head.appendChild(css);
function apply(){
  let c='';
  if(st.fs)c+=`html{font-size:${100+st.fs*12}%}body *:not(.ma11y *){zoom:${1+st.fs*.1}}`;
  if(st.contrast)c+=`html{filter:contrast(1.35)}`;
  if(st.gray)c+=`html{filter:grayscale(1)${st.contrast?' contrast(1.35)':''}}`;
  if(st.links)c+=`a:not(.ma11y a){text-decoration:underline!important;text-underline-offset:3px;outline:2px solid ${G}!important;outline-offset:2px}`;
  if(st.font)c+=`body *:not(.ma11y *){font-family:Arial,sans-serif!important;letter-spacing:.02em!important}`;
  if(st.motion)c+=`*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}`;
  css.textContent=c;localStorage.setItem(K,JSON.stringify(st));
  if(st.motion)document.querySelectorAll('video').forEach(v=>v.pause());
  render();
}
const root=document.createElement('div');root.className='ma11y';root.dir='rtl';
root.style.cssText=`position:fixed;right:20px;bottom:20px;z-index:9999;font-family:Heebo,Arial,sans-serif;`;
const btn=document.createElement('button');btn.setAttribute('aria-label','תפריט נגישות');
btn.style.cssText=`width:52px;height:52px;border-radius:50%;background:${D};border:1px solid ${G};color:${G};cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(5,23,12,.25);padding:0;`;
btn.innerHTML=`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="4.2" r="1.6" fill="currentColor" stroke="none"/><path d="M5 8.5c2.3.7 4.6 1 7 1s4.7-.3 7-1M12 9.5v5M12 14.5l-3 6M12 14.5l3 6"/></svg>`;
const panel=document.createElement('div');
panel.style.cssText=`position:absolute;right:0;bottom:64px;width:300px;max-width:calc(100vw - 40px);background:#fff;border:1px solid #e6e8e3;box-shadow:0 18px 50px rgba(5,23,12,.18);display:none;`;
let open=false;btn.onclick=()=>{open=!open;panel.style.display=open?'block':'none';};
const items=[['contrast','ניגודיות גבוהה'],['gray','גווני אפור'],['links','הדגשת קישורים'],['font','פונט קריא'],['motion','עצירת אנימציות']];
function render(){
  panel.innerHTML=`<div style="background:${D};color:#fff;padding:16px 18px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:400;">נגישות</span><button data-x style="background:none;border:0;color:${G};font-size:22px;cursor:pointer;line-height:1;width:32px;height:32px;">×</button></div>
  <div style="padding:16px 18px;display:flex;flex-direction:column;gap:14px;">
   <div style="display:flex;justify-content:space-between;align-items:center;font-size:14px;color:${D};"><span>גודל טקסט</span><div style="display:flex;gap:6px;">
    <button data-fs="-1" style="${sq()}">א-</button><button data-fs="1" style="${sq()}">א+</button></div></div>
   <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
    ${items.map(([k,l])=>`<button data-k="${k}" style="min-height:52px;padding:8px;border:1px solid ${st[k]?D:'#d6dad2'};background:${st[k]?D:'#fff'};color:${st[k]?'#fff':D};font:inherit;font-size:13px;cursor:pointer;">${l}</button>`).join('')}
    <button data-reset style="min-height:52px;padding:8px;border:1px solid ${G};background:#fff;color:#8a7445;font:inherit;font-size:13px;cursor:pointer;">איפוס</button>
   </div>
   <a href="Maleo%20Accessibility.dc.html" style="font-size:13px;color:#8a7445;text-decoration:underline;">הצהרת נגישות</a>
  </div>`;
  panel.querySelector('[data-x]').onclick=()=>{open=false;panel.style.display='none';};
  panel.querySelectorAll('[data-fs]').forEach(b=>b.onclick=()=>{st.fs=Math.max(0,Math.min(3,st.fs+ +b.dataset.fs));apply();});
  panel.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{st[b.dataset.k]=!st[b.dataset.k];apply();});
  panel.querySelector('[data-reset]').onclick=()=>{Object.assign(st,{fs:0,contrast:false,gray:false,links:false,font:false,motion:false});apply();};
}
function sq(){return `width:44px;height:36px;border:1px solid #d6dad2;background:#fff;color:${D};font:inherit;font-size:14px;cursor:pointer;`;}
root.append(panel,btn);
function cookie(){
  if(localStorage.getItem(CK))return;
  const c=document.createElement('div');c.className='ma11y';c.dir='rtl';c.setAttribute('role','dialog');c.setAttribute('aria-label','הודעת עוגיות');
  c.style.cssText=`position:fixed;left:20px;bottom:20px;z-index:9998;width:320px;max-width:calc(100vw - 96px);background:${D};color:#fff;padding:22px 22px 20px;font-family:Heebo,Arial,sans-serif;box-shadow:0 18px 50px rgba(0,0,0,.28);border-top:2px solid ${G};opacity:0;transform:translateY(12px);transition:opacity .4s,transform .4s;`;
  c.innerHTML=`<div style="display:flex;flex-direction:column;gap:12px;">
   <span style="font-size:11px;letter-spacing:.3em;color:${G};direction:ltr;text-align:right;">COOKIES</span>
   <span style="font-size:19px;font-weight:300;line-height:1.3;">גם אנחנו אוהבים עוגיות</span>
   <p style="margin:0;font-size:14px;line-height:1.6;color:#c9d3c6;">האתר משתמש בעוגיות כדי לשפר את חוויית הגלישה ולמדוד שימוש. <a href="Maleo%20Privacy.dc.html" style="color:${G};text-decoration:underline;">מדיניות פרטיות</a></p>
   <div style="display:flex;gap:8px;margin-top:4px;">
    <button data-ok style="flex:1;min-height:44px;background:${G};color:${D};border:0;font:inherit;font-size:14px;cursor:pointer;">אישור</button>
    <button data-min style="flex:1;min-height:44px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);font:inherit;font-size:14px;cursor:pointer;">רק הכרחיות</button>
   </div></div>`;
  const close=v=>{localStorage.setItem(CK,v);c.style.opacity='0';c.style.transform='translateY(12px)';setTimeout(()=>c.remove(),400);};
  c.querySelector('[data-ok]').onclick=()=>close('all');c.querySelector('[data-min]').onclick=()=>close('essential');
  document.body.appendChild(c);setTimeout(()=>{c.style.opacity='1';c.style.transform='none';},600);
}
function mount(){document.body.appendChild(root);apply();cookie();
  const hush=()=>document.querySelectorAll('video,audio').forEach(m=>{m.muted=true;m.defaultMuted=true;m.volume=0;});
  hush();document.addEventListener('play',hush,true);new MutationObserver(hush).observe(document.body,{childList:true,subtree:true});}
document.body?mount():addEventListener('DOMContentLoaded',mount);
})();
