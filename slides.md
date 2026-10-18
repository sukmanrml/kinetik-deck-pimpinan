---
theme: default
title: Kinetik - Pemantauan Kinerja Tim
info: Paparan untuk Kepala BPS Provinsi Sulawesi Tengah
colorSchema: light
duration: 20min
timer: stopwatch
aspectRatio: 16/9
transition: fade
author: Sukma Nirmala Dewi, S.Tr.Stat.
fonts:
  provider: none
  sans: Inter
layout: cover
class: cover-blue
---

<img src="/bps-logo.svg" class="logo" alt="BPS Provinsi Sulawesi Tengah" />

# Kinetik

<p style="font-size:1.6rem;margin-top:1.2rem;max-width:36rem">Satu tempat untuk mencatat dan memantau kinerja tim setiap minggu.</p>

<p style="opacity:.8;margin-top:2rem">Paparan untuk Pimpinan · BPS Provinsi Sulawesi Tengah · Oktober 2026</p>

<p style="opacity:.9;margin-top:.8rem;font-size:.9rem;line-height:1.35"><b>Sukma Nirmala Dewi, S.Tr.Stat.</b><br>Pranata Komputer Ahli Pertama, Tim Metodologi dan Teknologi Informasi (MTI)<br>BPS Provinsi Sulawesi Tengah · NIP 200001142022012003</p>

<!--
Selamat pagi, Bapak dan Ibu pimpinan. Terima kasih sudah menyediakan waktu.
Nama saya Sukma Nirmala Dewi, dari Tim Metodologi dan Teknologi Informasi.
Hari ini saya akan menceritakan satu aplikasi yang kami bangun, namanya Kinetik. Tujuannya sederhana: membuat kinerja tim terlihat setiap minggu, tanpa menggantikan kipApp.
Saya mulai dari masalahnya, lalu cara kerja yang baru, apa yang belum ada di kipApp, tantangan yang kami hadapi, dan di akhir tiga hal yang kami minta dari Bapak dan Ibu. Kira-kira dua puluh menit.
-->

---

# Pimpinan belum bisa melihat kinerja tim per minggu

<p class="lead">kipApp mencatat SKP dan kegiatan harian pegawai. Gambaran per tim, per minggu, belum ada.</p>

<div class="grid2 compact">
<div v-click class="card"><b>Tidak terlihat.</b> Siapa yang sudah punya rencana dan siapa yang sudah mencapai, per tim dan per minggu.</div>
<div v-click class="card"><b>Disusun dengan tangan.</b> Bahan Rapat Mingguan, Rapat Bulanan, dan FRA triwulan disusun di Excel, satu lembar per tim, dari salinan kegiatan anggota.</div>
<div v-click class="card"><b>Angka berupa teks.</b> Target dan realisasi diketik sebagai kalimat, sehingga tidak bisa dijumlahkan.</div>
<div v-click class="card warn"><b>Terlambat diketahui.</b> Pegawai yang belum punya rencana baru ketahuan saat rapat.</div>
<div v-click class="card warn" style="grid-column:1 / 3"><b>Menyita waktu PJ.</b> Penanggung jawab tim, yang kami sebut PJ, menulis paragraf rekap setiap minggu.</div>
</div>

<!--
Kita mulai dari masalahnya. kipApp adalah sistem resmi kita untuk SKP dan kegiatan harian. kipApp tidak salah, ia memang dirancang untuk mencatat kegiatan pegawai. Yang belum ada adalah gambaran per tim dan per minggu.
[click] Pertama, hal itu tidak terlihat. Kita tidak bisa langsung tahu siapa yang sudah punya rencana dan siapa yang sudah mencapai, per tim dan per minggu.
[click] Kedua, bahan rapat disusun dengan tangan. Rapat mingguan, rapat bulanan, dan FRA triwulan disusun di Excel, satu lembar per tim, dari salinan kegiatan anggota.
[click] Ketiga, angka target dan realisasi diketik sebagai kalimat, jadi tidak bisa dijumlahkan.
[click] Keempat, terlambat diketahui. Pegawai yang belum punya rencana baru ketahuan saat rapat, padahal saat itu sudah terlambat.
[click] Kelima, ini memakan waktu PJ. Setiap minggu PJ menulis paragraf rekap, dan itu menghabiskan waktu.
-->

---

# Kinetik melengkapi kipApp

<div style="display:flex;align-items:center;gap:.8rem;margin-top:1.2rem">
  <div class="card" style="flex:1;text-align:center;border-left-color:#8a8a8a;background:#f1f1f1"><b style="color:#444">kipApp</b><br><span class="small">Catatan resmi.<br>RK dan kegiatan pegawai.</span></div>
  <div style="flex:1.1;text-align:center;font-size:.85rem;line-height:1.3">
    <div v-click="1" style="color:var(--blue);font-weight:700">Kinetik membaca &rarr;<br><span class="small">RK dan kegiatan anggota</span></div>
    <div v-click="2" style="color:var(--orange);font-weight:700;margin-top:.5rem">&larr; Kinetik mengirim<br><span class="small">kegiatan dan rencana (tahap uji)</span></div>
  </div>
  <div class="card" style="flex:1.3;text-align:center"><b>Kinetik</b><br><span class="small">Satu tempat untuk mencatat<br>dan memantau.</span></div>
  <div v-click="4" style="color:var(--blue);font-weight:700;font-size:1.6rem">&rarr;</div>
  <div v-click="4" class="card warn" style="flex:1;text-align:center"><b>Pimpinan</b><br><span class="small">Tampilan pemantauan</span></div>
