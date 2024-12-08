function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Aktifkan scroll jika menuju selain bagian main-menu
    if (sectionId !== 'main-menu') {
        document.body.style.overflowY = 'auto';
    }
}

// Fungsi untuk memantau posisi scroll
window.addEventListener('scroll', () => {
    const mainMenu = document.getElementById('main-menu');

    // Jika header (main-menu) terlihat penuh, nonaktifkan scroll
    const headerVisible = mainMenu.getBoundingClientRect().top >= 0 && mainMenu.getBoundingClientRect().bottom <= window.innerHeight;
    if (headerVisible) {
        document.body.style.overflowY = 'hidden';
    }
});

document.body.style.overflowY = "hidden"; // Ini akan menghilangkan scroll

window.addEventListener('scroll', function() {
    // Memeriksa apakah scroll berada di posisi paling atas
    if (window.scrollY === 0) {
        document.body.style.overflowY = 'hidden';  // Menonaktifkan scroll ketika di posisi paling atas
    } else {
        document.body.style.overflowY = 'auto';  // Mengaktifkan scroll saat sudah digulir
    }
});
