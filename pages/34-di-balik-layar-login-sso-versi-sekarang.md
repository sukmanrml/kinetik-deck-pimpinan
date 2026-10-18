# Di balik layar: login SSO versi sekarang

<span v-click="1"></span><span v-click="2"></span><span v-click="3"></span><span v-click="4"></span><span v-click="5"></span><span v-click="6"></span><span v-click="7"></span><span v-click="8"></span><span v-click="9"></span><span v-click="10"></span>

<SsoLoginFlow :clicks="$clicks" />

<!--
Ini gambaran di balik layar: bagaimana Kinetik bisa login ke kipApp lewat SSO versi sekarang, tanpa membuka browser. Ini sequence diagram. Empat pihak: pegawai, Kinetik, kipApp, dan SSO BPS.
[click] Pertama, pegawai mengisi username dan password SSO di Kinetik, cukup satu kali. Ini satu-satunya langkah manual.
[click] Kedua, Kinetik membuka halaman login kipApp.
[click] Ketiga, kipApp mengarahkan atau redirect ke SSO.
[click] Keempat, SSO mengirim halaman login. Kinetik membaca halaman itu dan mengambil alamat form-nya.
[click] Kelima, Kinetik mengirim username dan password ke form tersebut. Perhatikan panah merah ini. Di langkah inilah SSO yang sekarang masih bisa dilewati secara otomatis.
[click] Keenam, kalau benar, SSO membalas dengan redirect yang membawa kode login. Kalau akun memakai OTP, SSO minta kode dulu dan Kinetik meneruskannya. Kalau password salah, SSO menolak.
[click] Ketujuh, Kinetik membuka callback kipApp dengan kode itu.
[click] Kedelapan, kipApp membalas dengan redirect yang membawa token. Token itu berlaku dua puluh empat jam.
[click] Kesembilan, Kinetik menyimpan token terenkripsi. Kalau token expired, Kinetik login ulang sendiri memakai password yang tersimpan.
[click] Dan ini alasan kekhawatiran kami. SSO baru memasang captcha dan passkey tepat di langkah kelima. Server tidak bisa melewatinya, jadi cara ini berhenti.
-->
