# Portfolio Modern — WildanYS

## Struktur
- `index.html` + `index.css` + `indeks.js` → halaman Tentang Saya
- `proyek.html` + `proyek.css` + `proyek.js` → halaman Proyek/Karya
- `artikel.html` + `artikel.css` + `artikel.js` → halaman Artikel/Perjalanan
- `img/logo.webp` → tetap gunakan folder gambar dari project lama

## Cara menambah proyek
Buka `proyek.js`, cari `const projects = [...]`, lalu tambahkan object:
{
  title: "Nama Proyek",
  category: "Web Development",
  description: "Deskripsi singkat...",
  url: "https://contoh.com/"
}

## Cara menambah artikel
Buka `artikel.js`, cari `const articles = [...]`, lalu tambahkan object:
{
  year: "2027",
  title: "Judul artikel",
  content: "Isi artikel..."
}

HTML card/timeline tidak perlu dibuat manual lagi.
