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

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".popup-img");
  let popupOpen = false;
  images.forEach(img => {
    img.addEventListener("click", () => {
      if (popupOpen) return;
      const overlay = document.createElement("div");
      overlay.classList.add("image-popup-overlay");
      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.alt = img.alt || "";
      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);
      popupOpen = true;
      document.body.classList.add("no-scroll");
      overlay.addEventListener("click", () => {
        overlay.remove();
        popupOpen = false;
        document.body.classList.remove("no-scroll");
      });
    });
  });
});