---
theme: default
title: Kinetik - Monitoring Kinerja Tim
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
<div v-click class="card"><b>Disusun manual.</b> Bahan Rapat Mingguan, Rapat Bulanan, dan FRA triwulan disusun di Excel, satu lembar per tim, dari copy-paste kegiatan anggota.</div>
<div v-click class="card warn"><b>Tidak bisa untuk perencanaan.</b> kipApp tidak bisa diisi untuk tanggal ke depan, jadi rencana minggu depan tidak bisa dicatat di sana.</div>
<div v-click class="card"><b>Angka berupa teks.</b> Target dan realisasi diketik sebagai kalimat, sehingga tidak bisa dijumlahkan.</div>
<div v-click class="card warn"><b>Telat ketahuan.</b> Pegawai yang belum punya rencana baru ketahuan saat rapat.</div>
<div v-click class="card warn"><b>Menyita waktu PJ.</b> Penanggung jawab tim (PJ) menulis paragraf rekap setiap minggu.</div>
</div>

<!--
Kita mulai dari masalahnya. kipApp adalah sistem resmi kita untuk SKP dan kegiatan harian. kipApp tidak salah, ia memang dibuat untuk mencatat kegiatan pegawai. Yang belum ada adalah gambaran per tim dan per minggu, dan satu hal lagi yang akan saya jelaskan sebentar.
[click] Pertama, hal itu tidak terlihat. Kita tidak bisa langsung tahu siapa yang sudah punya rencana dan siapa yang sudah mencapai, per tim dan per minggu.
[click] Kedua, bahan rapat disusun manual. Rapat mingguan, rapat bulanan, dan FRA triwulan disusun di Excel, satu lembar per tim, dari copy-paste kegiatan anggota.
[click] Ketiga, ini penting: kipApp tidak bisa dipakai untuk perencanaan. Form-nya menolak tanggal ke depan, jadi rencana minggu depan tidak bisa dicatat di sana.
[click] Keempat, angka target dan realisasi diketik sebagai kalimat, jadi tidak bisa dijumlahkan.
[click] Kelima, telat ketahuan. Pegawai yang belum punya rencana baru ketahuan saat rapat, padahal saat itu sudah terlambat.
[click] Keenam, ini menyita waktu PJ. Setiap minggu PJ menulis paragraf rekap, dan itu menghabiskan waktu.
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
  <div v-click="4" class="card warn" style="flex:1;text-align:center"><b>Pimpinan</b><br><span class="small">Tampilan monitoring</span></div>
</div>

<div v-click="3" style="margin-top:.6rem">
<div class="grid2" style="font-size:.9rem">
<div class="card ok"><b>Yang Kinetik tambahkan</b><br>Rencana mingguan, target dan capaian berupa angka per RK, parafrase PJ per RK, penguncian rekap, dan tampilan monitoring.</div>
<div class="card"><b>Yang tetap di kipApp</b><br>Catatan resmi pegawai. Kinetik membaca darinya dan mengirim kegiatan kembali ke sana.</div>
</div>
</div>

<!--
Pendekatan kami: Kinetik melengkapi kipApp. Kami tidak membuat sistem tandingan. kipApp tetap catatan resmi.
[click] Kinetik membaca RK dan kegiatan anggota dari kipApp.
[click] Kinetik juga bisa mengirim kegiatan dan rencana kembali ke kipApp, sehingga pegawai cukup mengisi sekali. Bagian mengirim ini masih tahap uji.
[click] Yang Kinetik tambahkan adalah lapisan yang belum ada: rencana mingguan, target dan capaian berupa angka, parafrase PJ untuk setiap RK, penguncian rekap, dan tampilan monitoring. Catatan resmi tetap di kipApp.
[click] Hasilnya dilihat pimpinan lewat tampilan monitoring.
-->

---

# Mengapa tidak cukup Excel atau kipApp saja

<table class="cmp four">
<thead><tr><th style="width:26%">Kebutuhan</th><th>Excel</th><th>kipApp saja</th><th>Kinetik</th></tr></thead>
<tbody>
<tr v-click><td>Pegawai mencatat sekali</td><td>Tidak, dicatat dua kali</td><td>Ya</td><td>Ya</td></tr>
<tr v-click><td>Rekap tim per minggu</td><td>Di-copy manual</td><td>Tidak ada</td><td>Otomatis</td></tr>
<tr v-click><td>Target dan capaian bisa dijumlahkan</td><td>Bisa, setelah diketik ulang</td><td>Teks di dalam indikator</td><td>Angka per RK</td></tr>
<tr v-click><td>Peringatan bagi yang belum punya rencana</td><td>Tidak ada</td><td>Tidak ada</td><td>Ada</td></tr>
<tr v-click><td>Catatan resmi SKP</td><td>Bukan</td><td>Ya</td><td>Tetap di kipApp</td></tr>
<tr v-click><td>Rencana ke depan</td><td>Terpisah dari kipApp</td><td>Form menolak tanggal ke depan</td><td>Tersimpan di Kinetik dan bisa dikirim ke kipApp</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>kipApp sebenarnya bisa menyimpan rencana ke depan.</b> Server kipApp menerima kegiatan bertanggal ke depan, dan sudah kami uji pada SKP sendiri. Yang menolaknya hanya validasi di form kipApp. Kinetik memakai jalur itu.</div>

<!--
Pertanyaan yang wajar: kenapa tidak tetap memakai Excel, atau kenapa tidak kipApp saja?
[click] Pegawai mencatat sekali. Di Excel, pekerjaan dicatat dua kali. Di kipApp dan Kinetik, cukup sekali.
[click] Rekap tim per minggu. Di Excel di-copy manual, di kipApp tidak ada, di Kinetik tersusun otomatis.
[click] Target dan capaian. Di kipApp, angkanya hanya teks di dalam indikator. Di Kinetik, angka per RK sehingga bisa dijumlahkan.
[click] Peringatan bagi yang belum punya rencana. Excel dan kipApp tidak punya. Kinetik punya.
[click] Catatan resmi SKP tetap di kipApp. Excel bukan catatan resmi, dan Kinetik tidak mengambil alih peran itu.
[click] Rencana ke depan. Form kipApp menolak tanggal ke depan.
[click] Tetapi ada temuan penting. Server kipApp sebenarnya menerima kegiatan bertanggal ke depan, dan sudah kami uji pada SKP kami sendiri. Yang menolak hanya validasi di form. Kinetik memakai jalur itu, jadi rencana mingguan bisa ikut tercatat di kipApp.
-->

