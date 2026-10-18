# Cara kami menemukan API kipApp: isi bundle

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span>

<ApiDiscovery :clicks="$clicks + 2" />

<div v-click="3" class="card ok" style="margin-top:.8rem;font-size:.85rem;line-height:1.3"><b>Tanpa dokumentasi resmi,</b> kami tetap tahu endpoint mana yang dipakai kipApp sendiri untuk baca dan kirim data. Endpoint yang menulis data baru kami pakai setelah dicoba di SKP sendiri.</div>

<!--
Dari file-file tadi, kami lanjut ke isinya. Di kiri, file yang di-download dan bundle-nya, di tengah isi bundle.
[click] Bundle itu sudah dikompilasi, jadi sulit dibaca. Tapi kami bisa decompile dengan bantuan AI, dan hasilnya kode yang bisa dibaca lagi.
[click] Dari kode itu kami mendapat daftar endpoint untuk kirim dan baca data. Totalnya ada seratus tujuh puluh satu endpoint.
[click] Jadi walaupun tidak ada dokumentasi resmi, kami tahu persis endpoint yang dipakai kipApp sendiri. Endpoint yang menulis data baru kami pakai setelah dicoba di SKP kami sendiri.
-->