</div>

<div v-click="3" style="margin-top:.6rem">
<div class="grid2" style="font-size:.9rem">
<div class="card ok"><b>Yang Kinetik tambahkan</b><br>Rencana mingguan, target dan capaian berupa angka per RK, parafrase PJ per RK, penguncian rekap, dan tampilan pemantauan.</div>
<div class="card"><b>Yang tetap di kipApp</b><br>Catatan resmi pegawai. Kinetik membaca darinya dan mengirim kegiatan kembali ke sana.</div>
</div>
</div>

<!--
Pendekatan kami: Kinetik melengkapi kipApp. Kami tidak membuat sistem tandingan. kipApp tetap catatan resmi.
[click] Kinetik membaca RK dan kegiatan anggota dari kipApp.
[click] Kinetik juga bisa mengirim kegiatan dan rencana kembali ke kipApp, sehingga pegawai cukup mengisi sekali. Bagian mengirim ini masih tahap uji.
[click] Yang Kinetik tambahkan adalah lapisan yang belum ada: rencana mingguan, target dan capaian berupa angka, parafrase PJ untuk setiap RK, penguncian rekap, dan tampilan pemantauan. Catatan resmi tetap di kipApp.
[click] Hasilnya dilihat pimpinan lewat tampilan pemantauan.
-->

---

# Mengapa tidak cukup Excel atau kipApp saja

<table class="cmp four">
<thead><tr><th style="width:26%">Kebutuhan</th><th>Excel</th><th>kipApp saja</th><th>Kinetik</th></tr></thead>
<tbody>
<tr v-click><td>Pegawai mencatat sekali</td><td>Tidak, dicatat dua kali</td><td>Ya</td><td>Ya</td></tr>
<tr v-click><td>Rekap tim per minggu</td><td>Disalin dengan tangan</td><td>Tidak ada</td><td>Otomatis</td></tr>
<tr v-click><td>Target dan capaian bisa dijumlahkan</td><td>Bisa, setelah diketik ulang</td><td>Teks di dalam indikator</td><td>Angka per RK</td></tr>
<tr v-click><td>Peringatan bagi yang belum punya rencana</td><td>Tidak ada</td><td>Tidak ada</td><td>Ada</td></tr>
<tr v-click><td>Catatan resmi SKP</td><td>Bukan</td><td>Ya</td><td>Tetap di kipApp</td></tr>
<tr v-click><td>Rencana ke depan</td><td>Terpisah dari kipApp</td><td>Formulir menolak tanggal ke depan</td><td>Tersimpan di Kinetik dan bisa dikirim ke kipApp</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>kipApp sebenarnya bisa menyimpan rencana ke depan.</b> Server kipApp menerima kegiatan bertanggal ke depan, dan sudah kami uji pada SKP sendiri. Yang menolaknya hanya validasi di formulir kipApp. Kinetik memakai jalur itu.</div>

<!--
Pertanyaan yang wajar: kenapa tidak tetap memakai Excel, atau kenapa tidak kipApp saja?
[click] Pegawai mencatat sekali. Di Excel, pekerjaan dicatat dua kali. Di kipApp dan Kinetik, cukup sekali.
[click] Rekap tim per minggu. Di Excel disalin dengan tangan, di kipApp tidak ada, di Kinetik tersusun otomatis.
[click] Target dan capaian. Di kipApp, angkanya hanya teks di dalam indikator. Di Kinetik, angka per RK sehingga bisa dijumlahkan.
[click] Peringatan bagi yang belum punya rencana. Excel dan kipApp tidak punya. Kinetik punya.
[click] Catatan resmi SKP tetap di kipApp. Excel bukan catatan resmi, dan Kinetik tidak mengambil alih peran itu.
[click] Rencana ke depan. Formulir kipApp menolak tanggal ke depan.
[click] Tetapi ada temuan penting. Server kipApp sebenarnya menerima kegiatan bertanggal ke depan, dan sudah kami uji pada SKP kami sendiri. Yang menolak hanya validasi di formulir. Kinetik memakai jalur itu, jadi rencana mingguan bisa ikut tercatat di kipApp.
-->

---

# Cara lama: Excel dengan tangan

<p class="lead">Satu pekerjaan yang sama dicatat dua kali, lalu disalin berulang.</p>

<div class="flow">
<div v-click class="step old"><span class="n">1</span><b>Pegawai menulis</b>di kipApp dan di lembar Excel sendiri.</div>
<div v-click class="step old"><span class="n">2</span><b>PJ menyalin</b>isi lembar tiap anggota ke lembar rekap tim.</div>
<div v-click class="step old"><span class="n">3</span><b>Staf mengumpulkan</b>lembar semua tim.</div>
<div v-click class="step old"><span class="n">4</span><b>Bahan rapat disusun</b>manual, dengan angka berupa teks.</div>
</div>

<div v-click class="card warn" style="margin-top:1.6rem"><b>Akibatnya:</b> pekerjaan berulang, mudah salah salin, dan pimpinan baru melihat hasilnya setelah semua lembar terkumpul.</div>

<!--
Begini cara lama bekerja. Satu pekerjaan yang sama dicatat dua kali, lalu disalin berulang.
[click] Pegawai menulis di kipApp dan juga di lembar Excel sendiri.
[click] PJ menyalin isi lembar tiap anggota ke lembar rekap tim.
[click] Staf mengumpulkan lembar semua tim.
[click] Barulah bahan rapat disusun, dengan angka yang masih berupa teks.
[click] Akibatnya, pekerjaan berulang dan mudah salah salin. Pimpinan baru melihat hasilnya setelah semua lembar terkumpul.
-->

