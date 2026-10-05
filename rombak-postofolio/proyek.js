/*
  ==========================================================
  MUDAH MENAMBAH KARYA
  ==========================================================
  Cukup copy satu object di bawah, lalu ubah:
  - title       : nama proyek
  - category    : kategori/teknologi
  - description : deskripsi singkat
  - url         : link website/proyek
  Tidak perlu membuat ulang HTML card.
*/
const projects = [
  {
    title: "Ilmu-Informatika",
    category: "Web Development",
    description: "Website pertama yang saya publikasikan.(sedang dalam pengembangan)",
    url: "https://wildanys.github.io/Ilmu-Informatika/"
  },
  {
    title: "Mixue",
    category: "Web Development",
    description: "Website yang membahas Mixue, termasuk menu dan informasi mengenai perkembangan bisnisnya.",
    url: "https://wildanys.github.io/mixue2026/?"
  },
  {
    title: "Kedai Deli",
    category: "Business Website",
    description: "Website untuk usaha milik sepupu yang menampilkan daftar menu dan lokasi Kedai Deli di Cilegon, Banten.",
    url: "https://wildanys.github.io/Kedai-Deli/"
  }
];

const grid = document.querySelector("#project-grid");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const lightbox = document.querySelector("#poster-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
let lastFocusedElement;

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.innerHTML = isOpen
    ? '<i class="ph ph-x"></i>'
    : '<i class="ph ph-list"></i>';
});

grid.innerHTML = projects.map((project, index) => `
  <article class="project-card reveal" style="transition-delay:${index * 90}ms">
    <div>
      <span class="project-number">0${index + 1} / PROJECT</span>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
    <div class="project-meta">
      <span class="project-tag">${project.category}</span>
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener" aria-label="Buka ${project.title}">
        <i class="ph ph-arrow-up-right"></i>
      </a>
    </div>
  </article>
`).join("");

const openLightbox = (image) => {
  lastFocusedElement = document.activeElement;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lastFocusedElement?.focus();
};

document.querySelectorAll(".poster-preview-item").forEach(item => {
  item.addEventListener("click", () => openLightbox(item.querySelector("img")));
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("open")) closeLightbox();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => { window.location.href = link.href; }, 260);
  });
});
