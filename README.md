# 대구미래교육 콘퍼런스 DEPTH 소개 페이지 (검토용)

Key Message: 평가의 전 과정을 하나의 플랫폼 안으로

## 구성
- `index.html` 행사 소개(첫 화면)
- `story.html` DEPTH 이야기
- `booth1.html` ~ `booth4.html` 부스 안내(깊이 묻다 / 짚다 / 보다 / 잇다)
- `videos.html` 영상, `promo.html` 홍보물, `venue.html` 전시장 안내
- `css/style.css` 화면 스타일(PC·태블릿·모바일 반응형)
- `js/main.js` 모바일 메뉴, 이미지 크게 보기, 영상 목록 전환
- `assets/img` 이미지, `assets/docs` 리플릿 PDF

## 내 컴퓨터에서 보기
`index.html`을 브라우저로 열면 됩니다. 별도 설치가 필요 없습니다.

## GitHub Pages로 임시 서버에 올리기 (git 설치 없이)
1. github.com에서 계정을 만들고 로그인합니다.
2. 오른쪽 위 `+` → `New repository`. 이름(예: `depth-conference`)을 넣고 `Public`을 고른 뒤 `Create repository`.
3. 새 저장소 화면의 `uploading an existing file` 링크를 누릅니다.
4. 이 폴더 **안의 내용 전부**(index.html, css, js, assets 폴더 등)를 끌어다 놓고 `Commit changes`.
5. 저장소 `Settings` → `Pages` → Source `Deploy from a branch`, Branch `main` / `/ (root)` → `Save`.
6. 1~2분 뒤 `https://<계정 아이디>.github.io/<저장소 이름>/` 주소로 접속합니다.

수정본을 올릴 때는 4번을 다시 하면 같은 주소에 반영됩니다.

## 아직 채워지지 않은 내용
- 대괄호 `[ ]` 로 표시된 행사일, 홀 이름, 취지 문안, 문의처, 디피 소개 문안
- 영상 5편(자리만 표시), X배너 디자인 최종본, 최신 배치도
- 검색엔진에 노출되지 않도록 모든 페이지에 `noindex`를 넣었습니다. 정식 공개 때 제거합니다.
