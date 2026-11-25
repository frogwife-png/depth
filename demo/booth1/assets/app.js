/* DEPTH 부스 체험용 공통 스크립트 — 화면 틀, 저장, 안내, 운영자 초기화 */
(function(){
const P={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 13 2 2 4-4"/>',
 monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m9 10 2 2 4-4"/>',
 pen:'<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
 file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
 bar:'<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V9M16 16v-6"/>',
 db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><path d="M12 17h.01"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
 bell:'<path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 21h4"/>',
 wrench:'<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/>',
 chevD:'<path d="m6 9 6 6 6-6"/>', chevU:'<path d="m6 15 6-6 6 6"/>', chevR:'<path d="m9 6 6 6-6 6"/>', chevL:'<path d="m15 6-6 6 6 6"/>',
 logout:'<path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4"/><path d="m15 8 4 4-4 4M19 12H9"/>',
 panel:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16"/>',
 sparkle:'<path d="M10 4c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5C7.7 9.9 9.4 8.2 10 4z"/><path d="M18 3c.2 1.4.8 2 2.2 2.2-1.4.2-2 .8-2.2 2.2-.2-1.4-.8-2-2.2-2.2 1.4-.2 2-.8 2.2-2.2z"/>',
 save:'<path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M8 3v5h7V3M8 21v-7h8v7"/>',
 check:'<path d="m5 12 5 5 9-10"/>', x:'<path d="M6 6l12 12M18 6 6 18"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 arrowL:'<path d="M19 12H5M11 6l-6 6 6 6"/>', arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 list:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 shuffle:'<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4"/><path d="m18 4 3 3-3 3M18 14l3 3-3 3"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 msg:'<path d="M4 5h16v11H9l-5 4z"/>',
 hl:'<path d="m9 11 6-6 4 4-6 6"/><path d="M9 11 5 15v4h4l4-4"/><path d="M3 21h8"/>',
 underline:'<path d="M7 4v6a5 5 0 0 0 10 0V4"/><path d="M5 20h14"/>',
 eraser:'<path d="m7 21-4-4L14 6l6 6-8 9z"/><path d="M7 21h13"/>',
 hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5a6 6 0 0 1-5-2.7L3 15.5a1.5 1.5 0 0 1 2.4-1.8L8 16"/>',
 undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>', redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h3"/>',
 book:'<path d="M3 5a2 2 0 0 1 2-2h5v17H5a2 2 0 0 0-2 2z"/><path d="M21 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z"/>',
 zin:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6M11 8v6"/>', zout:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6"/>',
 fit:'<path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
 expand:'<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/>',
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>', lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', reset:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 plus:'<path d="M12 5v14M5 12h14"/>', send:'<path d="m4 12 16-8-6 16-2-6z"/><path d="m12 14 8-10"/>',
 qmark:'<path d="M9 9a3 3 0 1 1 4 2.8c-.6.3-1 .9-1 1.6V15"/><path d="M12 19h.01"/>', hash:'<path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"/>',
 cbox:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/>', trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 swap:'<path d="M7 7h13l-3-3M17 17H4l3 3"/>'
};
const icon=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24">${P[n]||''}</svg>`;

const MENU=[
 ['현황','grid'],
 ['평가 관리','clip',['평가 목록','교육청 평가 등록']],
 ['평가시행','monitor',['시행관리','시행 목록','학생 제출 관리']],
 ['채점관리','pen',['채점현황','채점목록']],
 ['평가 결과','file',['평가 결과 목록']],
 ['리포트·현황','bar',['통계 산출','리포트 보관함','성적표·통계']],
 ['참고자료','db',['분류게시판','기출문항게시판']],
 ['이용안내','help',['공지사항','FAQ','매뉴얼']],
 ['커뮤니티','users',['자료공유','커뮤니티 게시판','서비스 요청 접수']],
 ['알림센터','bell'],
 ['운영관리','wrench',['운영 지원']]
];
const STUDENT_MENU=[['현황','grid'],['내 평가','clip',['응시할 평가','제출한 평가']],['평가 결과','file',['내 평가 결과']],['이용안내','help',['공지사항','FAQ']],['알림센터','bell']];

const K={};
let cfg, state, timerIv, coachTarget=null, coachRaf=0;

function load(){try{return JSON.parse(localStorage.getItem(cfg.key)||'null')}catch(e){return null}}
function save(){try{localStorage.setItem(cfg.key,JSON.stringify(state))}catch(e){}}

function sidebarHTML(menu,openName,activeName){
 return `<div class="sb-logo"><img src="assets/logo.svg" alt="DEPTH 대구형평가플랫폼"><button class="sb-toggle" data-blocked="메뉴 접기">${icon('panel','sm')}</button></div>
 <nav class="sb-nav">${menu.map(([name,ic,subs])=>{
   const open=name===openName;
   return `<div class="sb-item ${open?'open':''}"><button class="sb-main" data-blocked="${name}">${icon(ic)}<span>${name}</span>${subs?icon(open?'chevU':'chevD','chev'):''}</button>${open&&subs?`<div class="sb-sub">${subs.map(s=>`<button class="sb-sublink ${s===activeName?'active':''}" data-blocked="${s}">${s}${s==='교육청 평가 등록'?'<span class="sb-badge">1</span>':''}</button>`).join('')}</div>`:''}</div>`}).join('')}</nav>
 <div class="sb-foot"><span class="theme">${icon('sun','sm')}</span><span>테마 선택</span></div>`;
}
function headerHTML(crumb,user){
 return `<div class="crumb">${icon('home','sm')}${crumb.map((c,i)=>`${icon('chevR','sep')}${i===crumb.length-1?`<b>${c}</b>`:`<span>${c}</span>`}`).join('')}</div>
 <div class="hdr-right"><span class="demo-tag">시연용 화면 · 가명 데이터</span>
 <button class="bell" data-blocked="알림">${icon('bell')}<span class="cnt">${user.bell||'27'}</span></button>
 <div class="user-pill"><b>${user.name}</b><span class="role-chip ${user.student?'student':''}">${user.role}</span>${icon('chevD','sm')}</div>
 <button class="logout" data-blocked="로그아웃">${icon('logout')}</button></div>`;
}
K.setShell=function(o){
 const sb=document.querySelector('.app-sidebar'), hd=document.querySelector('.app-header');
 if(o.sidebar) sb.innerHTML=sidebarHTML(o.sidebar.student?STUDENT_MENU:MENU,o.sidebar.open,o.sidebar.active);
 if(o.crumb||o.user) hd.innerHTML=headerHTML(o.crumb||cfg.crumb,o.user||cfg.user);
};

K.toast=function(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2200)};

/* 안내 띠 */
function renderGuide(){
 const g=document.querySelector('.guide'); if(!g) return;
 const n=cfg.steps.length, s=Math.min(state.step,n-1), st=cfg.steps[s];
 const done=state.finished;
 g.innerHTML=`<div class="badge">${cfg.letter}</div>
 <div class="txt"><div class="k">${cfg.boothName} · ${done?'완료':`${s+1} / ${n}`}</div>
 <div class="t">${done?'모든 단계를 마쳤습니다. 화면을 자유롭게 살펴보세요':`${st.input?'<em>직접 입력해 보세요</em>':''}${st.text}`}</div></div>
 <div class="dots">${cfg.steps.map((_,i)=>`<i class="${(i<state.step||done)?'on':''}"></i>`).join('')}</div>
 <div class="principle">AI가 돕고, 교사가 판단합니다</div>
 <div class="timer">${icon('clock','xs')} <span id="tmr">5:00</span></div>`;
 tick();
}
function tick(){
 const el=document.getElementById('tmr'); if(!el||!state.startedAt) return;
 const left=300-Math.floor((Date.now()-state.startedAt)/1000);
 const a=Math.abs(left); el.textContent=(left<0?'+':'')+Math.floor(a/60)+':'+String(a%60).padStart(2,'0');
 el.parentElement.style.background=left<0?'rgba(232,53,43,.55)':left<60?'rgba(0,0,0,.3)':'';
}

/* 코치 표시 */
function placeCoach(){
 const ring=document.querySelector('.coach-ring'), tip=document.querySelector('.coach-tip');
 const el=coachTarget&&document.querySelector(coachTarget);
 if(!el||state.finished||!state.started||el.offsetParent===null){ring.style.display='none';tip.style.display='none';coachRaf=requestAnimationFrame(placeCoach);return}
 const r=el.getBoundingClientRect(), pad=6;
 ring.style.display='block';
 Object.assign(ring.style,{left:r.left-pad+'px',top:r.top-pad+'px',width:r.width+pad*2+'px',height:r.height+pad*2+'px'});
 const st=cfg.steps[state.step]; tip.textContent=(st&&st.tip)||'';
 tip.style.display=tip.textContent?'block':'none';
 const tw=tip.offsetWidth, below=r.top<150;
 tip.classList.toggle('below',below);
 let left=Math.min(Math.max(r.left,12),innerWidth-tw-12);
 tip.style.left=left+'px'; tip.style.top=(below?r.bottom+14:r.top-tip.offsetHeight-14)+'px';
 coachRaf=requestAnimationFrame(placeCoach);
}
K.coach=function(sel,scroll=true){coachTarget=sel; if(scroll&&sel){const el=document.querySelector(sel); if(el) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),60)}};