---

# Cara lama: Excel manual

<p class="lead">Satu pekerjaan yang sama dicatat dua kali, lalu di-copy berulang.</p>

<div class="flow">
<div v-click class="step old"><span class="n">1</span><b>Pegawai menulis</b>di kipApp dan di lembar Excel sendiri.</div>
<div v-click class="step old"><span class="n">2</span><b>PJ copy</b>isi lembar tiap anggota ke lembar rekap tim.</div>
<div v-click class="step old"><span class="n">3</span><b>Staf mengumpulkan</b>lembar semua tim.</div>
<div v-click class="step old"><span class="n">4</span><b>Bahan rapat disusun</b>manual, dengan angka berupa teks.</div>
<div v-click class="step old"><span class="n">5</span><b>Pimpinan membaca</b>lembar Excel tiap tim.</div>
</div>

<div v-click class="card warn" style="margin-top:1.6rem"><b>Lima langkah, semuanya manual.</b> Pekerjaan berulang, mudah salah copy, dan pimpinan baru melihat hasilnya setelah semua lembar terkumpul.</div>

<!--
Begini cara lama bekerja. Satu pekerjaan yang sama dicatat dua kali, lalu di-copy berulang. Ada lima langkah, dan semuanya dikerjakan manual.
[click] Pegawai menulis di kipApp dan juga di lembar Excel sendiri.
[click] PJ copy isi lembar tiap anggota ke lembar rekap tim.
[click] Staf mengumpulkan lembar semua tim.
[click] Bahan rapat disusun manual, dengan angka yang masih berupa teks.
[click] Terakhir, pimpinan membaca lembar Excel tiap tim.
[click] Jadi lima langkah, semuanya manual. Pekerjaan berulang, mudah salah copy, dan pimpinan baru melihat hasilnya setelah semua lembar terkumpul.
-->

---

# Cara baru: sekali catat, langsung terpantau

<p class="lead">Tetap lima tahap, tetapi dua di antaranya dikerjakan sistem.</p>

<div class="flow">
<div v-click class="step"><span class="n">1</span><b>Pegawai mencatat</b>sekali, di kipApp atau di Kinetik.</div>
<div v-click class="step auto"><span class="n">2</span><b>Sync</b>antara kipApp dan Kinetik.<span class="tag auto-tag">otomatis</span></div>
<div v-click class="step auto"><span class="n">3</span><b>Rekap Mingguan</b>tersusun per pegawai dan per tim.<span class="tag auto-tag">otomatis</span></div>
<div v-click class="step"><span class="n">4</span><b>PJ memeriksa</b>dan menulis satu parafrase per RK.</div>
<div v-click class="step goal"><span class="n">5</span><b>Pimpinan memantau</b>lewat panel "Perlu perhatian".</div>
</div>

<div v-click class="card ok" style="margin-top:1.6rem"><b>Dikerjakan manual: lima langkah menjadi tiga.</b> Dua tahap lain berjalan sendiri, jadi tidak ada copy-paste antarlembar dan masalah terlihat saat masih bisa diperbaiki.</div>

<!--
Sekarang cara baru. Tahapnya tetap lima, supaya mudah dibandingkan dengan slide tadi. Bedanya, dua tahap dikerjakan oleh sistem, bukan oleh orang.
[click] Pegawai mencatat sekali, di kipApp atau di Kinetik.
[click] Sync antara kipApp dan Kinetik. Ini otomatis, tidak ada yang mengerjakan manual.
[click] Rekap Mingguan tersusun sendiri, per pegawai dan per tim. Ini juga otomatis.
[click] PJ tidak lagi copy. PJ memeriksa, lalu menulis satu parafrase untuk setiap RK.
[click] Pimpinan memantau lewat panel Perlu perhatian.
[click] Jadi yang dikerjakan manual turun dari lima langkah menjadi tiga. Dua tahap lain berjalan sendiri, sehingga tidak ada copy-paste antarlembar, dan masalah terlihat saat masih bisa diperbaiki.
-->

---

# Pekerjaan berpindah dari tangan ke sistem

<p class="lead">Klik untuk melihat tiga pekerjaan PJ dan staf berpindah jalur.</p>

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span>

<div class="lanes">
  <div class="lane" style="grid-column:1/4;grid-row:1">Dulu: dikerjakan manual</div>
  <div class="lane auto" style="grid-column:1/3;grid-row:2">Kini: dikerjakan sistem</div>
  <div class="lane auto warnlane" style="grid-column:3;grid-row:2">Tetap oleh PJ, bahan sudah siap</div>
  <div class="chip c1" :class="{ moved: $clicks >= 1 }" style="grid-column:1;grid-row:1">Mengumpulkan kegiatan anggota</div>
  <div class="chip c1" :class="{ moved: $clicks >= 2 }" style="grid-column:2;grid-row:1">Menggabung rekap tim</div>
  <div class="chip c1 pj" :class="{ moved: $clicks >= 3 }" style="grid-column:3;grid-row:1">Menulis paragraf rekap</div>
</div>

<div v-click="4" class="card ok" style="margin-top:1.6rem"><b>Waktu PJ beralih</b> dari copy ke memeriksa dan menulis.</div>

<!--
Slide ini memperlihatkan pekerjaan yang berpindah. Tiga pekerjaan yang dulu dikerjakan manual.
[click] Mengumpulkan kegiatan anggota. Sekarang otomatis lewat sync dari kipApp.
[click] Menggabung rekap tim. Ini juga otomatis.
[click] Menulis paragraf rekap. Perhatikan, pekerjaan ini berwarna oranye karena tetap dikerjakan PJ. Itu memang perlu penilaian manusia, tetapi bahannya sudah siap dan cukup satu parafrase per RK.
[click] Jadi waktu PJ beralih dari copy ke memeriksa dan menulis. Kami sengaja tidak menyebut angka penghematan waktu karena belum kami ukur.
-->

---

# SOP anggota: catat sekali

