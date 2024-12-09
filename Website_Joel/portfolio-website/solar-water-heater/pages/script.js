document.querySelector('.show-image-btn').addEventListener('click', function() {
    // Mengambil semua gambar dengan kelas 'extra-image'
    const extraImages = document.querySelectorAll('.extra-image');
    
    // Mengambil gambar yang akan diblur
    const bayangImage = document.querySelector('img[src="images/Bayang.png"]');
    const threeImage = document.querySelector('img[src="images/3.png"]');

    // Tampilkan semua gambar baru dengan delay 1 detik dan mulai transisi muncul
    setTimeout(function() {
        extraImages.forEach(function(image) {
            image.style.display = 'block';  // Menampilkan gambar setelah 1 detik
            image.classList.add('revealed'); // Menambahkan kelas untuk efek reveal (opacity + blur)
        });
    }, 1000); // Delay 1 detik sebelum gambar muncul

    // Menambahkan efek blur pada gambar dengan delay 1 detik
    setTimeout(function() {
        bayangImage.classList.add('blurred');
        threeImage.classList.add('blurred');
    }, 1000); // Delay 1 detik sebelum blur diterapkan

    // Mengatur countdown pada tombol
    const countdownBtn = document.querySelector('.countdown-btn');
    let countdown = 60; // Mulai countdown dari 60 detik
    const countdownText = countdownBtn.querySelector('.countdown-text');

    // Flag untuk memastikan countdown hanya dimulai sekali
    let countdownStarted = false;

    // Fungsi untuk memulai countdown
    function startCountdown() {
        if (!countdownStarted) {
            countdownStarted = true; // Menandakan countdown sudah dimulai
            const countdownInterval = setInterval(function() {
                countdownText.textContent = countdown;
                countdown--;
                if (countdown < 0) {
                    clearInterval(countdownInterval); // Hentikan countdown
                    countdownText.textContent = '60'; // Reset teks countdown
                    setTimeout(startCountdown, 1000); // Reset countdown menjadi 60 detik setelah selesai
                    
                    // Menghapus blur setelah countdown selesai
                    bayangImage.classList.remove('blurred');
                    threeImage.classList.remove('blurred');
                }
            }, 1000);
        }
    }

    // Memulai countdown hanya sekali
    startCountdown(); // Memulai countdown

    // Setelah 61 detik, sembunyikan gambar-gambar baru
    setTimeout(function() {
        extraImages.forEach(function(image) {
            image.style.display = 'none';
        });
    }, 61000); // 61 detik
});
document.querySelector('.power-container .show-image-btn').addEventListener('click', function () {
    // Mengambil referensi power-container dan tombol
    const powerContainer = document.querySelector('.power-container');
    const showImageBtn = document.querySelector('.power-container .show-image-btn');
    
    // Aktifkan overflow-y agar gambar dapat digulir secara vertikal
    powerContainer.style.overflowY = 'auto'; // Mengaktifkan scroll vertikal

    // Menonaktifkan tombol sementara
    showImageBtn.disabled = true; // Ubah tampilan kursor untuk menunjukkan tombol tidak aktif

    // Mengatur countdown pada tombol
    const countdownBtn = powerContainer.querySelector('.countdown-btn');
    let countdown = 60; // Mulai countdown dari 60 detik
    const countdownText = countdownBtn.querySelector('.countdown-text');

    // Fungsi untuk memulai countdown
    const countdownInterval = setInterval(function () {
        countdownText.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval); // Hentikan countdown
            countdownText.textContent = '60'; // Reset teks countdown

            // Mengatur posisi scroll kembali ke atas
            powerContainer.scrollTop = 0;

            // Menonaktifkan scroll setelah reset
            powerContainer.style.overflowY = 'hidden';

            // Mengaktifkan kembali tombol setelah proses selesai
            showImageBtn.disabled = false;
            showImageBtn.style.cursor = 'pointer'; // Kembali ke kursor default
        }
    }, 1000); // Countdown setiap detik
});
