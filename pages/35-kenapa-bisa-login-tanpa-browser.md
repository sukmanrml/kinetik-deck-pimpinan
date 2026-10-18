# Kenapa bisa login tanpa browser?

<div class="grid2 compact" style="margin-top:.5rem;gap:.6rem">
<div>
<p class="small" style="margin:0 0 .2rem"><b>SSO sekarang hanya butuh 4 hal biasa:</b></p>
<div v-click="1" class="card"><b>1. Halaman login = HTML.</b> Ada form di dalamnya, diambil dengan satu HTTP GET.</div>
<div v-click="2" class="card"><b>2. Cookie sesi.</b> Kinetik menyimpannya, seperti browser.</div>
<div v-click="3" class="card"><b>3. Kirim form.</b> Username dan password lewat HTTP POST.</div>
<div v-click="4" class="card"><b>4. Ikuti redirect.</b> Token ada di alamat tujuan terakhir.</div>
</div>
<div>
<div v-click="5" class="card ok"><b>Tidak dibutuhkan SSO sekarang</b><br><span class="small">JavaScript, captcha, passkey, perangkat khusus.</span></div>
<div v-click="6" class="card"><b>Browser tidak ajaib.</b><br><span class="small">Ia HTTP client yang juga menampilkan halaman dan menjalankan JavaScript. Kalau SSO tidak menuntutnya, HTTP client biasa cukup. Kinetik pakai HTTP client bawaan Laravel, bukan Selenium atau Playwright.</span></div>
</div>
</div>

<!--
Pertanyaan wajar: bagaimana Kinetik bisa login ke SSO tanpa membuka browser, dan kenapa itu bisa?
Jawabannya: login SSO yang sekarang itu sebenarnya sederhana. Hanya empat hal biasa.
[click] Pertama, halaman login berupa HTML biasa yang berisi sebuah form. Cukup satu request HTTP GET untuk mengambilnya.
[click] Kedua, cookie sesi. Kinetik menyimpannya, sama seperti yang dilakukan browser.
[click] Ketiga, kirim form. Username dan password dikirim lewat HTTP POST ke alamat form tadi.
[click] Keempat, ikuti redirect. Token ada di alamat tujuan terakhir, tanpa perlu menjalankan JavaScript.
[click] Jadi yang tidak dibutuhkan SSO yang sekarang adalah JavaScript, captcha, passkey, atau perangkat khusus.
[click] Browser sebenarnya tidak melakukan hal ajaib. Ia hanya HTTP client yang juga menampilkan halaman dan menjalankan JavaScript. Kalau SSO tidak menuntut dua hal terakhir itu, HTTP client biasa sudah cukup. Kinetik memakai HTTP client bawaan Laravel, bukan Selenium atau Playwright.
-->
