// script.js

function showSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = 'block';

    // Make div1 draggable, but move the entire submenu
    makeDraggable(submenu.querySelector('.div1'), submenu);
}

function closeSubmenu(submenuId) {
    document.getElementById(submenuId).style.display = 'none';
}

function makeDraggable(handle, element) {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    const startDragging = (e) => {
        isDragging = true;
        offsetX = e.clientX || e.touches[0].clientX;
        offsetY = e.clientY || e.touches[0].clientY;
        handle.style.cursor = 'grabbing';
    };

    const continueDragging = (e) => {
        if (!isDragging) return;

        const x = e.clientX || e.touches[0].clientX;
        const y = e.clientY || e.touches[0].clientY;

        // Move the entire submenu without boundary checks
        element.style.left = `${element.offsetLeft + (x - offsetX)}px`;
        element.style.top = `${element.offsetTop + (y - offsetY)}px`;

        offsetX = x;
        offsetY = y;
    };

    const stopDragging = () => {
        isDragging = false;
        handle.style.cursor = 'grab';
    };

    handle.addEventListener('mousedown', startDragging);
    handle.addEventListener('touchstart', startDragging);

    document.addEventListener('mousemove', continueDragging);
    document.addEventListener('touchmove', continueDragging);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
}