<table class="cmp three">
<thead><tr><th style="width:20%">Kapan</th><th style="width:38%">Cara lama</th><th>Cara baru</th></tr></thead>
<tbody>
<tr v-click><td>Awal minggu, paling lambat Senin pukul 09.00</td><td>Menyiapkan rencana di lembar Excel sendiri</td><td>Mengisi rencana minggu ini di Rekap Mingguan: pilih RK, tulis uraian dan tanggal</td></tr>
<tr v-click><td>Selama minggu</td><td>Mencatat kegiatan di kipApp, lalu mengetik lagi di Excel</td><td>Mencatat sekali di kipApp atau Kinetik. Yang lain mengikuti lewat sync</td></tr>
<tr v-click><td>Akhir minggu</td><td>Mengetik target dan realisasi sebagai kalimat</td><td>Mengisi target dan capaian berupa angka, uraian, dan link bukti, lalu menandai selesai</td></tr>
<tr v-click><td>Menjelang rapat</td><td>Menyerahkan lembar kepada PJ</td><td>Tidak menyerahkan apa pun. PJ sudah melihat rekapnya</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Dipangkas:</b> lembar Excel pribadi, penyerahan lembar ke PJ, dan pengetikan ulang isi yang sama. <span class="small">Kirim hasil ke kipApp dari Kinetik masih tahap uji.</span></div>

<!--
Sekarang prosedur kerja untuk tiap peran, dimulai dari anggota.
[click] Awal minggu, paling lambat Senin pukul sembilan pagi, anggota mengisi rencana minggu ini di Rekap Mingguan. Dulu rencana ini disiapkan di lembar Excel sendiri.
[click] Selama minggu, anggota mencatat sekali, di kipApp atau Kinetik. Yang lain mengikuti lewat sync. Dulu dicatat dua kali.
[click] Akhir minggu, anggota mengisi target dan capaian berupa angka, uraian, dan link bukti. Dulu diketik sebagai kalimat.
[click] Menjelang rapat, tidak ada lagi lembar yang diserahkan ke PJ, karena PJ sudah melihat rekapnya.
[click] Yang dipangkas untuk anggota: lembar Excel pribadi, penyerahan lembar, dan pengetikan ulang. Fitur kirim hasil ke kipApp dari Kinetik masih tahap uji.
-->

---

# SOP PJ: memeriksa, bukan copy

<table class="cmp three">
<thead><tr><th style="width:20%">Kapan</th><th style="width:38%">Cara lama</th><th>Cara baru</th></tr></thead>
<tbody>
<tr v-click><td>Awal minggu</td><td>Menagih rencana anggota satu per satu</td><td>Membuka Kepatuhan Rencana dan tabel rencana anggota. Yang belum mengisi langsung terlihat</td></tr>
<tr v-click><td>Selama minggu</td><td>Menerima lembar dari tiap anggota</td><td>Melihat rencana dan kegiatan anggota di Rekap Mingguan tim</td></tr>
<tr v-click><td>Akhir minggu</td><td>Copy ke lembar rekap tim dan menghitung manual</td><td>Memeriksa angka yang sudah terkumpul per RK</td></tr>
<tr v-click><td>Menutup rekap</td><td>Menulis paragraf rekap di Excel</td><td>Menulis satu parafrase per RK (boleh menyisipkan kalimat anggota), mengisi target dan capaian RK, lalu mengunci</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Dipangkas:</b> menagih satu per satu, copy ke lembar rekap, dan menghitung manual. <b>Tetap oleh PJ:</b> menilai isi dan menulis parafrase.</div>

<!--
Untuk PJ.
[click] Awal minggu, PJ membuka Kepatuhan Rencana. Yang belum mengisi langsung terlihat, jadi PJ tidak perlu menagih satu per satu.
[click] Selama minggu, PJ melihat rencana dan kegiatan anggota di Rekap Mingguan tim, tanpa menunggu lembar dari anggota.
[click] Akhir minggu, PJ memeriksa angka yang sudah terkumpul per RK. Tidak ada lagi copy dan menghitung manual.
[click] Menutup rekap, PJ menulis satu parafrase untuk setiap RK. PJ boleh menyisipkan kalimat dari anggota, mengisi target dan capaian RK, lalu mengunci rekap.
[click] Yang dipangkas: menagih, copy, dan menghitung manual. Yang tetap dikerjakan PJ adalah yang memang perlu penilaian: memeriksa isi dan menulis parafrase.
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
<tr v-click><td>PJ</td><td>Menagih, copy ke lembar rekap, menghitung manual</td><td>Memeriksa angka, menulis parafrase per RK, mengunci rekap</td></tr>
<tr v-click><td>Pimpinan</td><td>Menunggu bahan disusun, membuka banyak lembar</td><td>Membaca monitoring, menulis Catatan Pimpinan, memutuskan tindak lanjut</td></tr>
</tbody>
</table>

<!--
Ringkasan satu layar.
[click] Anggota: tidak lagi punya lembar pribadi dan tidak mengetik ulang. Tetap mencatat kegiatan, mengisi target, capaian, dan bukti.
[click] PJ: tidak lagi menagih, copy, dan menghitung manual. Tetap memeriksa angka, menulis parafrase, dan mengunci rekap.
[click] Pimpinan: tidak lagi menunggu bahan dan membuka banyak lembar. Tetap membaca monitoring dan memutuskan tindak lanjut.
Intinya, pekerjaan copy dan tagih hilang, dan bagian yang perlu penilaian manusia tetap di tangan manusia.
-->

---

# Berapa langkah yang dipangkas

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<SopFlow :clicks="$clicks" />

<!--
Slide ini merangkum SOP tadi dalam satu gambar. Setiap kotak adalah satu langkah yang dikerjakan manual. Semuanya masih abu-abu karena ini cara lama.
[click] Anggota. Dari lima langkah, dua dicoret dan hilang: mengetik ulang kegiatan di Excel, dan menyerahkan lembar ke PJ. Dua langkah berubah menjadi isian di Kinetik. Tersisa tiga.
[click] PJ. Dari enam langkah, empat hilang: menerima lembar, copy, menghitung manual, dan menyerahkan lembar rekap. Satu langkah baru muncul, yaitu memeriksa angka per RK. Tersisa tiga.
[click] Pimpinan. Dari lima langkah, dua hilang: bertanya siapa yang belum mengisi, dan menunggu bahan FRA disusun. Sisanya berubah menjadi membaca langsung di layar. Tersisa tiga.
[click] Totalnya, enam belas langkah manual menjadi sembilan. Tujuh langkah dipangkas, sekitar empat puluh empat persen. Catatan: ini hitungan langkah dari SOP, bukan hitungan waktu. Kami belum mengukur waktunya.
-->