---

# Cara baru: sekali catat, langsung terpantau

<p class="lead">Pegawai mencatat sekali. Sisanya mengalir otomatis.</p>

<div class="flow">
<div v-click class="step"><span class="n">1</span><b>Pegawai mencatat</b>kegiatan di kipApp atau di Kinetik.</div>
<div v-click class="step"><span class="n">2</span><b>Sinkron otomatis</b>antara kipApp dan Kinetik.</div>
<div v-click class="step"><span class="n">3</span><b>Rekap Mingguan</b>tersusun per pegawai.</div>
<div v-click class="step"><span class="n">4</span><b>PJ memeriksa</b>dan menulis satu parafrase per RK.</div>
<div v-click class="step goal"><span class="n">5</span><b>Pimpinan memantau</b>lewat panel "Perlu perhatian".</div>
</div>

<div v-click class="card ok" style="margin-top:1.6rem"><b>Hasilnya:</b> tidak ada salin-tempel antarlembar, dan masalah terlihat saat masih bisa diperbaiki.</div>

<!--
Sekarang cara baru. Bandingkan dengan slide tadi: hanya langkah pertama dan keempat yang dikerjakan manusia.
[click] Pegawai mencatat kegiatan, di kipApp atau di Kinetik.
[click] Kinetik dan kipApp sinkron otomatis.
[click] Rekap Mingguan tersusun sendiri per pegawai.
[click] PJ tidak lagi menyalin. PJ memeriksa, lalu menulis satu parafrase untuk setiap RK.
[click] Pimpinan memantau lewat panel Perlu perhatian.
[click] Hasilnya: tidak ada salin-tempel antarlembar, dan masalah terlihat saat masih bisa diperbaiki.
-->

---

# Pekerjaan berpindah dari tangan ke sistem

<p class="lead">Klik untuk melihat tiga pekerjaan PJ dan staf berpindah jalur.</p>

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span>

<div class="lanes">
  <div class="lane" style="grid-column:1/4;grid-row:1">Dulu: dikerjakan dengan tangan</div>
  <div class="lane auto" style="grid-column:1/3;grid-row:2">Kini: dikerjakan sistem</div>
  <div class="lane auto warnlane" style="grid-column:3;grid-row:2">Tetap oleh PJ, bahan sudah siap</div>
  <div class="chip c1" :class="{ moved: $clicks >= 1 }" style="grid-column:1;grid-row:1">Mengumpulkan kegiatan anggota</div>
  <div class="chip c1" :class="{ moved: $clicks >= 2 }" style="grid-column:2;grid-row:1">Menggabung rekap tim</div>
  <div class="chip c1 pj" :class="{ moved: $clicks >= 3 }" style="grid-column:3;grid-row:1">Menulis paragraf rekap</div>
</div>

<div v-click="4" class="card ok" style="margin-top:1.6rem"><b>Waktu PJ beralih</b> dari menyalin ke memeriksa dan menulis.</div>

<!--
Slide ini memperlihatkan pekerjaan yang berpindah. Tiga pekerjaan yang dulu dikerjakan dengan tangan.
[click] Mengumpulkan kegiatan anggota. Sekarang otomatis lewat sinkron dari kipApp.
[click] Menggabung rekap tim. Ini juga otomatis.
[click] Menulis paragraf rekap. Perhatikan, pekerjaan ini berwarna oranye karena tetap dikerjakan PJ. Itu memang perlu penilaian manusia, tetapi bahannya sudah siap dan cukup satu parafrase per RK.
[click] Jadi waktu PJ beralih dari menyalin ke memeriksa dan menulis. Kami sengaja tidak menyebut angka penghematan waktu karena belum kami ukur.
-->

---

# SOP anggota: catat sekali

<table class="cmp three">
<thead><tr><th style="width:20%">Kapan</th><th style="width:38%">Cara lama</th><th>Cara baru</th></tr></thead>
<tbody>
<tr v-click><td>Awal minggu, paling lambat Senin pukul 09.00</td><td>Menyiapkan rencana di lembar Excel sendiri</td><td>Mengisi rencana minggu ini di Rekap Mingguan: pilih RK, tulis uraian dan tanggal</td></tr>
<tr v-click><td>Selama minggu</td><td>Mencatat kegiatan di kipApp, lalu mengetik lagi di Excel</td><td>Mencatat sekali di kipApp atau Kinetik. Yang lain mengikuti lewat sinkron</td></tr>
<tr v-click><td>Akhir minggu</td><td>Mengetik target dan realisasi sebagai kalimat</td><td>Mengisi target dan capaian berupa angka, uraian, dan tautan bukti, lalu menandai selesai</td></tr>
<tr v-click><td>Menjelang rapat</td><td>Menyerahkan lembar kepada PJ</td><td>Tidak menyerahkan apa pun. PJ sudah melihat rekapnya</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Dipangkas:</b> lembar Excel pribadi, penyerahan lembar ke PJ, dan pengetikan ulang isi yang sama. <span class="small">Kirim hasil ke kipApp dari Kinetik masih tahap uji.</span></div>

