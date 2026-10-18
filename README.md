# Kinetik: paparan untuk pimpinan

Deck Slidev (Bahasa Indonesia, 16:9, 24 slide) tentang Kinetik untuk Kepala BPS Provinsi Sulawesi Tengah.

Penyaji: Sukma Nirmala Dewi, S.Tr.Stat.
Pranata Komputer Ahli Pertama, Tim Metodologi dan Teknologi Informasi (MTI), BPS Provinsi Sulawesi Tengah.
NIP 200001142022012003.

## Perintah

```bash
pnpm install
pnpm dev                 # pratinjau di http://localhost:3030, tekan "o" untuk mode presenter
pnpm build               # situs statis di dist/
pnpm export              # PDF
pnpm export:png          # PNG per slide di exports/ (tambahkan --with-clicks untuk tiap klik)
```

Ekspor memerlukan browser Playwright. Bila belum ada: `pnpm exec playwright install chromium`.

## Catatan

- Catatan penyaji (Bahasa Indonesia) ada di komentar HTML di akhir setiap slide pada `slides.md`.
- Slide beranimasi: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15 (klik). Animasi pemindahan pekerjaan ada di slide 6.
- `pnpm-workspace.yaml` menyematkan `markdown-it` ^14 karena Slidev 52 gagal dibangun dengan versi 15.
- Angka dan fakta berasal dari ringkasan status Kinetik per Oktober 2026. Butir yang belum dikerjakan ditandai "rencana".

## Naskah lisan

Setiap slide punya catatan pembicara berupa naskah lisan. Penanda `[click]` menyorot kalimat sesuai klik di tampilan presenter (`pnpm dev`, lalu buka `/presenter`). Pengatur waktu bawaan 20 menit.