---

# Ritual baru: tiap Senin pagi

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span>

<MondayRitual :clicks="$clicks" />

<!--
Ini alur baru yang kami minta dari setiap tim. Setiap Senin pagi, ada satu ritual yang sama: mengevaluasi minggu lalu, dan merencanakan minggu ini.
[click] Pertama, Senin pagi, evaluasi minggu lalu. Anggota mengisi capaian dan bukti. PJ menulis parafrase per RK, lalu mengunci rekap.
[click] Kedua, masih Senin pagi, sebelum pukul sembilan: setiap anggota mengisi rencana kegiatan minggu ini di Rekap Mingguan.
[click] Ketiga, Selasa sampai Minggu, anggota bekerja dan mencatat sekali, di kipApp atau Kinetik. Auto sync, tidak ada copy-paste.
[click] Keempat, setelah pukul sembilan, pimpinan membuka Kepatuhan Rencana dan panel Perlu perhatian, untuk melihat siapa yang belum punya rencana.
[click] Lalu Senin berikutnya, siklusnya mulai lagi dari evaluasi minggu yang baru selesai. Slide-slide berikut adalah walkthrough tampilannya.
-->

---

# Anggota (1/2): Rekap Mingguan

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="member-weeks" :clicks="$clicks" />

<!--
Kita mulai dari sisi anggota. Ini halaman Rekap Mingguan milik satu anggota, dengan data nyata dari kipApp.
[click] Pertama, anggota memilih bulan, lalu minggunya. Tampilannya daftar dulu, jadi tidak perlu membuka banyak lembar.
[click] Kedua, kolom Kegiatan dan Capaian terisi menunjukkan berapa kegiatan minggu itu, dan berapa yang sudah ada capaiannya.
[click] Ketiga, kolom Terkirim ke atasan menunjukkan berapa kegiatan yang sudah dikirim ke kipApp.
[click] Keempat, status minggu. Belum ditulis artinya masih ada kegiatan yang belum diberi capaian.
-->

---

# Anggota (2/2): tambah kegiatan atau rencana

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<Shot id="member-add" :clicks="$clicks" />

<!--
Ini form untuk menambah kegiatan atau rencana. Bentuknya sengaja dibuat mirip form kipApp, supaya anggota tidak perlu belajar ulang.
[click] Pertama, anggota memilih RK dari daftar RK miliknya.
[click] Kedua, menulis kegiatan, atau mengambilnya dari List Aktivitas.
[click] Ketiga, ini yang penting: tanggal ke depan boleh diisi. Di form kipApp, ini ditolak, jadi di sinilah perencanaan jadi mungkin.
[click] Keempat, target, satuan, dan capaian berupa angka, jadi bisa dijumlahkan.
[click] Kelima, bukti dukung berupa link.
[click] Keenam, simpan. Fitur kirim ke kipApp dari sini masih tahap uji.
-->

---

# PJ (1/2): rekap minggu tim

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="pj-week-detail" :clicks="$clicks" />

<!--
Sekarang sisi PJ. Ini rekap satu minggu untuk satu tim, dengan data nyata tim MTI.
[click] Pertama, PJ memilih tim yang ia pimpin.
[click] Kedua, kegiatan semua anggota ada dalam satu tabel. Tidak ada lagi lembar Excel yang harus dikumpulkan.
[click] Ketiga, status tiap kegiatan, misalnya Terkirim ke atasan.
[click] Keempat, kalau masih butuh Excel untuk bahan rapat, tinggal download dari sini.
-->

---

# PJ (2/2): parafrase dan kunci

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="pj-paraphrase" :clicks="$clicks" />

<!--
Ini popup parafrase. PJ menulis satu parafrase untuk satu RK, dengan target dan capaian berupa angka.
[click] Pertama, di kiri ada kontribusi tiap anggota. PJ membaca, lalu bisa mengambil kalimatnya.
[click] Kedua, di kanan PJ menulis parafrase sendiri. Tidak ada isi otomatis, karena ini memang butuh penilaian PJ.
[click] Ketiga, target, satuan, dan capaian untuk RK itu, berupa angka.
[click] Keempat, simpan, atau simpan dan kunci supaya rekap tidak berubah lagi.
-->

---

# Pimpinan (1/4): Kepatuhan Rencana

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="head-compliance" :clicks="$clicks" />

<!--
Sekarang sisi pimpinan. Ini Kepatuhan Rencana, dengan data nyata semua tim.
[click] Pertama, aturannya jelas: batas pengisian rencana adalah Senin pukul sembilan pagi.
[click] Kedua, kartu Minggu ini menunjukkan berapa persen anggota yang sudah membuat rencana. Saat ini masih nol, karena belum ada tim yang memakai ritual ini.
[click] Ketiga, kartu Triwulan ini menunjukkan berapa persen rencana minggu lalu yang berakhir selesai.
[click] Keempat, tabel per tim per minggu. Warna merah artinya belum ada rencana. Dari sini pimpinan tahu tim mana yang perlu diingatkan.
-->

---

# Pimpinan (2/4): Perlu perhatian

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="head-overview" :clicks="$clicks" />

<!--
Ini panel Perlu perhatian di Review Bersama. Angkanya data nyata.
[click] Pertama, kegiatan yang belum punya target. Bulan ini ada enam.
[click] Kedua, kegiatan yang sudah selesai tapi belum ada capaiannya. Ada enam ratus empat puluh lima dalam enam puluh hari terakhir.
[click] Ketiga, anggota yang belum punya rencana minggu ini. Delapan puluh enam orang.
[click] Keempat, kenaikan pangkat atau jenjang. Daftar siapa yang siap atau hampir siap.
-->

---

# Pimpinan (3/4): Angka Kredit Tim

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="head-credit" :clicks="$clicks" />