<!--
Sekarang prosedur kerja untuk tiap peran, dimulai dari anggota.
[click] Awal minggu, paling lambat Senin pukul sembilan pagi, anggota mengisi rencana minggu ini di Rekap Mingguan. Dulu rencana ini disiapkan di lembar Excel sendiri.
[click] Selama minggu, anggota mencatat sekali, di kipApp atau Kinetik. Yang lain mengikuti lewat sinkron. Dulu dicatat dua kali.
[click] Akhir minggu, anggota mengisi target dan capaian berupa angka, uraian, dan tautan bukti. Dulu diketik sebagai kalimat.
[click] Menjelang rapat, tidak ada lagi lembar yang diserahkan ke PJ, karena PJ sudah melihat rekapnya.
[click] Yang dipangkas untuk anggota: lembar Excel pribadi, penyerahan lembar, dan pengetikan ulang. Fitur kirim hasil ke kipApp dari Kinetik masih tahap uji.
-->

---

# SOP PJ: memeriksa, bukan menyalin

<table class="cmp three">
<thead><tr><th style="width:20%">Kapan</th><th style="width:38%">Cara lama</th><th>Cara baru</th></tr></thead>
<tbody>
<tr v-click><td>Awal minggu</td><td>Menagih rencana anggota satu per satu</td><td>Membuka Kepatuhan Rencana dan tabel rencana anggota. Yang belum mengisi langsung terlihat</td></tr>
<tr v-click><td>Selama minggu</td><td>Menerima lembar dari tiap anggota</td><td>Melihat rencana dan kegiatan anggota di Rekap Mingguan tim</td></tr>
<tr v-click><td>Akhir minggu</td><td>Menyalin ke lembar rekap tim dan menghitung dengan tangan</td><td>Memeriksa angka yang sudah terkumpul per RK</td></tr>
<tr v-click><td>Menutup rekap</td><td>Menulis paragraf rekap di Excel</td><td>Menulis satu parafrase per RK (boleh menyisipkan kalimat anggota), mengisi target dan capaian RK, lalu mengunci</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Dipangkas:</b> menagih satu per satu, menyalin ke lembar rekap, dan menghitung manual. <b>Tetap oleh PJ:</b> menilai isi dan menulis parafrase.</div>

<!--
Untuk PJ.
[click] Awal minggu, PJ membuka Kepatuhan Rencana. Yang belum mengisi langsung terlihat, jadi PJ tidak perlu menagih satu per satu.
[click] Selama minggu, PJ melihat rencana dan kegiatan anggota di Rekap Mingguan tim, tanpa menunggu lembar dari anggota.
[click] Akhir minggu, PJ memeriksa angka yang sudah terkumpul per RK. Tidak ada lagi menyalin dan menghitung dengan tangan.
[click] Menutup rekap, PJ menulis satu parafrase untuk setiap RK. PJ boleh menyisipkan kalimat dari anggota, mengisi target dan capaian RK, lalu mengunci rekap.
[click] Yang dipangkas: menagih, menyalin, dan menghitung manual. Yang tetap dikerjakan PJ adalah yang memang perlu penilaian: memeriksa isi dan menulis parafrase.
-->

---

# SOP pimpinan: membaca dan menindaklanjuti

<table class="cmp three">
<thead><tr><th style="width:20%">Kapan</th><th style="width:38%">Cara lama</th><th>Cara baru</th></tr></thead>
<tbody>
<tr v-click><td>Sebelum rapat</td><td>Menunggu staf menyusun bahan</td><td>Membuka panel "Perlu perhatian" dan rekap per minggu, bulan, atau triwulan</td></tr>
<tr v-click><td>Saat rapat</td><td>Membaca lembar Excel tiap tim</td><td>Membaca rekap tim dan angka capaian langsung di layar</td></tr>
<tr v-click><td>Tindak lanjut</td><td>Meminta PJ memeriksa lewat pesan</td><td>Menulis Catatan Pimpinan. PJ menerima notifikasi</td></tr>
<tr v-click><td>Triwulan</td><td>Menunggu bahan FRA disusun</td><td>Membuka Triwulanan (FRA) yang tersusun dari rekap bulanan</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Dipangkas:</b> menunggu bahan disusun staf, membuka banyak lembar, dan bertanya satu per satu siapa yang belum mengisi.</div>

<!--
Untuk pimpinan. Pimpinan tidak mengisi data. Pimpinan membaca, lalu menindaklanjuti.
[click] Sebelum rapat, pimpinan membuka panel Perlu perhatian dan rekap per minggu, bulan, atau triwulan. Tidak perlu menunggu staf menyusun bahan.
[click] Saat rapat, rekap tim dan angka capaian dibaca langsung di layar, bukan dari lembar Excel tiap tim.
[click] Untuk tindak lanjut, pimpinan menulis Catatan Pimpinan, dan PJ menerima notifikasi.
[click] Pada triwulan, rekap FRA tersusun dari rekap bulanan.
[click] Yang dipangkas untuk pimpinan: menunggu bahan disusun, membuka banyak lembar, dan bertanya satu per satu siapa yang belum mengisi.
-->

---

# Ringkasan: apa yang dipangkas dan apa yang tetap

<table class="cmp three">
<thead><tr><th style="width:16%">Peran</th><th style="width:42%">Dipangkas</th><th>Tetap dikerjakan manusia</th></tr></thead>
<tbody>
<tr v-click><td>Anggota</td><td>Lembar Excel pribadi, penyerahan lembar, pengetikan ulang</td><td>Mencatat kegiatan, mengisi target, capaian, dan bukti</td></tr>
<tr v-click><td>PJ</td><td>Menagih, menyalin ke lembar rekap, menghitung manual</td><td>Memeriksa angka, menulis parafrase per RK, mengunci rekap</td></tr>
<tr v-click><td>Pimpinan</td><td>Menunggu bahan disusun, membuka banyak lembar</td><td>Membaca pemantauan, menulis Catatan Pimpinan, memutuskan tindak lanjut</td></tr>
</tbody>
</table>

