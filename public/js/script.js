const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const maybeBtn = document.getElementById('maybeBtn');

// YES button -> popup then go to details page
yesBtn.addEventListener('click', () => {
    alert('i mean, kalau nak ikut');
    window.location.href = '/details';
});

// MAYBE button -> popup then go to details page
maybeBtn.addEventListener('click', () => {
    alert('figured u clicked this');
    window.location.href = '/details';
});

// NO button -> dodges away before it can be clicked/tapped
function dodgeButton() {
    const container = noBtn.parentElement;
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = 100; // how far it can jump vertically

    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = (Math.random() * maxY) - (maxY / 2);

    noBtn.style.position = 'relative';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Desktop: dodge on hover
noBtn.addEventListener('mouseover', dodgeButton);

// Mobile: dodge the moment a finger touches it, before the tap registers
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // stops the touch from turning into a click
    dodgeButton();
});