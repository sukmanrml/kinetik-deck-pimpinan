---
theme: default
title: Kinetik - Pemantauan Kinerja Tim
info: Paparan untuk Kepala BPS Provinsi Sulawesi Tengah
colorSchema: light
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
Selamat pagi, Bapak/Ibu pimpinan. Terima kasih atas waktunya.
Tujuan paparan ini satu: menunjukkan bagaimana Kinetik membuat kinerja tim terlihat setiap minggu, tanpa menggantikan kipApp.
Kita mulai dari masalahnya, lalu cara kerja baru, tantangan yang sudah kami atasi, dan terakhir permintaan kami kepada pimpinan.
Durasi sekitar 15 menit.
-->

---

# Pimpinan belum bisa melihat kinerja tim per minggu

<p class="lead">kipApp mencatat SKP dan kegiatan harian pegawai. Gambaran per tim, per minggu, belum ada.</p>

<div class="grid2 compact">
<div v-click class="card"><b>Tidak terlihat.</b> Siapa yang sudah punya rencana dan siapa yang sudah mencapai, per tim dan per minggu.</div>
<div v-click class="card"><b>Disusun dengan tangan.</b> Bahan Rapat Mingguan, Rapat Bulanan, dan FRA triwulan disusun di Excel, satu lembar per tim, dari salinan kegiatan anggota.</div>
<div v-click class="card"><b>Angka berupa teks.</b> Target dan realisasi diketik sebagai kalimat, sehingga tidak bisa dijumlahkan.</div>
<div v-click class="card warn"><b>Terlambat diketahui.</b> Pegawai yang belum punya rencana baru ketahuan saat rapat.</div>
<div v-click class="card warn" style="grid-column:1 / 3"><b>Menyita waktu PJ.</b> Penanggung jawab tim (PJ) menulis paragraf rekap setiap minggu.</div>
</div>

<!--
Lima masalah yang kami temui. kipApp tidak salah: ia dirancang untuk mencatat kegiatan pegawai.
Yang belum ada adalah lapisan di atasnya untuk melihat tim secara utuh.
Klik satu per satu. Tekankan masalah keempat dan kelima: pimpinan tahu belakangan, dan PJ kehabisan waktu.
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
kipApp tetap catatan resmi. Kami tidak membuat sistem tandingan.
Kinetik membaca RK dan kegiatan anggota dari kipApp, lalu menambahkan lapisan yang belum ada.
Kinetik juga bisa mengirim kegiatan dan rencana ke kipApp, sehingga pegawai cukup mengisi sekali. Bagian ini masih tahap uji.
Pimpinan melihat hasilnya lewat tampilan pemantauan.
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
Kenapa tidak tetap memakai Excel saja? Karena pekerjaan yang sama ditulis dua kali dan disalin tangan.
Kenapa tidak kipApp saja? kipApp bagus sebagai catatan resmi, tetapi tidak merekap tim, tidak menyimpan angka yang bisa dijumlahkan, dan tidak memberi peringatan dini.
Satu temuan penting: kipApp sebenarnya mampu menyimpan rencana ke depan. Server menerimanya. Yang menghalangi hanya validasi di tampilan formulir.
Karena itu rencana mingguan di Kinetik bisa ikut tercatat di kipApp.
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
Ikuti alurnya dari kiri ke kanan. Pekerjaan yang sama ditulis dua kali: di kipApp dan di Excel.
Lalu disalin oleh PJ, dikumpulkan staf, baru disusun untuk rapat.
Setiap salin-tempel memakan waktu dan membuka peluang salah.
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
Bandingkan dengan slide sebelumnya. Lima langkah, tetapi hanya langkah pertama dan keempat yang dikerjakan manusia.
Pegawai cukup mencatat sekali. PJ tidak lagi menyalin, tetapi memeriksa dan menulis satu parafrase per RK.
Pimpinan melihat panel Perlu perhatian.
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
Tiga pekerjaan yang dulu dikerjakan dengan tangan.
Klik 1: mengumpulkan kegiatan anggota, sekarang otomatis lewat sinkron dari kipApp.
Klik 2: menggabung rekap tim, sekarang otomatis.
Klik 3: menulis paragraf rekap. Ini tetap dikerjakan PJ karena perlu penilaian manusia, tetapi bahannya sudah siap dan cukup satu parafrase per RK.
Kami sengaja tidak menyebut angka penghematan waktu karena belum kami ukur.
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
Ini SOP untuk anggota. Rencana diisi paling lambat Senin pukul 09.00.
Selama minggu, anggota cukup mencatat sekali. Di akhir minggu, ia mengisi angka target dan capaian, uraian, dan tautan bukti.
Yang hilang: lembar Excel pribadi dan penyerahan lembar ke PJ.
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
Ini SOP untuk PJ. Pekerjaan yang hilang adalah menagih, menyalin, dan menghitung.
Yang tetap dikerjakan PJ adalah yang memang perlu penilaian: memeriksa angka dan menulis satu parafrase per RK, lalu mengunci rekap.
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
Ini SOP untuk pimpinan. Pimpinan tidak mengisi data. Pimpinan membaca, lalu menindaklanjuti lewat Catatan Pimpinan.
Yang hilang: menunggu bahan dari staf dan membuka banyak lembar.
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
Ringkasan satu layar. Setiap peran kehilangan pekerjaan salin dan tagih, dan tetap memegang bagian yang perlu penilaian.
-->

