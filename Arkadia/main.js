const urlParams = new URLSearchParams(window.location.search);
const charParam = urlParams.get('karakter');

//If a link is clicked with the character parameter, charParam will get the value of the character parameter
if (charParam === 'pacman') {
    const script = document.createElement('script');
    script.src = 'pacman.js';
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'pacman.css';
    document.head.appendChild(css);
    document.body.appendChild(script);
}