K.step=function(n){ if(n>state.step){state.step=n; save();} renderGuide(); const st=cfg.steps[state.step]; K.coach(st?st.target:null, true); };
K.finish=function(delay){state.finished=true; save(); renderGuide(); K.coach(null); if(delay!==false) setTimeout(showFinish,delay||cfg.finishDelay||900)};
K.showFinish=()=>showFinish();
function showFinish(){
 const c=document.querySelector('.cover'); c.classList.remove('hidden');
 c.innerHTML=`<div class="cover-card"><img src="assets/${cfg.img}" alt="디피 ${cfg.letter}">
 <div><div class="bk"><b>${cfg.letter}</b>${cfg.boothName}</div><h1>${cfg.finishTitle}</h1><p>${cfg.finishDesc}</p>
 <ol><li><span>✓</span>리플릿에 디피 ${cfg.letter} 스티커를 받아 가세요</li>${cfg.next?`<li><span>→</span>다음 부스: ${cfg.next}</li>`:''}</ol>
 <button class="go" id="seeResult">${icon('eye')} 내 화면 다시 보기</button></div></div>`;
 document.getElementById('seeResult').onclick=()=>c.classList.add('hidden');
}
function showStart(){
 const c=document.querySelector('.cover'); c.classList.remove('hidden');
 c.innerHTML=`<div class="cover-card"><img src="assets/${cfg.img}" alt="디피 ${cfg.letter}">
 <div><div class="bk"><b>${cfg.letter}</b>${cfg.boothName}</div><h1>${cfg.startTitle}</h1><p>${cfg.startDesc}</p>
 <ol>${cfg.steps.map((s,i)=>`<li><span>${i+1}</span>${s.short}</li>`).join('')}</ol>
 <button class="go" id="goStart">시작하기 ${icon('arrowR')}</button>
 <div class="note">아래쪽 안내 띠와 깜빡이는 표시를 따라가면 됩니다 · 시연용 화면이며 실제 플랫폼에 저장되지 않습니다</div></div></div>`;
 document.getElementById('goStart').onclick=()=>{state.started=true;state.startedAt=Date.now();save();c.classList.add('hidden');renderGuide();K.coach(cfg.steps[state.step].target)};
}