---

# Yang belum ada di kipApp

<p class="lead">Enam kekosongan yang kami temukan, dan jawaban Kinetik.</p>

<table class="cmp">
<thead><tr><th style="width:50%">kipApp saat ini</th><th>Kinetik menambahkan</th></tr></thead>
<tbody>
<tr v-click><td>Tidak ada rekap mingguan tingkat tim</td><td>Rekap Mingguan, Bulanan, dan Triwulanan (FRA)</td></tr>
<tr v-click><td>Tidak ada parafrase PJ per RK</td><td>Satu parafrase PJ untuk setiap RK</td></tr>
<tr v-click><td>Target dan realisasi hanya teks di dalam indikator</td><td>Target dan capaian berupa angka per RK</td></tr>
<tr v-click><td>Formulir menolak rencana bertanggal ke depan, padahal server menerimanya</td><td>Rencana mingguan tersimpan, dan bisa dikirim ke kipApp</td></tr>
<tr v-click><td>Tidak ada peringatan dini bagi pegawai tanpa rencana</td><td>Kepatuhan Rencana dan panel "Perlu perhatian"</td></tr>
<tr v-click><td>Kesiapan kenaikan pangkat (angka kredit) tidak terlihat di tingkat satuan kerja</td><td>Angka Kredit Tim</td></tr>
</tbody>
</table>

<!--
Enam kekosongan yang konkret. Ini bukan kritik terhadap kipApp, karena memang bukan tugas kipApp.
Baris keempat penting: kipApp sebenarnya bisa menyimpan rencana ke depan. Yang menolak hanya validasi di formulir.
-->

---

# Apa yang dilihat pimpinan di Kinetik

<div class="grid3" style="margin-top:1rem">
<div v-click class="card"><b>Rekap Mingguan, Bulanan, Triwulanan</b><br><span class="small">Daftar dulu: bulan, lalu minggu, lalu satu minggu.</span></div>
<div v-click class="card"><b>Kepatuhan Rencana</b><br><span class="small">Siapa yang sudah punya rencana tiap minggu.</span></div>
<div v-click class="card warn"><b>Perlu perhatian</b><br><span class="small">Target atau capaian kosong, gagal kirim ke kipApp, belum ada rencana, rekap belum selesai, dan kesiapan kenaikan pangkat.</span></div>
<div v-click class="card"><b>Angka Kredit Tim</b><br><span class="small">Kesiapan kenaikan pangkat di seluruh satuan kerja.</span></div>
<div v-click class="card"><b>Lihat sebagai</b><br><span class="small">Admin melihat tampilan tiap peran, hanya baca, untuk membantu pengguna.</span></div>
</div>

