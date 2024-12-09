const container = document.querySelector('.poster-container');

container.addEventListener('click', (event) => {
    const containerRect = container.getBoundingClientRect();

    const clickX = ((event.clientX - containerRect.left) / containerRect.width) * 100;
    const clickY = ((event.clientY - containerRect.top) / containerRect.height) * 100;

    console.log(`Klik di X: ${clickX.toFixed(2)}%, Y: ${clickY.toFixed(2)}%`);

    // Cek apakah klik berada di dalam kotak
    const boxX = 14.375, boxY = 43.9, boxWidth = 57.25, boxHeight = 27.2;

    if (
        clickX >= boxX && clickX <= boxX + boxWidth &&
        clickY >= boxY && clickY <= boxY + boxHeight
    ) {
        console.log("Klik berada dalam kotak!");
    } else {
        console.log("Klik di luar kotak.");
    }
});
