# <img src="../esign.png" class="markdown-title-icon" /> Tutorial Esign

Esign adalah alat *on-device signing* (penandatanganan di perangkat) yang memungkinkan kamu untuk menginstal file `.ipa` (format aplikasi iOS) langsung dari iPhone atau iPad-mu tanpa memerlukan komputer.

---

Sebelum menyelami proses *sideloading*, pastikan kamu telah menyiapkan tiga hal berikut di perangkat iOS-mu:
1. Pastikan **Esign** sudah terinstal di perangkatmu.
2. Kamu memerlukan file sertifikat (biasanya dalam format **.p12**) beserta file **.mobileprovision** dan *kata sandi* (password) untuk sertifikat tersebut. *(Kamu bisa mendapatkan sertifikat ini dari menu Certs).*
3. File mentah dari aplikasi yang ingin kamu instal. Pastikan untuk mengunduhnya dari sumber yang aman dan tepercaya. Saya telah menyediakan beberapa sumber tepercaya di menu Links.

---

## Tutorial

### Langkah 1: Mengimpor Sertifikat ke Esign
Agar Esign dapat berfungsi, kamu harus mengimpor "izin" atau sertifikat terlebih dahulu. Ada dua jenis file sertifikat untuk esign:

#### (a) .esigncert
1. Simpan file `.esigncert` yang kamu unduh ke aplikasi **Files** bawaan iOS.
2. Buka aplikasi **Esign**.
3. Pergi ke Settings dan pilih Import Resources.
![Import Resources](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img1.png)
4. Buka tab **File**, pilih file `.esigncert` yang telah kamu impor dan ketuk **Import Certificate Management**.
![Import Certificate Management](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img2.png)
5. Selesai! Kamu dapat melanjutkan ke Langkah 2.

#### (b) .p12 dan .mobileprovision
1. Simpan file `.p12` dan `.mobileprovision` yang kamu unduh ke aplikasi **Files** bawaan iOS.
2. Buka aplikasi **Esign**.
3. Buka tab **File**.
4. Pergi ke **Settings** dan pilih **Import Resources**.
5. Cari dan pilih file `.p12` dan `.mobileprovision` dari aplikasi Files.
![Import Resources](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img3.png)
6. Setelah file tersebut muncul di daftar file Esign, ketuk file `.p12`, lalu pilih **Import Certificate Management**.
7. Sebuah *pop-up* akan muncul meminta kata sandi. **Masukkan kata sandi** untuk sertifikat tersebut, lalu ketuk OK.
![Enter Password](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img4.png)
8. Ulangi proses pengetukan untuk file `.mobileprovision` dan pilih opsi impor jika diminta.
9. Untuk memastikan sertifikat berhasil diinstal, kamu dapat memeriksanya di tab **Settings** > **Certificate Management**.
10. Selesai! Kamu dapat melanjutkan ke Langkah 2.

### Langkah 2: Mengimpor File IPA
Sekarang, saatnya mengimpor aplikasi yang ingin kamu instal ke dalam Esign.

1. Kembali ke tab **File** di Esign.
2. Ketuk ikon titik tiga/plus di sudut kanan atas, pilih **Import**.
3. Temukan file **.ipa** yang ingin kamu instal dari aplikasi Files iOS-mu.
![Import IPA File](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img5.png)
4. Setelah file **.ipa** muncul di daftar file Esign, ketuk file tersebut.
5. Dari menu yang muncul, pilih **Import App Library**. Ini akan memindahkan file ke antrean persiapan.
![Import App Library](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img6.png)

### Langkah 3: Menandatangani (Signing) Aplikasi
Ini adalah proses inti di mana Esign menyematkan sertifikatmu ke dalam file aplikasi agar dapat diinstal oleh sistem iOS.

1. Beralih ke tab **Apps** di menu bawah.
2. Pilih bagian **Unsigned**.
3. Ketuk aplikasi yang baru saja kamu impor.
4. Pilih opsi **Signature**.
5. Halaman konfigurasi akan muncul. Di bagian **Certificate**, pastikan kamu memilih sertifikat yang kamu impor pada Langkah 1.
6. (Opsional) Pada halaman ini, kamu juga dapat mengubah nama aplikasi atau *Bundle ID* jika kamu ingin menginstal aplikasi duplikat (kloning). Jika kamu ragu, biarkan saja sebagai *default*.
7. Ketuk tombol **Signature** untuk memulai proses. Tunggu beberapa saat hingga progres mencapai 100%.
![Signature Process](https://raw.githubusercontent.com/xyzarco/plist/main/other/images/esign/img7.png)
8. Setelah proses mencapai 100%, sebuah *pop-up* otomatis biasanya akan muncul. Pilih **Install**.
9. Jika *pop-up* otomatis tidak muncul, kembali ke tab **Apps**, pilih bagian **Signed**, ketuk aplikasinya, dan pilih **Install**.
10. Peringatan sistem iOS akan muncul menanyakan apakah kamu ingin menginstal aplikasi tersebut. Ketuk **Install** sekali lagi.
11. Pergi ke *Home Screen* (Layar Utama) iPhone-mu. Kamu akan melihat aplikasi sedang diunduh/diinstal.

---

> **Catatan Penting (Pemecahan Masalah & Keamanan):**
> * Jika kamu menggunakan sertifikat gratis yang banyak tersedia di internet, Apple akan sering mencabutnya (*revoke*). Jika ini terjadi, aplikasi Esign dan semua aplikasi yang di-*sideload* akan langsung mengalami *force close* (keluar paksa/crash), dan kamu perlu mencari sertifikat baru untuk mengulangi prosesnya dari awal.
> * Selalu berhati-hati saat mengunduh file `.ipa` dari internet. Pastikan file tersebut berasal dari sumber komunitas yang tepercaya untuk menghindari *malware* atau *spyware* yang disuntikkan ke dalam aplikasi.