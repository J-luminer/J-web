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

// Menambahkan efek hover untuk tombol show-image-btn
const showImageBtn = document.querySelector('.show-image-btn');
showImageBtn.addEventListener('mouseenter', function() {
    showImageBtn.style.backgroundColor = '#f0f0f0'; // Warna tombol berubah saat pointer mendekat
});
showImageBtn.addEventListener('mouseleave', function() {
    showImageBtn.style.backgroundColor = 'transparent'; // Mengembalikan warna tombol ke transparan setelah pointer keluar
});
