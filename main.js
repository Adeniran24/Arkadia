const urlParams = new URLSearchParams(window.location.search);
const charParam = urlParams.get('karakter');

if (charParam === 'pacman') {
    const script = document.createElement('script');
    script.src = 'pacman.js';
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'pacman.css';
    document.head.appendChild(css);
    document.body.appendChild(script);
}