<!--
Ini Angka Kredit Tim, celah yang tidak ada di kipApp. Dulu dihitung terpisah di spreadsheet.
[click] Pertama, filter status: Siap diusulkan, Hampir, Berjalan, Jenjang puncak, dan Bukan JF.
[click] Kedua, kolom Menuju menunjukkan pangkat atau jenjang berikutnya yang dituju tiap pegawai.
[click] Ketiga, angka kredit yang sudah terkumpul dibanding yang dibutuhkan.
[click] Keempat, statusnya. Siap diusulkan, atau Hampir. Dengan ini pimpinan tahu sejak dini siapa yang mendekati kenaikan pangkat.
-->

---

# Pimpinan (4/4): Kertas Kerja FRA

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="head-fra" :clicks="$clicks" />

<!--
Ini Kertas Kerja FRA, tempat nilai SAKIP. Dulu spreadsheet, sekarang form dengan rumus yang sama.
[click] Pertama, pilih triwulannya.
[click] Kedua, nilai SAKIP tahun ini.
[click] Ketiga, predikat SAKIP dihitung otomatis dari angka yang diisi.
[click] Keempat, tabel indikator: target, alokasi, realisasi, dan capaian per triwulan. Tim pemilik tiap indikator juga dicatat.
-->

---

# Semua peran: Struktur Organisasi

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<Shot id="org" :clicks="$clicks" />

<!--
Terakhir, Struktur Organisasi: pohon dari satker, tim, ketua, dan anggota. Ini data nyata kita.
[click] Pertama, kolom pencarian untuk mencari nama pegawai atau tim.
[click] Kedua, nama satker dan kepala selalu pinned di paling atas, seperti pohon organisasi di Workday.
[click] Ketiga, tim yang sedang dilihat ikut pinned di bawahnya, sambil daftar anggota digulir.
[click] Keempat, ketua tim ditandai. Dan kalau satu orang diklik, kelihatan di tim mana saja ia berada, karena satu pegawai bisa ada di beberapa tim.
-->

---

# Yang sudah dikerjakan kipApp

<p class="lead">Kami memeriksa kipApp dengan akun anggota pada 18 Oktober 2026.</p>

<div class="grid3 compact">
<div v-click class="card"><b>Perencanaan</b><br><span class="small">Renstra, Perjanjian Kinerja, Rencana Kinerja (tim kerja, RK ketua, proyek, RK anggota, matriks), SKP Tahunan dan Periodik, IKI dan Target.</span></div>
<div v-click class="card"><b>Pelaksanaan</b><br><span class="small">Kegiatan harian per pegawai: pilih pegawai, tahun, periode SKP, dan rencana kinerja. Ada download Excel.</span></div>
<div v-click class="card"><b>Penilaian</b><br><span class="small">Hasil Kerja, Rekap Prestasi Periodik dan Tahunan: rata-rata hasil kerja, perilaku, predikat, dan nilai prestasi per pegawai.</span></div>
</div>

<div v-click class="card ok" style="margin-top:.8rem"><b>kipApp adalah catatan resmi yang lengkap untuk perorangan.</b> Kinetik tidak mengulang itu. Kinetik menambahkan tampilan tingkat tim dan satuan kerja yang tidak ada di sana.</div>

<!--
Sebelum bicara kekurangan, kami ingin adil kepada kipApp. Kami memeriksa kipApp dengan akun anggota pada 18 Oktober 2026.
[click] Untuk perencanaan, kipApp lengkap: renstra, perjanjian kinerja, rencana kinerja tim, SKP tahunan dan periodik, serta IKI dan target.
[click] Untuk pelaksanaan, kipApp mencatat kegiatan harian per pegawai. Ada juga download Excel.
[click] Untuk penilaian, ada rekap prestasi periodik dan tahunan: nilai hasil kerja, perilaku, predikat, dan nilai prestasi per pegawai.
[click] Jadi kipApp adalah catatan resmi yang lengkap untuk perorangan. Kinetik tidak mengulang itu. Kinetik menambahkan tampilan tingkat tim dan satuan kerja yang tidak ada di sana. Satu catatan jujur: kami memeriksa dengan akun anggota, jadi menu khusus pimpinan atau admin tidak kami lihat.
-->

---

# Yang belum ada di kipApp: monitoring mingguan

<table class="cmp">
<thead><tr><th style="width:50%">kipApp saat ini</th><th>Kinetik menambahkan</th></tr></thead>
<tbody>
<tr v-click><td>Kegiatan dilihat per pegawai, tidak ada rekap mingguan tingkat tim</td><td>Rekap Mingguan, Bulanan, dan Triwulanan</td></tr>
<tr v-click><td>Tidak ada parafrase PJ per RK</td><td>Satu parafrase PJ untuk setiap RK</td></tr>
<tr v-click><td>Target dan realisasi hanya teks di dalam indikator</td><td>Target dan capaian berupa angka per RK</td></tr>
<tr v-click><td>Form menolak rencana bertanggal ke depan, padahal server menerimanya</td><td>Rencana mingguan tersimpan, dan bisa dikirim ke kipApp</td></tr>
<tr v-click><td>Tidak ada peringatan dini bagi pegawai tanpa rencana</td><td>Kepatuhan Rencana dan panel "Perlu perhatian"</td></tr>
</tbody>
</table>

<!--
Sekarang apa yang belum ada. Lima hal untuk monitoring mingguan.
[click] Kegiatan di kipApp dilihat per pegawai. Tidak ada rekap mingguan tingkat tim. Kinetik menambahkan rekap mingguan, bulanan, dan triwulanan.
[click] Tidak ada parafrase PJ per RK. Kinetik menyediakan satu parafrase untuk setiap RK.
[click] Target dan realisasi hanya teks di dalam indikator. Kinetik menyimpannya sebagai angka per RK.
[click] Form kipApp menolak rencana bertanggal ke depan, padahal server menerimanya. Kinetik menyimpan rencana mingguan dan bisa mengirimnya ke kipApp.
[click] Tidak ada peringatan dini bagi pegawai tanpa rencana. Kinetik punya Kepatuhan Rencana dan panel Perlu perhatian.
-->

---

# Dua celah lain: angka kredit dan nilai SAKIP

