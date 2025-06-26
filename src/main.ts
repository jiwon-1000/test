// main.ts - 이미지 갤러리 렌더링

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400"
];

const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    <h1>이미지 갤러리</h1>
    <div class="gallery">
      ${images.map(src => `<img src="${src}" alt="gallery image" />`).join("")}
    </div>
  `;
}
