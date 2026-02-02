// Falling Feathers Script
const leafCount = 15; // Number of feathers
const featherImg = "https://irisjhonrestiE.github.io/my-blogger-assets/feather.png"; // 

function createFeather() {
    const feather = document.createElement('img');
    feather.src = featherImg;
    feather.style.position = 'fixed';
    feather.style.top = '-50px';
    feather.style.left = Math.random() * window.innerWidth + 'px';
    feather.style.width = (Math.random() * 20 + 10) + 'px'; // Random size
    feather.style.opacity = Math.random();
    feather.style.pointerEvents = 'none'; // So you can click through them
    feather.style.zIndex = '9999';
    document.body.appendChild(feather);

    let angle = 0;
    let pos = -50;
    const speed = Math.random() * 2 + 1;
    const horizontalDrift = Math.random() * 2 - 1;

    function fall() {
        pos += speed;
        angle += 0.05;
        feather.style.top = pos + 'px';
        feather.style.left = (parseFloat(feather.style.left) + Math.sin(angle) + horizontalDrift) + 'px';

        if (pos < window.innerHeight) {
            requestAnimationFrame(fall);
        } else {
            feather.remove();
            createFeather(); // Replace it once it hits the bottom
        }
    }
    fall();
}

// Start the effect
for (let i = 0; i < leafCount; i++) {
    setTimeout(createFeather, Math.random() * 5000);
}
