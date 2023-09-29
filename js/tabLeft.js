const button = document.getElementById('dragButton');
const content = document.querySelector('.content-left');

let isDragging = false;
let startPositionX = 0;

button.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPositionX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentPositionX = e.touches[0].clientX;
    const difference = currentPositionX - startPositionX;

    button.style.left = `${Math.min(70, Math.max(0, difference))}px`;

    // Allow content to go back to -100 but with a maximum limit of 0
    content.style.left = `${Math.min(0, Math.max(-100, difference))}px`;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