<!--
Ringkasan satu layar.
[click] Anggota: tidak lagi punya lembar pribadi dan tidak mengetik ulang. Tetap mencatat kegiatan, mengisi target, capaian, dan bukti.
[click] PJ: tidak lagi menagih, menyalin, dan menghitung manual. Tetap memeriksa angka, menulis parafrase, dan mengunci rekap.
[click] Pimpinan: tidak lagi menunggu bahan dan membuka banyak lembar. Tetap membaca pemantauan dan memutuskan tindak lanjut.
Intinya, pekerjaan salin dan tagih hilang, dan bagian yang perlu penilaian manusia tetap di tangan manusia.
-->

---

# Yang sudah dikerjakan kipApp

<p class="lead">Kami memeriksa kipApp dengan akun anggota pada 18 Oktober 2026.</p>

<div class="grid3 compact">
<div v-click class="card"><b>Perencanaan</b><br><span class="small">Renstra, Perjanjian Kinerja, Rencana Kinerja (tim kerja, RK ketua, proyek, RK anggota, matriks), SKP Tahunan dan Periodik, IKI dan Target.</span></div>
<div v-click class="card"><b>Pelaksanaan</b><br><span class="small">Kegiatan harian per pegawai: pilih pegawai, tahun, periode SKP, dan rencana kinerja. Ada unduh Excel.</span></div>
<div v-click class="card"><b>Penilaian</b><br><span class="small">Hasil Kerja, Rekap Prestasi Periodik dan Tahunan: rata-rata hasil kerja, perilaku, predikat, dan nilai prestasi per pegawai.</span></div>
</div>

<div v-click class="card ok" style="margin-top:.8rem"><b>kipApp adalah catatan resmi yang lengkap untuk perorangan.</b> Kinetik tidak mengulang itu. Kinetik menambahkan tampilan tingkat tim dan satuan kerja yang tidak ada di sana.</div>

<!--
Sebelum bicara kekurangan, kami ingin adil kepada kipApp. Kami memeriksa kipApp dengan akun anggota pada 18 Oktober 2026.
[click] Untuk perencanaan, kipApp lengkap: renstra, perjanjian kinerja, rencana kinerja tim, SKP tahunan dan periodik, serta IKI dan target.
[click] Untuk pelaksanaan, kipApp mencatat kegiatan harian per pegawai. Ada juga unduh Excel.
[click] Untuk penilaian, ada rekap prestasi periodik dan tahunan: nilai hasil kerja, perilaku, predikat, dan nilai prestasi per pegawai.
[click] Jadi kipApp adalah catatan resmi yang lengkap untuk perorangan. Kinetik tidak mengulang itu. Kinetik menambahkan tampilan tingkat tim dan satuan kerja yang tidak ada di sana. Satu catatan jujur: kami memeriksa dengan akun anggota, jadi menu khusus pimpinan atau admin tidak kami lihat.
-->

---

# Yang belum ada di kipApp: pemantauan mingguan

<table class="cmp">
<thead><tr><th style="width:50%">kipApp saat ini</th><th>Kinetik menambahkan</th></tr></thead>
<tbody>
<tr v-click><td>Kegiatan dilihat per pegawai, tidak ada rekap mingguan tingkat tim</td><td>Rekap Mingguan, Bulanan, dan Triwulanan</td></tr>
<tr v-click><td>Tidak ada parafrase PJ per RK</td><td>Satu parafrase PJ untuk setiap RK</td></tr>
<tr v-click><td>Target dan realisasi hanya teks di dalam indikator</td><td>Target dan capaian berupa angka per RK</td></tr>
<tr v-click><td>Formulir menolak rencana bertanggal ke depan, padahal server menerimanya</td><td>Rencana mingguan tersimpan, dan bisa dikirim ke kipApp</td></tr>
<tr v-click><td>Tidak ada peringatan dini bagi pegawai tanpa rencana</td><td>Kepatuhan Rencana dan panel "Perlu perhatian"</td></tr>
</tbody>
</table>

<!--
Sekarang apa yang belum ada. Lima hal untuk pemantauan mingguan.
[click] Kegiatan di kipApp dilihat per pegawai. Tidak ada rekap mingguan tingkat tim. Kinetik menambahkan rekap mingguan, bulanan, dan triwulanan.
[click] Tidak ada parafrase PJ per RK. Kinetik menyediakan satu parafrase untuk setiap RK.
[click] Target dan realisasi hanya teks di dalam indikator. Kinetik menyimpannya sebagai angka per RK.
[click] Formulir kipApp menolak rencana bertanggal ke depan, padahal server menerimanya. Kinetik menyimpan rencana mingguan dan bisa mengirimnya ke kipApp.
[click] Tidak ada peringatan dini bagi pegawai tanpa rencana. Kinetik punya Kepatuhan Rencana dan panel Perlu perhatian.
-->

---

# Dua celah lain: angka kredit dan nilai SAKIP