/* 운영자 초기화: 오른쪽 아래 버튼 1.2초 길게 누르기 또는 Ctrl+Alt+R */
function setupReset(){
 const b=document.createElement('button'); b.className='op-reset'; b.title='운영자 초기화(길게 누르기)'; b.innerHTML='<span class="fill"></span>'+icon('reset','sm'); document.body.appendChild(b);
 const m=document.createElement('div'); m.className='op-modal'; m.innerHTML=`<div class="card"><h4>다음 체험자를 위해 초기화할까요?</h4><p>이 부스에서 입력한 내용이 모두 지워지고 시작 화면으로 돌아갑니다.</p><div class="row"><button class="btn" id="opNo">취소</button><button class="btn red" id="opYes">${icon('reset','sm')} 초기화</button></div></div>`; document.body.appendChild(m);
 let h; const start=e=>{e.preventDefault();b.classList.add('hold');h=setTimeout(()=>{b.classList.remove('hold');m.classList.add('show')},1200)}, stop=()=>{b.classList.remove('hold');clearTimeout(h)};
 b.addEventListener('pointerdown',start);['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,stop));
 document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.altKey&&(e.key==='r'||e.key==='R'||e.code==='KeyR')){e.preventDefault();m.classList.add('show')}});
 m.querySelector('#opNo').onclick=()=>m.classList.remove('show');
 m.querySelector('#opYes').onclick=()=>{K.reset()};
}
K.reset=function(){try{Object.keys(localStorage).filter(k=>k.startsWith(cfg.key)).forEach(k=>localStorage.removeItem(k))}catch(e){} location.reload()};

K.init=function(c){
 cfg=c;
 const def={step:0,started:false,startedAt:0,finished:false,data:JSON.parse(JSON.stringify(c.defaults||{}))};
 state=Object.assign(def,load()||{});
 document.documentElement.style.setProperty('--bc',c.color);
 if(c.noShell) document.body.classList.add('no-shell'); else document.body.insertAdjacentHTML('afterbegin',`<aside class="app-sidebar"></aside><header class="app-header"></header>`);
 document.body.insertAdjacentHTML('beforeend',`<div class="guide"></div><div class="coach-ring"></div><div class="coach-tip"></div><div class="cover hidden"></div>`);
 if(!c.noShell) K.setShell({sidebar:c.sidebar,crumb:c.crumb,user:c.user});
 document.addEventListener('click',e=>{const t=e.target.closest('[data-blocked]'); if(t){e.preventDefault();K.toast(`이 부스에서는 '${c.screenName}' 화면만 다룹니다`)}},true);
 setupReset();
 K.state=state; K.save=save;
 if(c.render) c.render(state);
 renderGuide();
 if(!state.started) showStart(); else if(state.finished) {K.coach(null)} else K.coach(c.steps[state.step].target,false);
 placeCoach();
 timerIv=setInterval(tick,1000);
};
K.icon=icon;
K.esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
K.wait=ms=>new Promise(r=>setTimeout(r,ms));
window.Demo=K;
})();
