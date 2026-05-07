/** @type {import('next').NextConfig} */
// Pacific Vis 2027 — Next.js configuration
// 100% 정적 사이트(Static Site Generation) 전용. SSR/API Routes를 사용하지 않습니다.
const nextConfig = {
  // GitHub Pages 정적 호스팅을 위해 정적 export 활성화
  output: 'export',

  // GitHub Pages에서는 Next.js의 이미지 최적화 서버가 동작하지 않으므로
  // <Image> 사용 시 엑스박스가 뜨는 것을 막기 위해 unoptimized: true 처리.
  // 본 프로젝트에서는 일반 <img> 태그를 우선 사용하되, 이 옵션도 함께 켜둡니다.
  images: {
    unoptimized: true,
  },

  // 정적 export 시 디렉터리 형태(URL 끝 슬래시) 라우팅이 GitHub Pages와 더 잘 맞습니다.
  trailingSlash: true,

  // ──────────────────────────────────────────────────────────────────────────
  // [배포 경로 안내]
  // 만약 사이트가 https://pacificvis.github.io/2027 처럼 하위 경로로 배포된다면
  // 아래 두 옵션의 주석을 해제하여 에셋 경로(/_next, /images 등)가 올바르게
  // 해석되도록 해야 합니다. 루트 도메인(예: https://pacificvis2027.github.io)에
  // 배포된다면 그대로 두셔도 됩니다.
  //
  // basePath: '/2027',
  // assetPrefix: '/2027/',
  // ──────────────────────────────────────────────────────────────────────────
};

export default nextConfig;