<table class="cmp">
<thead><tr><th style="width:36%">Yang tidak ada di kipApp</th><th style="width:30%">Cara lama</th><th>Di Kinetik</th></tr></thead>
<tbody>
<tr v-click><td><b>Angka kredit:</b> kipApp hanya menampilkan nilai prestasi per pegawai. Tidak ada angka kredit dan kesiapan naik pangkat</td><td>Dihitung terpisah di spreadsheet</td><td><b>Angka Kredit Tim.</b> Pimpinan melihat siapa yang sudah siap, hampir siap, atau masih berjalan menuju pangkat berikutnya</td></tr>
<tr v-click><td><b>FRA dan nilai SAKIP:</b> tidak ada formulirnya di kipApp</td><td>Kertas Kerja di spreadsheet, rumus dijaga dengan tangan</td><td><b>Kertas Kerja FRA.</b> Isi realisasi tiap indikator per triwulan, nilai SAKIP dan predikat dihitung otomatis</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Pimpinan kini bisa melihat sejak dini siapa yang mendekati kenaikan pangkat,</b> dan nilai SAKIP tersusun dari angka yang sama dengan rekap bulanan, tanpa menyalin ulang ke spreadsheet.</div>

<!--
Dua celah lagi yang penting bagi pimpinan.
[click] Pertama, angka kredit. kipApp menampilkan nilai prestasi per pegawai, tetapi tidak menampilkan angka kredit dan kesiapan naik pangkat. Dulu ini dihitung terpisah di spreadsheet. Di Kinetik ada Angka Kredit Tim. Pimpinan bisa melihat siapa yang sudah siap, hampir siap, atau masih berjalan menuju pangkat berikutnya.
[click] Kedua, FRA dan nilai SAKIP. kipApp tidak punya formulirnya. Dulu kami memakai Kertas Kerja di spreadsheet, dengan rumus yang dijaga dengan tangan. Di Kinetik, kami menulis ulang rumus Kertas Kerja itu menjadi formulir. Realisasi tiap indikator diisi per triwulan, dan nilai SAKIP beserta predikatnya dihitung otomatis.
[click] Dampaknya, pimpinan bisa melihat sejak dini siapa yang mendekati kenaikan pangkat, dan nilai SAKIP tersusun dari angka yang sama dengan rekap bulanan, tanpa menyalin ulang.
-->

---

# Apa yang dilihat pimpinan di Kinetik

<div class="grid3" style="margin-top:1rem">
<div v-click class="card"><b>Rekap Mingguan, Bulanan, Triwulanan</b><br><span class="small">Daftar dulu: bulan, lalu minggu, lalu satu minggu.</span></div>
<div v-click class="card"><b>Kepatuhan Rencana</b><br><span class="small">Siapa yang sudah punya rencana tiap minggu.</span></div>
<div v-click class="card warn"><b>Perlu perhatian</b><br><span class="small">Target atau capaian kosong, gagal kirim ke kipApp, belum ada rencana, rekap belum selesai, dan kesiapan kenaikan pangkat.</span></div>
<div v-click class="card"><b>Angka Kredit Tim dan Kertas Kerja FRA</b><br><span class="small">Kesiapan kenaikan pangkat dan nilai SAKIP satuan kerja.</span></div>
<div v-click class="card"><b>Lihat sebagai</b><br><span class="small">Admin melihat tampilan tiap peran, hanya baca, untuk membantu pengguna.</span></div>
</div>

<!--
Ini yang bisa dibuka pimpinan di Kinetik.
[click] Rekap mingguan, bulanan, dan triwulanan. Berupa daftar dulu: pilih bulan, lalu minggu, lalu satu minggu.
[click] Kepatuhan Rencana, untuk melihat siapa yang sudah punya rencana setiap minggu.
[click] Perlu perhatian. Ini yang paling berguna: ia menunjuk target atau capaian yang kosong, kegiatan yang gagal terkirim ke kipApp, pegawai tanpa rencana, rekap yang belum selesai, dan kesiapan naik pangkat.
[click] Angka Kredit Tim dan Kertas Kerja FRA, untuk kenaikan pangkat dan nilai SAKIP.
[click] Lihat sebagai. Fitur ini untuk admin: melihat tampilan tiap peran dalam mode hanya baca, supaya bisa membantu pengguna tanpa bisa mengubah data.
-->

---

# Tantangan 1: tidak ada pintu resmi ke kipApp

<p class="lead">Cara pertama kami: token disalin dengan tangan oleh admin.</p>

<div class="flow">
<div v-click class="step old"><span class="n">1</span><b>Admin masuk</b>ke kipApp lewat SSO.</div>
<div v-click class="step old"><span class="n">2</span><b>Membuka alat pengembang</b>di peramban, mencari token di permintaan jaringan.</div>
<div v-click class="step old"><span class="n">3</span><b>Menyalin token</b>yang panjang itu.</div>
<div v-click class="step old"><span class="n">4</span><b>Menempel token</b>di halaman Integrasi kipApp pada Kinetik.</div>
<div v-click class="step old"><span class="n">5</span><b>Berlaku 24 jam.</b>Besok diulang.</div>
</div>

<div v-click class="card warn" style="margin-top:1.4rem"><b>Kelemahannya:</b> bergantung pada satu orang, dan sinkronisasi berhenti begitu token habis.</div>

<!--
Tantangan pertama: kipApp tidak membuka pintu resmi bagi sistem lain. Cara pertama kami untuk membaca data kipApp dikerjakan dengan tangan oleh admin.
[click] Admin masuk ke kipApp lewat SSO.
[click] Admin membuka alat pengembang di peramban dan mencari token di permintaan jaringan.
[click] Admin menyalin token yang panjang itu.
[click] Admin menempelnya di halaman Integrasi kipApp pada Kinetik.
[click] Token itu hanya berlaku dua puluh empat jam. Besok harus diulang.
[click] Kelemahannya jelas: bergantung pada satu orang, dan sinkronisasi berhenti begitu token habis.
-->

---

# Cara kedua: pegawai masuk sekali, token diambil otomatis

