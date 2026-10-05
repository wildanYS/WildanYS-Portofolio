const posters = [
  { file: "A4 - 1.png", title: "A4 Poster 01" },
  { file: "A4 - 2.png", title: "A4 Poster 02" },
  { file: "A4 - 4.png", title: "A4 Poster 04" },
  { file: "Adidas-vintage.png", title: "Adidas Vintage" },
  { file: "baguette.png", title: "Baguette" },
  { file: "Caffe ekspreso vintage (1).png", title: "Caffe Espresso Vintage" },
  { file: "Caffe Vinatage.png", title: "Caffe Vintage" },
  { file: "Instagram post - 1.png", title: "Instagram Post 01" },
  { file: "Instagram post - 3.png", title: "Instagram Post 03" },
  { file: "KARYA-poster4.png", title: "Karya Poster 04" },
  { file: "korean spicy chicken.png", title: "Korean Spicy Chicken" },
  { file: "Poster Tenis (1).png", title: "Poster Tenis" },
  { file: "SAMSUNG BUDS 4 PRO.png", title: "Samsung Buds 4 Pro" },
  { file: "Screenshot 2026-10-05 161040.png", title: "Karya Poster" }
];

const gallery = document.querySelector("#poster-gallery");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.innerHTML = isOpen
    ? '<i class="ph ph-x"></i>'
    : '<i class="ph ph-list"></i>';
});

gallery.innerHTML = posters.map((poster, index) => `
  <button class="poster-card reveal" type="button" style="transition-delay:${Math.min(index * 55, 330)}ms" aria-label="Perbesar ${poster.title}">
    <img src="Poster/${poster.file}" alt="${poster.title}" loading="lazy">
    <span>${poster.title}</span>
  </button>
`).join("");

const lightbox = document.querySelector("#poster-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
let lastFocusedElement;

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

gallery?.addEventListener("click", (event) => {
  const card = event.target.closest(".poster-card");
  if (card) openLightbox(card.querySelector("img"));
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
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => { window.location.href = link.href; }, 260);
  });
});