<!--
Lima hal yang bisa dibuka pimpinan.
Rekap berupa daftar dulu: pilih bulan, lalu minggu, lalu satu minggu, tanpa membuka banyak lembar.
Perlu perhatian paling berguna untuk pimpinan karena menunjuk hal yang butuh tindakan.
Lihat sebagai membantu admin memahami apa yang dilihat pengguna, tanpa bisa mengubah data.
-->

---

# Tantangan 1: kipApp tidak membuka akses resmi untuk sistem lain

<div class="grid2" style="margin-top:1.2rem">
<div class="card warn"><b>Tantangan</b><br>kipApp tidak menyediakan akses resmi bagi sistem lain. Token masuknya berlaku 24 jam.</div>
<div v-click class="card ok"><b>Solusi</b><br>Kami membaca kipApp lewat jalur SSO yang tersedia, memakai token admin satuan kerja untuk data seluruh pegawai. Saat admin kipApp masuk lewat SSO, token bersama diperbarui otomatis.</div>
</div>

<div v-click class="card warn" style="margin-top:1rem"><b>Kondisi sekarang:</b> token di server sudah kedaluwarsa, jadi sinkronisasi berhenti sampai admin kipApp masuk lagi lewat SSO. Data yang sudah masuk tidak hilang.</div>

<!--
Kami membaca kipApp lewat jalur SSO yang tersedia, dengan token admin satuan kerja.
Token itu habis dalam 24 jam, jadi setiap kali admin kipApp masuk lewat SSO, token bersama diperbarui otomatis. Token yang masih berlaku tidak diganti.
Itu sebabnya sinkronisasi sekarang berhenti: token di server sudah habis. Data yang sudah masuk aman.
-->

---

# Tantangan 2: SSO BPS akan berpindah

<div class="grid2" style="margin-top:1.2rem">
<div class="card warn"><b>Tantangan</b><br>BPS beralih ke SSO baru (accounts.bps.go.id) yang memakai captcha. Peralihan dijadwalkan Desember 2026.</div>
<div v-click class="card ok"><b>Solusi</b><br>Pegawai masuk satu kali dengan kata sandi SSO. Kata sandi disimpan terenkripsi dan tidak pernah ditampilkan lagi. Dengan itu Kinetik membaca kipApp atas nama pegawai.</div>
</div>

<div v-click class="card warn" style="margin-top:1rem"><b>Rencana:</b> login lokal sebagai cadangan, disiapkan sebelum Desember 2026. Belum dibuat.</div>

<!--
SSO BPS akan berpindah ke yang baru, dan memakai captcha. Itu menyulitkan proses masuk otomatis.
Pegawai cukup masuk satu kali dengan kata sandi SSO. Kata sandi disimpan terenkripsi dan tidak pernah ditampilkan lagi.
Satu hal yang belum selesai: login lokal sebagai cadangan masih rencana. Targetnya sebelum Desember 2026.
-->

---

# Tantangan 3 dan 4: data yang masuk berantakan

<div class="grid2" style="margin-top:.8rem">
<div>
<div class="card warn"><b>Pegawai kantor lain</b> ikut muncul di data kipApp.</div>
<div v-click class="card ok"><b>Penjaga kantor</b> hanya menyimpan BPS Provinsi Sulawesi Tengah (unit kerja 100, wilayah 7200_11). Sisanya dinonaktifkan: <b>22</b> orang.</div>
</div>
<div>
<div class="card warn"><b>Data nyata tidak rapi:</b> tautan bukti panjang, sebagian kegiatan tanpa RK atau tanpa tim.</div>
<div v-click class="card ok"><b>9.756</b> kegiatan kipApp diimpor menjadi <b>9.187</b> baris mingguan. Sekitar 570 dilewati karena tanpa RK atau tim.</div>
</div>
</div>

<!--
Dua masalah data. Pertama, pegawai kantor lain ikut terbaca. Penjaga kantor hanya menyimpan BPS Provinsi Sulawesi Tengah, dan 22 orang lain dinonaktifkan.
Kedua, data nyata tidak rapi. Dari 9.756 kegiatan kipApp, 9.187 menjadi baris mingguan. Sekitar 570 dilewati karena tidak punya RK atau tim.
Tautan bukti yang panjang juga sudah kami tangani.
-->