<div class="flow">
<div v-click class="step"><span class="n">1</span><b>Pegawai masuk</b>ke Kinetik dengan kata sandi SSO, satu kali.</div>
<div v-click class="step"><span class="n">2</span><b>Kinetik masuk</b>ke kipApp atas nama pegawai lewat jalur SSO.</div>
<div v-click class="step"><span class="n">3</span><b>Token tersimpan</b>terenkripsi dan diperbarui otomatis.</div>
<div v-click class="step goal"><span class="n">4</span><b>Admin kipApp masuk</b> dan token bersama untuk seluruh satuan kerja ikut diperbarui.</div>
</div>

<div v-click class="card ok" style="margin-top:1.6rem"><b>Hasilnya:</b> tidak ada salin-tempel token. Kata sandi disimpan terenkripsi dan tidak pernah ditampilkan lagi.</div>

<!--
Karena itu kami mencari cara kedua. Kami menemukan jalur dari SSO yang bisa dipakai untuk membaca kipApp dan menghubungkannya ke sistem kami.
[click] Pegawai masuk ke Kinetik dengan kata sandi SSO, cukup satu kali.
[click] Kinetik masuk ke kipApp atas nama pegawai lewat jalur SSO itu.
[click] Token tersimpan terenkripsi dan diperbarui otomatis.
[click] Saat admin kipApp masuk, token bersama untuk seluruh satuan kerja ikut diperbarui. Token yang masih berlaku tidak diganti.
[click] Hasilnya, tidak ada lagi salin-tempel token. Kata sandi disimpan terenkripsi dan tidak pernah ditampilkan kembali.
-->

---

# Kekhawatiran: SSO baru menghentikan cara kedua

<div class="grid2" style="margin-top:1rem">
<div v-click class="card"><b>Sekarang</b><br><span class="small">SSO lama masih bisa dimasuki otomatis. Cara kedua berjalan.</span></div>
<div v-click class="card warn"><b>Desember 2026</b><br><span class="small">Semua aplikasi BPS pindah ke SSO baru (accounts.bps.go.id) yang memakai captcha dan passkey. Server tidak bisa masuk sendiri.</span></div>
</div>

<div class="grid2" style="margin-top:.6rem">
<div v-click class="card warn"><b>Bila tidak ada tindakan</b><br><span class="small">Cara kedua berhenti. Setiap orang harus menyalin token sendiri dengan tangan, setiap hari. Lebih berat daripada cara pertama, yang dulu hanya dikerjakan admin.</span></div>
<div v-click class="card ok"><b>Bila ada akses resmi</b><br><span class="small">Kinetik terdaftar sebagai klien SSO, dan tetap otomatis. Syaratnya domain .go.id, dan subdomain .go.id perlu persetujuan kantor pusat.</span></div>
</div>

<!--
Sekarang bagian yang kami khawatirkan, dan ini alasan permintaan ketiga saya nanti.
[click] Saat ini SSO lama masih bisa dimasuki secara otomatis, jadi cara kedua berjalan.
[click] Pada Desember 2026, semua aplikasi BPS pindah ke SSO baru. SSO baru memakai captcha dan passkey. Artinya, sistem seperti Kinetik tidak bisa lagi masuk sendiri.
[click] Kalau tidak ada tindakan, cara kedua berhenti. Setiap orang yang memakai Kinetik harus menyalin token sendiri dengan tangan, setiap hari. Itu lebih berat daripada cara pertama, yang dulu hanya dikerjakan oleh admin.
[click] Jalan keluarnya adalah akses resmi: Kinetik didaftarkan sebagai klien SSO. Syaratnya domain dengan akhiran go titik id, dan subdomain go titik id perlu persetujuan kantor pusat. Karena itu kami butuh dukungan Bapak dan Ibu.
-->

---

# Tantangan 3: data nyata tidak rapi

<div class="grid2" style="margin-top:1rem">
<div class="card warn"><b>Tantangan</b><br>Data kipApp yang masuk tidak selalu lengkap: tautan bukti sangat panjang, dan sebagian kegiatan tidak punya RK atau tim.</div>
<div v-click class="card ok"><b>Solusi</b><br>Kolom bukti dilebarkan. Kegiatan yang punya RK dan tim diimpor menjadi baris mingguan, sisanya dilewati dan tidak merusak data lain.</div>
</div>

<div v-click class="card" style="margin-top:1rem"><span class="big">9.756</span> kegiatan kipApp diimpor menjadi <span class="big">9.187</span> baris mingguan. Sekitar 570 dilewati karena tidak punya RK atau tim.</div>

<!--
Tantangan berikutnya: data nyata tidak selalu rapi. Tautan bukti ada yang sangat panjang, dan sebagian kegiatan tidak punya RK atau tim.
[click] Solusi kami: kolom bukti dilebarkan, dan hanya kegiatan yang punya RK dan tim yang diimpor menjadi baris mingguan. Sisanya dilewati tanpa merusak data lain.
[click] Angkanya: dari 9.756 kegiatan kipApp, 9.187 menjadi baris mingguan. Sekitar 570 dilewati.
-->

---

# Tantangan 4: menjaga data resmi

<p class="lead">Kinetik tidak boleh merusak catatan resmi di kipApp.</p>

<div class="grid3">
<div v-click class="card ok"><b>Kirim ke kipApp dimatikan dulu</b><br><span class="small">Pengiriman mati secara bawaan. Baru dinyalakan setelah uji pada SKP sendiri.</span></div>
<div v-click class="card ok"><b>Hak akses per peran</b><br><span class="small">Anggota, PJ, pimpinan, dan admin melihat hal yang berbeda.</span></div>
<div v-click class="card ok"><b>Mode lihat saja</b><br><span class="small">Pratinjau hanya baca untuk membantu pengguna, tanpa bisa mengubah.</span></div>
</div>

