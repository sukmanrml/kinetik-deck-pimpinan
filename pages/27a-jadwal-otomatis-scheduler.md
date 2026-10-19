# Yang berjalan sendiri: jadwal otomatis

<table class="cmp three">
<thead><tr><th style="width:24%">Kapan (WITA)</th><th style="width:34%">Pekerjaan</th><th>Hasilnya</th></tr></thead>
<tbody>
<tr v-click><td>Harian 04.30 sampai 05.00</td><td>Sync struktur, verifikasi satker, RK, lalu kegiatan harian dari kipApp</td><td>Data tim dan kegiatan sudah baru sebelum jam kerja</td></tr>
<tr v-click><td>Harian 05.20</td><td>Setiap anggota menyinkronkan data sendiri lewat antrean, dengan sesi kipApp-nya. SSO mati: dicoba lagi tiap 30 menit</td><td>Tidak bergantung pada satu token admin</td></tr>
<tr v-click><td>Harian 06.00</td><td>RTL triwulan lalu dibuat jadi rencana</td><td>Rencana awal triwulan terisi sendiri</td></tr>
<tr v-click><td>Senin 05.30</td><td>Sync angka kredit dan predikat SKP</td><td>Angka Kredit Tim tetap terbaru</td></tr>
<tr v-click><td>Senin 09.00</td><td>Pengingat bagi yang belum punya rencana</td><td>Notifikasi ke anggota dan PJ-nya</td></tr>
<tr v-click><td>Tiap 10 menit</td><td>Cek token kipApp yang hampir expired</td><td>Admin diberi tahu sebelum sync berhenti</td></tr>
<tr v-click><td>Tiap jam, 05.10 sampai 18.10</td><td>Kirim rencana yang tanggalnya sudah tiba ke kipApp</td><td>Yang gagal dicoba lagi sampai tanggal selesai</td></tr>
</tbody>
</table>

<div v-click class="card" style="margin-top:.6rem;font-size:.82rem;line-height:1.3"><b>Cara menjalankannya:</b> Task Scheduler di panel hosting memanggil <code>schedule:run</code> tiap 5 menit, dan antrean dijalankan dari situ. <b>Sesi kipApp anggota berakhir?</b> Kinetik memperbaruinya dengan kata sandi SSO yang tersimpan. Kalau tidak bisa (kata sandi ditolak, akun OTP), anggota masuk daftar tunggu dan diberi tahu sekali. Begitu ia masuk lagi ke Kinetik, sinkronisasinya langsung jalan.</div>

<!--
Selain yang dikerjakan orang, ada pekerjaan yang berjalan sendiri menurut jadwal. Semua jam di sini WITA.
[click] Tiap pagi, mulai setengah lima sampai jam lima, Kinetik mengambil struktur tim, memverifikasi bahwa hanya pegawai satker kita yang dipakai, lalu mengambil RK dan kegiatan harian dari kipApp. Jadi sebelum jam kerja, datanya sudah baru.
[click] Jam enam pagi, RTL dari triwulan lalu dibuat menjadi rencana kerja, sekali saja untuk tiap rekap.
[click] Mulai jam lima lewat dua puluh, setiap anggota menyinkronkan datanya sendiri lewat antrean, memakai sesi kipApp miliknya. Jadi sinkronisasi tidak lagi bergantung pada satu token admin. Kalau BPS SSO sedang mati, dicoba lagi tiap tiga puluh menit.
[click] Tiap Senin jam setengah enam, angka kredit dan predikat SKP disinkronkan. Datanya jarang berubah, jadi seminggu sekali cukup.
[click] Senin jam sembilan, pengingat dikirim ke anggota yang belum punya rencana, dan ringkasannya ke PJ.
[click] Tiap sepuluh menit, Kinetik mengecek token kipApp. Kalau hampir expired, admin diberi tahu lebih dulu.
[click] Tiap jam kerja, rencana yang tanggalnya sudah tiba dikirim ke kipApp. Kalau gagal, dicoba lagi sampai tanggal selesai. Termasuk membuat SKP triwulan baru bila belum ada.
[click] Soal cara menjalankannya: Task Scheduler di panel hosting memanggil perintah schedule run tiap lima menit, dan antrean dijalankan dari situ. Kalau sesi kipApp seorang anggota berakhir, Kinetik memperbaruinya dengan kata sandi SSO yang tersimpan. Kalau itu tidak bisa, misalnya kata sandi ditolak atau akunnya memakai OTP, anggota masuk daftar tunggu dan diberi tahu sekali lewat lonceng. Begitu ia masuk lagi ke Kinetik, sinkronisasinya yang menunggu langsung berjalan.
-->