<table class="cmp">
<thead><tr><th style="width:36%">Yang tidak ada di kipApp</th><th style="width:30%">Cara lama</th><th>Di Kinetik</th></tr></thead>
<tbody>
<tr v-click><td><b>Angka kredit:</b> kipApp hanya menampilkan nilai prestasi per pegawai. Tidak ada angka kredit dan kesiapan naik pangkat</td><td>Dihitung terpisah di spreadsheet</td><td><b>Angka Kredit Tim.</b> Pimpinan melihat siapa yang sudah siap, hampir siap, atau masih berjalan menuju pangkat berikutnya</td></tr>
<tr v-click><td><b>FRA dan nilai SAKIP:</b> tidak ada form-nya di kipApp</td><td>Kertas Kerja di spreadsheet, rumus dijaga manual</td><td><b>Kertas Kerja FRA.</b> Isi realisasi tiap indikator per triwulan, nilai SAKIP dan predikat dihitung otomatis</td></tr>
</tbody>
</table>

<div v-click class="card ok" style="margin-top:.8rem"><b>Pimpinan kini bisa melihat sejak dini siapa yang mendekati kenaikan pangkat,</b> dan nilai SAKIP tersusun dari angka yang sama dengan rekap bulanan, tanpa copy ulang ke spreadsheet.</div>

<!--
Dua celah lagi yang penting bagi pimpinan.
[click] Pertama, angka kredit. kipApp menampilkan nilai prestasi per pegawai, tetapi tidak menampilkan angka kredit dan kesiapan naik pangkat. Dulu ini dihitung terpisah di spreadsheet. Di Kinetik ada Angka Kredit Tim. Pimpinan bisa melihat siapa yang sudah siap, hampir siap, atau masih berjalan menuju pangkat berikutnya.
[click] Kedua, FRA dan nilai SAKIP. kipApp tidak punya form-nya. Dulu kami memakai Kertas Kerja di spreadsheet, dengan rumus yang dijaga manual. Di Kinetik, kami menulis ulang rumus Kertas Kerja itu menjadi form. Realisasi tiap indikator diisi per triwulan, dan nilai SAKIP beserta predikatnya dihitung otomatis.
[click] Dampaknya, pimpinan bisa melihat sejak dini siapa yang mendekati kenaikan pangkat, dan nilai SAKIP tersusun dari angka yang sama dengan rekap bulanan, tanpa copy ulang.
-->

---

# Apa yang dilihat pimpinan di Kinetik

<div class="grid3" style="margin-top:1rem">
<div v-click class="card"><b>Rekap Mingguan, Bulanan, Triwulanan</b><br><span class="small">Daftar dulu: bulan, lalu minggu, lalu satu minggu.</span></div>
<div v-click class="card"><b>Kepatuhan Rencana</b><br><span class="small">Siapa yang sudah punya rencana tiap minggu.</span></div>
<div v-click class="card warn"><b>Perlu perhatian</b><br><span class="small">Target atau capaian kosong, gagal kirim ke kipApp, belum ada rencana, rekap belum selesai, dan kesiapan kenaikan pangkat.</span></div>
<div v-click class="card"><b>Angka Kredit Tim dan Kertas Kerja FRA</b><br><span class="small">Kesiapan kenaikan pangkat dan nilai SAKIP satuan kerja.</span></div>
<div v-click class="card"><b>Struktur Organisasi</b><br><span class="small">Pohon satker, tim, ketua, dan anggota. Saat digulir, induknya tetap pinned di atas seperti Workday.</span></div>
<div v-click class="card"><b>Lihat sebagai</b><br><span class="small">Admin melihat tampilan tiap peran, hanya baca, untuk membantu pengguna.</span></div>
</div>

<!--
Ini yang bisa dibuka pimpinan di Kinetik. Ada enam hal.
[click] Rekap mingguan, bulanan, dan triwulanan. Berupa daftar dulu: pilih bulan, lalu minggu, lalu satu minggu.
[click] Kepatuhan Rencana, untuk melihat siapa yang sudah punya rencana setiap minggu.
[click] Perlu perhatian. Ini yang paling berguna: ia menunjuk target atau capaian yang kosong, kegiatan yang gagal terkirim ke kipApp, pegawai tanpa rencana, rekap yang belum selesai, dan kesiapan naik pangkat.
[click] Angka Kredit Tim dan Kertas Kerja FRA, untuk kenaikan pangkat dan nilai SAKIP.
[click] Struktur Organisasi, berupa pohon satker, tim, ketua, dan anggota. Saat daftar digulir, nama satker dan tim yang sedang dilihat tetap pinned di atas, seperti di Workday.
[click] Lihat sebagai. Fitur ini untuk admin: melihat tampilan tiap peran dalam mode hanya baca, supaya bisa membantu pengguna tanpa bisa mengubah data.
-->

---

# Cara kami menemukan API kipApp

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span>

<ApiDiscovery :clicks="$clicks" />

<div v-click="5" class="card ok" style="margin-top:.8rem;font-size:.85rem;line-height:1.3"><b>Tanpa dokumentasi resmi,</b> kami tetap tahu endpoint mana yang dipakai kipApp sendiri untuk baca dan kirim data. Endpoint yang menulis data baru kami pakai setelah dicoba di SKP sendiri.</div>

<!--
Pertanyaan yang sering muncul: dari mana kami tahu endpoint API kipApp, kalau tidak ada dokumentasi resmi?
[click] Waktu pertama kali membuka kipApp di browser, tab Network di DevTools menampilkan semua file yang di-download. Ada HTML, CSS, dan beberapa file JavaScript.
[click] Salah satunya adalah bundle. Bundle ini isi aplikasi yang sebenarnya, yaitu program yang berjalan di browser kita.
[click] Bundle itu sudah dikompilasi, jadi sulit dibaca. Tapi kami bisa decompile dengan bantuan AI, dan hasilnya kode yang bisa dibaca lagi.
[click] Dari kode itu kami mendapat daftar endpoint untuk kirim dan baca data. Totalnya ada seratus tujuh puluh satu endpoint.
[click] Jadi walaupun tidak ada dokumentasi resmi, kami tahu persis endpoint yang dipakai kipApp sendiri. Endpoint yang menulis data baru kami pakai setelah dicoba di SKP kami sendiri.
-->

---

