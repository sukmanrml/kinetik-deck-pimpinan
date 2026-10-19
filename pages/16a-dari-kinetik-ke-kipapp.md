# Dari Kinetik ke kipApp: kirim, batal, hapus

<p class="lead">Satu kegiatan melewati lima keadaan. Setiap langkah berikutnya hanya tampil bila memang bisa dilakukan.</p>

<div class="flow">
<div v-click class="step"><span class="n">1</span><b>Direncanakan</b>ada di Kinetik saja. Boleh diubah atau dibatalkan.</div>
<div v-click class="step auto"><span class="n">2</span><b>Ada di kipApp</b>dikirim otomatis pada tanggal mulai, atau tekan "Kirim ke kipApp". SKP triwulan dibuat dulu bila belum ada.<span class="tag auto-tag">otomatis</span></div>
<div v-click class="step"><span class="n">3</span><b>Berjalan, lalu selesai</b>anggota mengisi capaian dan menekan "Tandai selesai". Progres 100 dikirim ke kipApp.</div>
<div v-click class="step goal"><span class="n">4</span><b>Terkirim ke atasan</b>tombol "Kirim ke atasan", satu per satu atau banyak sekaligus. Atasan baru bisa menilai setelah ini.</div>
<div v-click class="step"><span class="n">5</span><b>Batal kirim atau hapus</b>"Batalkan kirim" mengembalikan ke langkah 3. "Hapus kegiatan" hanya untuk yang belum terkirim.</div>
</div>

<div v-click class="card warn" style="margin-top:1.2rem"><b>Aturannya sama dengan kipApp.</b> Setelah SKP triwulan dikirim untuk dinilai, kegiatannya terkunci dan alasannya tampil di detail. Kegiatan di masa depan hanya dikirim pada tanggal mulainya.</div>

<!--
Ini alur satu kegiatan dari Kinetik sampai ke atasan di kipApp.
[click] Pertama, kegiatan direncanakan. Ia baru ada di Kinetik, jadi masih boleh diubah atau dibatalkan.
[click] Kedua, pada tanggal mulai Kinetik mengirimnya ke kipApp, otomatis, atas nama anggota. Kalau SKP triwulan belum ada, Kinetik membuatnya dulu dari SKP Tahunan, seperti tombol Buat SKP Periodik di kipApp. Anggota juga bisa menekan Kirim ke kipApp lebih awal.
[click] Ketiga, anggota mengisi capaian dan menekan Tandai selesai. Progres seratus persen dikirim ke kipApp.
[click] Keempat, Kirim ke atasan. Bisa satu per satu atau banyak sekaligus. Setelah ini atasan bisa menilai.
[click] Kelima, kalau perlu ditarik kembali: Batalkan kirim mengembalikan kegiatan ke langkah tiga, dan Hapus kegiatan menghapusnya juga di kipApp, tetapi hanya untuk yang belum terkirim.
[click] Aturannya sama dengan kipApp. Begitu SKP triwulan dikirim untuk dinilai, kegiatannya terkunci. Kirim, batal kirim, dan hapus sudah kami uji langsung pada kegiatan sementara di SKP kami sendiri. Pembuatan SKP triwulan otomatis belum pernah diuji langsung, jadi kami amati di pilot.
-->
