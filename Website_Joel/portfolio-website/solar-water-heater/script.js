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
        document.body.style.overflowY = 'hidden'; // Menonaktifkan scroll saat main-menu terlihat
    } else {
        document.body.style.overflowY = 'auto'; // Mengaktifkan scroll kembali
    }
});