# Tantangan 1: tidak ada pintu resmi ke kipApp

<p class="lead">Cara pertama: token di-copy manual oleh admin.</p>

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<SyncFlow mode="manual" :clicks="$clicks" />

<div v-click="7" class="card warn" style="margin-top:.7rem;font-size:.9rem"><b>Kelemahannya:</b> bergantung pada satu orang, dan sync berhenti begitu token habis.</div>

<!--
Tantangan pertama: kipApp tidak membuka pintu resmi bagi sistem lain. Gambar ini menunjukkan cara pertama kami. Oranye berarti dikerjakan manual, biru berarti dikerjakan sistem.
[click] Admin login ke kipApp lewat SSO.
[click] Admin membuka DevTools di browser, dan di sana token muncul.
[click] Admin copy token yang panjang itu, lalu paste-nya di Kinetik.
[click] Barulah Kinetik bisa meminta data ke kipApp memakai token tersebut. Bagian ini otomatis.
[click] Data kegiatan masuk ke Kinetik.
[click] Tetapi token itu hanya berlaku dua puluh empat jam. Besok admin harus mengulang dari awal.
[click] Kelemahannya jelas: bergantung pada satu orang, dan sync berhenti begitu token habis.
-->

---

# Cara akhir: login sekali, token otomatis

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span>

<SyncFlow mode="auto" :clicks="$clicks" />

<div v-click="7" class="card ok" style="margin-top:.7rem;font-size:.82rem;line-height:1.3"><b>Hasilnya:</b> tidak ada copy-paste token. Password disimpan terenkripsi dan tidak pernah ditampilkan lagi. Saat admin kipApp login, token bersama untuk seluruh satuan kerja ikut diperbarui.</div>

<!--
Karena itu kami mencari cara lain, dan inilah cara akhir yang kami pilih. Kami menemukan jalur dari SSO yang bisa dipakai untuk membaca kipApp dan menghubungkannya ke sistem kami.
[click] Pegawai login ke Kinetik dengan password SSO, cukup satu kali. Ini satu-satunya langkah manual.
[click] Kinetik login ke SSO atas nama pegawai.
[click] SSO mengesahkan, dan kipApp memberikan token.
[click] Token tersimpan terenkripsi di Kinetik.
[click] Kinetik mengambil data seluruh pegawai dari kipApp.
[click] Saat token habis, Kinetik login ulang sendiri memakai password yang tersimpan. Tidak ada yang perlu copy apa pun.
[click] Hasilnya, tidak ada copy-paste token. Password disimpan terenkripsi dan tidak pernah ditampilkan lagi. Dan saat admin kipApp login, token bersama untuk seluruh satuan kerja ikut diperbarui.
-->

---

# Tantangan 2: jalur resmi butuh domain .bps.go.id dan birokrasi yang lama

<div class="grid2" style="margin-top:1rem">
<div v-click class="card warn"><b>Syaratnya</b><br><span class="small">Untuk minta API resmi dan akun client SSO, aplikasi harus berada di domain <b>.bps.go.id</b>. Kinetik sekarang ada di <b>bpssulteng.id</b>, bukan domain resmi itu.</span></div>
<div v-click class="card warn"><b>Birokrasinya</b><br><span class="small">Subdomain .bps.go.id harus disetujui Kantor Pusat. Prosesnya berlapis dan memakan waktu lama.</span></div>
</div>

<div v-click class="card ok" style="margin-top:.8rem"><b>Karena itu kami pakai workaround.</b> Sambil menunggu jalur resmi, Kinetik tetap jalan dengan cara akhir tadi, supaya tim tidak menunggu berbulan-bulan.</div>

<div v-click class="card" style="margin-top:.8rem"><b>Risikonya:</b> workaround ini bergantung pada SSO lama. Begitu SSO baru aktif, workaround berhenti, dan jalur resmi jadi satu-satunya jalan.</div>

<!--
Kenapa tidak langsung minta akses resmi saja? Ada dua hambatan.
[click] Pertama, syaratnya. API resmi dan akun client SSO mensyaratkan aplikasi berada di domain dot bps dot go dot id. Kinetik sekarang ada di bpssulteng dot id, jadi belum memenuhi.
[click] Kedua, birokrasinya. Subdomain dot bps dot go dot id harus disetujui Kantor Pusat, dan prosesnya berlapis serta memakan waktu lama.
[click] Karena itu kami memakai workaround. Sambil menunggu jalur resmi, Kinetik tetap jalan, supaya tim tidak menunggu berbulan-bulan.
[click] Risikonya, workaround ini bergantung pada SSO lama. Begitu SSO baru aktif, workaround berhenti, dan jalur resmi jadi satu-satunya jalan.
-->

---

# Kekhawatiran: SSO baru menghentikan cara kedua

<div class="grid2" style="margin-top:1rem">
<div v-click class="card"><b>Sekarang</b><br><span class="small">SSO lama masih bisa dimasuki otomatis. Cara kedua berjalan.</span></div>
<div v-click class="card warn"><b>Desember 2026</b><br><span class="small">Semua aplikasi BPS pindah ke SSO baru (accounts.bps.go.id) yang memakai captcha dan passkey. Server tidak bisa masuk sendiri.</span></div>
</div>

<div class="grid2" style="margin-top:.6rem">
<div v-click class="card warn"><b>Bila tidak ada tindakan</b><br><span class="small">Cara kedua berhenti. Setiap orang harus copy token sendiri manual, setiap hari. Lebih berat daripada cara pertama, yang dulu hanya dikerjakan admin.</span></div>
<div v-click class="card ok"><b>Bila ada akses resmi</b><br><span class="small">Kinetik terdaftar sebagai client SSO, dan tetap otomatis. Syaratnya domain .bps.go.id, dan subdomain itu perlu persetujuan Kantor Pusat.</span></div>
</div>

