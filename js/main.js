// 대구미래교육 콘퍼런스 DEPTH 소개 페이지 — 메뉴, 이미지 확대, 영상 목록
(function () {
  // 모바일 메뉴 펼침
  var btn = document.querySelector('.menu-btn'), nav = document.querySelector('.gnb');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
  }

  // 이미지 확대 레이어
  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', '이미지 크게 보기');
  lb.innerHTML = '<span class="cap"></span><button class="x" type="button" aria-label="닫기">' +
    '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button><img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('.cap'), lbX = lb.querySelector('.x'), last = null;
  function openLb(src, alt, from) {
    last = from || null;
    lbImg.src = src; lbImg.alt = alt || ''; lbCap.textContent = alt || '';
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; lbX.focus();
  }
  function closeLb() {
    lb.classList.remove('open'); document.body.style.overflow = ''; lbImg.removeAttribute('src');
    if (last) last.focus();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-zoom]');
    if (t) { e.preventDefault(); openLb(t.getAttribute('data-zoom'), t.getAttribute('data-cap'), t); return; }
    if (e.target === lb || e.target.closest('.lb .x')) closeLb();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLb();
  });

  // 영상 목록: 고른 영상의 제목·설명으로 바꾸기 (영상 파일 연결 전 단계)
  var list = document.querySelector('.vlist');
  if (list) {
    var title = document.getElementById('v-title'), desc = document.getElementById('v-desc'),
        label = document.getElementById('v-label'), link = document.getElementById('v-link');
    list.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      list.querySelectorAll('button').forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        x.querySelector('small').textContent = x === b ? '재생 중' : x.getAttribute('data-len');
      });
      title.textContent = b.getAttribute('data-title');
      desc.textContent = b.getAttribute('data-desc');
      label.textContent = b.getAttribute('data-title') + ' · 최종본 삽입 예정';
      var href = b.getAttribute('data-href');
      link.hidden = !href; if (href) link.setAttribute('href', href);
    });
  }
})();