<!--
Karena kipApp adalah catatan resmi, kami berhati-hati.
[click] Pengiriman ke kipApp dimatikan secara bawaan. Baru kami nyalakan setelah diuji pada SKP kami sendiri.
[click] Hak akses berbeda untuk anggota, PJ, pimpinan, dan admin.
[click] Ada mode lihat saja, untuk membantu pengguna tanpa risiko mengubah data.
-->

---

# Status saat ini

<p class="lead">Disampaikan apa adanya.</p>

<div class="grid3">
<div class="card"><span class="big">87</span><br>pegawai satuan kerja kita</div>
<div class="card"><span class="big">25</span><br>tim</div>
<div class="card"><span class="big">9.756</span><br>kegiatan kipApp tersinkron</div>
</div>

<div class="card ok" style="margin-top:.8rem"><span class="tag">Berjalan</span> &nbsp;Aplikasi aktif di <b>kinetik.bpssulteng.id</b> sejak Oktober 2026.</div>
<div class="card warn"><span class="tag p">Perlu tindakan</span> &nbsp;Sinkronisasi berhenti sampai admin kipApp masuk dan token baru tersimpan.</div>
<div class="card warn"><span class="tag p">Belum</span> &nbsp;Belum ada tim yang memakainya. Tahap berikutnya adalah uji coba.</div>

<!--
Saya sampaikan status apa adanya.
Aplikasi aktif di kinetik titik bpssulteng titik id sejak Oktober 2026. Datanya mencakup delapan puluh tujuh pegawai satuan kerja kita, dua puluh lima tim, dan sembilan ribu tujuh ratus lima puluh enam kegiatan kipApp yang sudah tersinkron.
Dua hal perlu saya katakan jujur. Pertama, sinkronisasi sedang berhenti sampai admin kipApp masuk dan token baru tersimpan. Kedua, belum ada tim yang memakainya. Tahap berikutnya adalah uji coba.
-->

---

# Langkah berikutnya (rencana)

<div class="flow" style="margin-top:1.2rem">
<div v-click class="step goal"><span class="n">1</span><b>Uji coba</b>2 sampai 3 tim.</div>
<div v-click class="step goal"><span class="n">2</span><b>Kirim ke kipApp</b>dinyalakan setelah uji langsung berhasil.</div>
<div v-click class="step goal"><span class="n">3</span><b>Login lokal</b>sebagai cadangan, sebelum SSO baru Desember 2026.</div>
<div v-click class="step goal"><span class="n">4</span><b>Pelatihan</b>memakai Buku Pedoman di dalam aplikasi.</div>
</div>

<p class="small" style="margin-top:1.6rem">Semua butir di atas masih rencana.</p>

<!--
Empat langkah berikutnya. Semuanya masih rencana.
[click] Pertama, uji coba di dua sampai tiga tim.
[click] Kedua, fitur kirim ke kipApp baru kami nyalakan setelah uji langsung berhasil.
[click] Ketiga, login lokal sebagai cadangan, sebelum SSO baru pada Desember 2026. Ini belum dibuat.
[click] Keempat, pelatihan memakai Buku Pedoman yang ada di dalam aplikasi.
-->

---

# Tiga permintaan kepada pimpinan

<div class="card" v-click><span class="big" style="font-size:1.8rem">1</span> &nbsp;<b>Tentukan tim uji coba.</b> Dua sampai tiga tim.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">2</span> &nbsp;<b>Dukung ritme mingguan.</b> Rencana diisi paling lambat Senin pukul 09.00. PJ menyusun rekap.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">3</span> &nbsp;<b>Dukung permohonan ke kantor pusat</b> untuk akses resmi kipApp dan SSO client, agar Kinetik tidak bergantung pada jalur sementara.</div>

<!--
Kami meminta tiga hal dari Bapak dan Ibu.
[click] Satu, tentukan tim uji coba, dua sampai tiga tim.
[click] Dua, dukung ritme mingguan: rencana diisi paling lambat Senin pukul sembilan pagi, dan PJ menyusun rekap.
[click] Tiga, dukung permohonan ke kantor pusat untuk akses resmi ke kipApp dan SSO client. Tanpa itu, setelah Desember 2026 setiap orang harus menyalin token sendiri. Dengan itu, Kinetik tetap otomatis.
-->

---
layout: center
class: text-center
---

<img src="/bps-logo.svg" alt="BPS" style="height:4rem;margin:0 auto 1rem" />

# Terima kasih

<p class="lead" style="margin-top:1.2rem">kipApp tetap catatan resmi. Kinetik membuatnya terlihat.</p>

<p class="small">kinetik.bpssulteng.id</p>

<p class="small" style="margin-top:1.2rem;line-height:1.35"><b>Sukma Nirmala Dewi, S.Tr.Stat.</b><br>Pranata Komputer Ahli Pertama, Tim Metodologi dan Teknologi Informasi (MTI)<br>BPS Provinsi Sulawesi Tengah · NIP 200001142022012003</p>

<!--
Saya tutup dengan satu kalimat: kipApp tetap catatan resmi, dan Kinetik membuatnya terlihat oleh pimpinan setiap minggu.
Terima kasih atas perhatian Bapak dan Ibu. Kami siap menjawab pertanyaan, atau memperlihatkan aplikasinya langsung.
-->