<!--
Sekarang bagian yang kami khawatirkan, dan ini alasan permintaan ketiga saya nanti.
[click] Saat ini SSO lama masih bisa dimasuki secara otomatis, jadi cara kedua berjalan.
[click] Pada Desember 2026, semua aplikasi BPS pindah ke SSO baru. SSO baru memakai captcha dan passkey. Artinya, sistem seperti Kinetik tidak bisa lagi masuk sendiri.
[click] Kalau tidak ada tindakan, cara kedua berhenti. Setiap orang yang memakai Kinetik harus copy token sendiri manual, setiap hari. Itu lebih berat daripada cara pertama, yang dulu hanya dikerjakan oleh admin.
[click] Jalan keluarnya adalah akses resmi: Kinetik didaftarkan sebagai client SSO. Syaratnya domain dot bps dot go dot id, dan subdomain itu perlu persetujuan Kantor Pusat. Karena itu kami butuh dukungan Bapak dan Ibu.
-->

---

# Tantangan 3: data nyata tidak rapi

<div class="grid2" style="margin-top:1rem">
<div class="card warn"><b>Tantangan</b><br>Data dari kipApp tidak selalu rapi: link bukti ada yang sangat panjang, dan sebagian kegiatan tidak punya RK atau tim.</div>
<div v-click class="card ok"><b>Solusi</b><br>Link bukti yang panjang sekarang disimpan utuh. Kegiatan yang punya RK dan tim di-import jadi baris mingguan, sisanya di-skip tanpa merusak data lain.</div>
</div>

<div v-click class="card" style="margin-top:1rem"><span class="big">9.756</span> kegiatan kipApp di-import jadi <span class="big">9.187</span> baris mingguan. Sekitar 570 di-skip karena tidak punya RK atau tim.</div>

<!--
Tantangan berikutnya: data nyata tidak selalu rapi. Link bukti ada yang sangat panjang, dan sebagian kegiatan tidak punya RK atau tim.
[click] Solusi kami: link bukti yang panjang disimpan utuh, dan hanya kegiatan yang punya RK dan tim yang di-import jadi baris mingguan. Sisanya di-skip tanpa merusak data lain.
[click] Angkanya: dari 9.756 kegiatan kipApp, 9.187 menjadi baris mingguan. Sekitar 570 di-skip.
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
<div class="card"><span class="big">9.756</span><br>kegiatan kipApp ter-sync</div>
</div>

<div class="card ok" style="margin-top:.8rem"><span class="tag">Berjalan</span> &nbsp;Aplikasi aktif di <b>kinetik.bpssulteng.id</b> sejak Oktober 2026.</div>
<div class="card warn"><span class="tag p">Perlu tindakan</span> &nbsp;Sync berhenti sampai admin kipApp login dan token baru tersimpan.</div>
<div class="card warn"><span class="tag p">Belum</span> &nbsp;Belum ada tim yang memakainya. Tahap berikutnya adalah pilot.</div>

<!--
Saya sampaikan status apa adanya.
Aplikasi aktif di kinetik titik bpssulteng titik id sejak Oktober 2026. Datanya mencakup delapan puluh tujuh pegawai satuan kerja kita, dua puluh lima tim, dan sembilan ribu tujuh ratus lima puluh enam kegiatan kipApp yang sudah ter-sync.
Dua hal perlu saya katakan jujur. Pertama, sync sedang berhenti sampai admin kipApp login dan token baru tersimpan. Kedua, belum ada tim yang memakainya. Tahap berikutnya adalah pilot.
-->

---

# Langkah berikutnya (rencana)

<div class="flow" style="margin-top:1.2rem">
<div v-click class="step goal"><span class="n">1</span><b>Domain .bps.go.id</b>yang resmi untuk Kinetik.</div>
<div v-click class="step goal"><span class="n">2</span><b>Akun client resmi</b>di SSO baru, supaya integrasi tetap otomatis.</div>
<div v-click class="step goal"><span class="n">3</span><b>Pilot</b>2 sampai 3 tim, dan kirim ke kipApp setelah uji langsung berhasil.</div>
<div v-click class="step goal"><span class="n">4</span><b>Login lokal</b>sebagai cadangan, sebelum SSO baru Desember 2026.</div>
<div v-click class="step goal"><span class="n">5</span><b>Pelatihan</b>pakai Buku Pedoman di dalam aplikasi.</div>
</div>

<p class="small" style="margin-top:1.6rem">Semua butir di atas masih rencana. Butir 1 dan 2 menentukan apakah integrasi tetap otomatis setelah SSO baru aktif.</p>

<!--
Ini langkah berikutnya. Semuanya masih rencana.
[click] Pertama, domain dot bps dot go dot id yang resmi untuk Kinetik.
[click] Kedua, akun client resmi di SSO baru. Dua hal ini yang membuat integrasi tetap otomatis setelah SSO baru aktif. Tanpa keduanya, setiap orang harus copy-paste token sendiri.
[click] Ketiga, pilot di dua sampai tiga tim, dan fitur kirim ke kipApp baru dinyalakan setelah uji langsung berhasil.
[click] Keempat, login lokal sebagai cadangan sebelum SSO baru Desember 2026. Ini belum dibuat.
[click] Kelima, pelatihan pakai Buku Pedoman yang ada di dalam aplikasi.
-->

---

# Tiga permintaan kepada pimpinan

<div class="card" v-click><span class="big" style="font-size:1.8rem">1</span> &nbsp;<b>Tentukan tim pilot.</b> Dua sampai tiga tim.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">2</span> &nbsp;<b>Dukung ritme mingguan.</b> Rencana diisi paling lambat Senin pukul 09.00. PJ menyusun rekap.</div>
<div class="card" v-click><span class="big" style="font-size:1.8rem">3</span> &nbsp;<b>Dukung pengajuan ke Kantor Pusat:</b> domain .bps.go.id yang resmi dan akun client resmi untuk SSO baru, supaya integrasi tetap otomatis.</div>

<!--
Kami meminta tiga hal dari Bapak dan Ibu.
[click] Satu, tentukan tim pilot, dua sampai tiga tim.
[click] Dua, dukung ritme mingguan: rencana diisi paling lambat Senin pukul sembilan pagi, dan PJ menyusun rekap.
[click] Tiga, dukung pengajuan ke Kantor Pusat untuk domain dot bps dot go dot id yang resmi dan akun client resmi untuk SSO baru. Dengan itu, integrasi Kinetik tetap otomatis setelah SSO baru aktif. Tanpa itu, setiap orang harus copy-paste token sendiri.
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
Terima kasih, Bapak dan Ibu. Kami siap menjawab pertanyaan, atau demo aplikasinya langsung.
-->
