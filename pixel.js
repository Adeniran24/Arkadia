document.addEventListener('DOMContentLoaded', () => {
    function createPixel() {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');

        pixel.style.left = Math.random() * 100 + "vw";
        pixel.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.querySelector('.stars-background').appendChild(pixel);

        setTimeout(() => {
            pixel.remove();
        }, 5000);
    }

    setInterval(createPixel, 20);
});
