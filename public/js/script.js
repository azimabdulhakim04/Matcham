const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const maybeBtn = document.getElementById('maybeBtn');

// YES button -> popup then go to details page
yesBtn.addEventListener('click', () => {
    alert('lessgoo 🍵');
    window.location.href = '/details';
});

// MAYBE button -> popup then go to details page
maybeBtn.addEventListener('click', () => {
    alert('figured u said that 🌱');
    window.location.href = '/details';
});

// NO button -> dodges the mouse on hover so it can't be clicked
noBtn.addEventListener('mouseover', () => {
    const container = noBtn.parentElement;
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = 100; // how far it can jump vertically

    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = (Math.random() * maxY) - (maxY / 2);

    noBtn.style.position = 'relative';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});