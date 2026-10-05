/*
  ==========================================================
  MUDAH MENAMBAH ARTIKEL / PERJALANAN
  ==========================================================
  Copy satu object untuk menambah item baru.
  Urutan array = urutan tampilan dari atas ke bawah.
*/
const articles = [
  {
    year: "2024",
    title: "Mulai tertarik dengan dunia komputer",
    content: "Pada September 2024, saya mulai tertarik dengan dunia komputer.saya memulai dari bahasa pemrogram HTML dan CSS kemudia lanjut ke Javascript"
  },
  {
    year: "2025",
    title: "Mengembangkan keterampilan pemrograman",
    content: "Pada tahun 2025, saya terus mengembangkan keterampilan di bidang pemrograman. Saya rutin membeli buku tambahan jika menemukan topik yang belum dikuasai. Saya juga mulai mempelajari GitHub, termasuk cara mempublikasikan website menggunakan platform tersebut."
  },
  {
    year: "2026",
    title: "Mulai mengeksplorasi desain grafis",
    content: "Pada tahun 2026, saya mulai belajar dan membuat desain poster menggunakan Canvadan figma`. Saya terus mengembangkan keterampilan di bidang desain grafis dan semakin tertarik pada dunia desain. Saya juga merencanakan untuk membuka jasa desain grafis pada Mei 2026."
  },
  {
    year : "2027"
  }
];

const timeline = document.querySelector("#timeline");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.innerHTML = isOpen
    ? '<i class="ph ph-x"></i>'
    : '<i class="ph ph-list"></i>';
});

timeline.innerHTML = articles.map((article, index) => `
  <article class="timeline-item reveal" style="transition-delay:${index * 100}ms">
    <span class="timeline-dot" aria-hidden="true"></span>
    <div class="timeline-card">
      <span class="timeline-year">${article.year}</span>
      <h2>${article.title}</h2>
      <p>${article.content}</p>
    </div>
  </article>
`).join("");

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
