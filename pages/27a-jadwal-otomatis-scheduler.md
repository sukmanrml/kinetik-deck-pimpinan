# Yang berjalan sendiri: jadwal otomatis

<table class="cmp three">
<thead><tr><th style="width:24%">Kapan (WITA)</th><th style="width:34%">Pekerjaan</th><th>Hasilnya</th></tr></thead>
<tbody>
<tr v-click><td>Harian 04.30 sampai 05.00</td><td>Sync struktur, verifikasi satker, RK, lalu kegiatan harian dari kipApp</td><td>Data tim dan kegiatan sudah baru sebelum jam kerja</td></tr>
<tr v-click><td>Harian 06.00</td><td>RTL triwulan lalu dibuat jadi rencana</td><td>Rencana awal triwulan terisi sendiri</td></tr>
<tr v-click><td>Senin 05.30</td><td>Sync angka kredit dan predikat SKP</td><td>Angka Kredit Tim tetap terbaru</td></tr>
<tr v-click><td>Senin 09.00</td><td>Pengingat bagi yang belum punya rencana</td><td>Notifikasi ke anggota dan PJ-nya</td></tr>
<tr v-click><td>Tiap 10 menit</td><td>Cek token kipApp yang hampir expired</td><td>Admin diberi tahu sebelum sync berhenti</td></tr>
<tr v-click><td>Tiap jam, 05.10 sampai 18.10</td><td>Kirim rencana yang tanggalnya sudah tiba ke kipApp</td><td>Yang gagal dicoba lagi. Masih tahap uji</td></tr>
</tbody>
</table>

<div v-click class="card" style="margin-top:.8rem"><b>Cara menjalankannya:</b> hosting kami tidak punya cron biasa. Task Scheduler di panel hosting memanggil <code>schedule:run</code> tiap 5 menit, dan Kinetik sendiri yang memutuskan pekerjaan mana yang sudah waktunya. Semua sync bergantung pada token kipApp, jadi saat token expired, sync berhenti sampai ada yang login lagi.</div>

<!--
Selain yang dikerjakan orang, ada pekerjaan yang berjalan sendiri menurut jadwal. Semua jam di sini WITA.
[click] Tiap pagi, mulai setengah lima sampai jam lima, Kinetik mengambil struktur tim, memverifikasi bahwa hanya pegawai satker kita yang dipakai, lalu mengambil RK dan kegiatan harian dari kipApp. Jadi sebelum jam kerja, datanya sudah baru.
[click] Jam enam pagi, RTL dari triwulan lalu dibuat menjadi rencana kerja, sekali saja untuk tiap rekap.
[click] Tiap Senin jam setengah enam, angka kredit dan predikat SKP disinkronkan. Datanya jarang berubah, jadi seminggu sekali cukup.
[click] Senin jam sembilan, pengingat dikirim ke anggota yang belum punya rencana, dan ringkasannya ke PJ.
[click] Tiap sepuluh menit, Kinetik mengecek token kipApp. Kalau hampir expired, admin diberi tahu lebih dulu.
[click] Tiap jam kerja, rencana yang tanggalnya sudah tiba dikirim ke kipApp. Kalau gagal, dicoba lagi. Bagian ini masih tahap uji.
[click] Soal cara menjalankannya: hosting kami tidak punya cron biasa, jadi Task Scheduler di panel hosting memanggil perintah schedule run tiap lima menit. Semua sync bergantung pada token kipApp, jadi kalau token expired, sync berhenti sampai ada yang login lagi.
-->
