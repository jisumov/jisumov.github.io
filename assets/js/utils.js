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

document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const headings = [...document.querySelectorAll(".post-content h2, .post-content h3")];
  const hierarchy = [];
  let currentParent = null;

  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.toLowerCase().replace(/[^\w]+/g, "-");
    }
    if (h.tagName === "H2") {
      currentParent = h;
      hierarchy.push({ heading: h, parent: null });
    } else if (h.tagName === "H3" && currentParent) {
      hierarchy.push({ heading: h, parent: currentParent });
    }
  });

  hierarchy.forEach(item => {
    const li = document.createElement("li");
    li.classList.add(item.heading.tagName.toLowerCase());
    const a = document.createElement("a");
    a.href = `#${item.heading.id}`;
    a.textContent = item.heading.textContent;
    li.appendChild(a);
    toc.appendChild(li);
  });

  const links = [...document.querySelectorAll("#post-menu a")];

  const clearStates = () => {
    links.forEach(l => {
      l.parentElement.classList.remove("active", "clicked");
    });
  };

  const activateLink = id => {
    links.forEach(link => {
      if (link.getAttribute("href") === `#${id}`) {
        link.parentElement.classList.add("active");
      }
    });
  };

  const scrollToHeading = (element) => {
    if (!element) return;
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - headerHeight - 10,
      behavior: "smooth"
    });
  };

  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      clearStates();
      link.parentElement.classList.add("clicked");

      if (index === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.getElementById(link.getAttribute("href").substring(1));
        scrollToHeading(target);
      }
    });
  });

  const activateOnScroll = () => {
    const triggerY = window.innerHeight * 0.3;
    let currentItem = null;

    for (let i = 0; i < hierarchy.length; i++) {
      const item = hierarchy[i];
      const next = hierarchy[i + 1];
      const top = item.heading.getBoundingClientRect().top;
      const nextTop = next ? next.heading.getBoundingClientRect().top : Infinity;

      if (top <= triggerY && nextTop > triggerY) {
        currentItem = item;
        break;
      }
    }

    if (!currentItem) return;

    clearStates();
    activateLink(currentItem.heading.id);
    if (currentItem.parent) {
      activateLink(currentItem.parent.id);
    }
  };

  window.addEventListener("scroll", activateOnScroll, { passive: true });
  activateOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const leftMenu = document.getElementById("left-menu");

  const siteSections = [
    { title: "Home", href: "/" },
    {
      title: "Projects", href: "/#projects", subsections: [
        { title: "40:2 Labs", href: "/projects/40-2-labs" },
        { title: "Diggy Diggy SOC", href: "/projects/diggy-diggy-soc" },
        { title: "KQLhauled", href: "/projects/kqlhauled" }
      ]
    }
  ];

  const ul = document.createElement("ul");
  ul.classList.add("left-menu-list");

  siteSections.forEach(section => {
    const li = document.createElement("li");
    li.classList.add("section");
    const a = document.createElement("a");
    a.href = section.href;
    a.textContent = section.title;
    li.appendChild(a);

    if (section.subsections && section.subsections.length) {
      const subUl = document.createElement("ul");
      subUl.classList.add("subsection-list");
      section.subsections.forEach(sub => {
        const subLi = document.createElement("li");
        subLi.classList.add("subsection");
        const subA = document.createElement("a");
        subA.href = sub.href;
        subA.textContent = sub.title;
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  leftMenu.appendChild(ul);

  const highlightCurrentPage = () => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const fullURL = currentPath + currentHash;

    leftMenu.querySelectorAll("li").forEach(item => {
      item.classList.remove("active-left", "clicked-left");
    });

    let matchFound = false;
    const allLinks = Array.from(leftMenu.querySelectorAll("a"));
    allLinks.sort((a, b) => b.getAttribute("href").length - a.getAttribute("href").length);

    for (const link of allLinks) {
      const href = link.getAttribute("href");
      if (href === fullURL || href === currentPath) {
        link.parentElement.classList.add("active-left");
        matchFound = true;
        break;
      }
      const cleanHref = href.replace(/^\//, "").replace(/#.*$/, "");
      const cleanPath = currentPath.replace(/^\//, "");
      if (cleanHref && cleanPath.includes(cleanHref)) {
        link.parentElement.classList.add("active-left");
        matchFound = true;
        break;
      }
    }

    if (!matchFound && currentPath === "/" && !currentHash) {
      leftMenu.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === "/") {
          link.parentElement.classList.add("active-left");
        }
      });
    }
  };

  highlightCurrentPage();
  window.addEventListener("hashchange", highlightCurrentPage);
  window.addEventListener("popstate", highlightCurrentPage);
});