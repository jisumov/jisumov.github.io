document.addEventListener('DOMContentLoaded', function () {
    const origin = location.origin;
    document.querySelectorAll('a[href]').forEach(a => {
        try {
            const href = new URL(a.href, location.href);
            if (href.origin !== origin) {
                a.setAttribute('target', '_blank');
                a.setAttribute('rel', 'noopener noreferrer');
            }
        } catch (e) { }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("image-popup-overlay");
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});