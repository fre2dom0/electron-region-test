const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('clickable');

    el.addEventListener('mouseenter', () => {
        console.log('Entered clickable area');
        ipcRenderer.send('enable-clicks');
    });

    el.addEventListener('mouseleave', () => {
        console.log('Left clickable area');
        ipcRenderer.send('disable-clicks');
    });

    el.addEventListener('click', () => {
        console.log('CLICKED ON ELEMENT!');
        el.style.background = 'red';
    });
});