---

# Tantangan 5: menjaga data resmi

<p class="lead">Kinetik tidak boleh merusak catatan resmi di kipApp.</p>

<div class="grid3">
<div v-click class="card ok"><b>Kirim ke kipApp dimatikan dulu</b><br><span class="small">Pengiriman mati secara bawaan. Baru dinyalakan setelah uji pada SKP sendiri.</span></div>
<div v-click class="card ok"><b>Hak akses per peran</b><br><span class="small">Anggota, PJ, pimpinan, dan admin melihat hal yang berbeda.</span></div>
<div v-click class="card ok"><b>Mode lihat saja</b><br><span class="small">Pratinjau hanya baca untuk membantu pengguna, tanpa bisa mengubah.</span></div>
</div>

<!--
Karena kipApp adalah catatan resmi, kami berhati-hati.
Satu: pengiriman ke kipApp dimatikan secara bawaan, dan diuji dulu pada SKP kami sendiri.
Dua: hak akses berbeda untuk anggota, PJ, pimpinan, dan admin.
Tiga: mode lihat saja untuk membantu pengguna tanpa risiko mengubah data.
-->

---

# Status saat ini

<p class="lead">Disampaikan apa adanya.</p>

<div class="grid3">
<div class="card"><span class="big">109</span><br>pegawai di direktori<br><span class="small">87 aktif</span></div>
<div class="card"><span class="big">25</span><br>tim</div>
<div class="card"><span class="big">9.756</span><br>kegiatan kipApp tersinkron</div>
</div>

<div class="card ok" style="margin-top:.8rem"><span class="tag">Berjalan</span> &nbsp;Aplikasi aktif di <b>kinetik.bpssulteng.id</b> sejak Oktober 2026.</div>
<div class="card warn"><span class="tag p">Perlu tindakan</span> &nbsp;Sinkronisasi berhenti sampai token admin yang baru tersimpan.</div>
<div class="card warn"><span class="tag p">Belum</span> &nbsp;Belum ada tim yang memakainya. Tahap berikutnya adalah uji coba.</div>

<!--
Fakta saat ini. Aplikasi aktif di kinetik.bpssulteng.id sejak Oktober 2026.
Direktori berisi 109 pegawai, 87 aktif, dalam 25 tim, dengan 9.756 kegiatan kipApp tersinkron.
Dua hal yang harus disampaikan apa adanya: sinkronisasi berhenti sampai ada token admin baru, dan belum ada tim yang memakainya.
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
Empat langkah berikutnya, semuanya rencana.
Pertama uji coba di dua sampai tiga tim. Kedua, kirim ke kipApp baru kami nyalakan setelah uji langsung berhasil.
Ketiga, login lokal sebelum SSO baru di Desember 2026. Keempat, pelatihan memakai Buku Pedoman di dalam aplikasi.
-->

---

# Tiga permintaan kepada pimpinan

<div class="card" v-click><span class="big" style="font-size:1.8rem">1</span> &nbsp;<b>Tentukan tim uji coba.</b> Dua sampai tiga tim.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">2</span> &nbsp;<b>Dukung ritme mingguan.</b> Rencana diisi paling lambat Senin pukul 09.00. PJ menyusun rekap.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">3</span> &nbsp;<b>Dukung permohonan ke kantor pusat</b> untuk akses resmi kipApp dan SSO client, agar Kinetik tidak bergantung pada jalur sementara.</div>

<!--
Tiga permintaan.
Satu, tentukan tim uji coba, dua sampai tiga tim.
Dua, dukung ritme mingguan: rencana diisi paling lambat Senin pukul 09.00, dan PJ menyusun rekap.
Tiga, dukung permohonan akses resmi ke kipApp dan SSO client di kantor pusat, supaya Kinetik tidak bergantung pada jalur sementara.
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
Kesimpulannya: kipApp tetap catatan resmi, Kinetik membuatnya terlihat oleh pimpinan setiap minggu.
Terima kasih. Kami siap menjawab pertanyaan, atau memperlihatkan aplikasinya langsung.
-->
