// Generate bintang untuk halaman basecamp
function generateStars() {
    const starsLayer = document.getElementById('starsLayer');
    if (starsLayer) {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 60 + '%';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = Math.random() * 2 + 1 + 's';
            starsLayer.appendChild(star);
        }
    }
}

// Animasi fade-in saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.opacity = '0';
        container.style.animation = 'fadeIn 0.8s ease forwards';
    });
});

// Style untuk animasi fade-in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Fungsi untuk halaman puncak (tiup lilin)
const blowBtn = document.getElementById('blowCandleBtn');
const blowMessage = document.getElementById('blowMessage');
const cakeFlame = document.getElementById('cakeFlame');

if (blowBtn) {
    blowBtn.addEventListener('click', () => {
        if (cakeFlame) {
            cakeFlame.style.animation = 'none';
            cakeFlame.style.opacity = '0';
            cakeFlame.innerText = '💨';
        }
        
        blowMessage.classList.remove('hidden');
        blowBtn.disabled = true;
        blowBtn.style.opacity = '0.6';
        blowBtn.innerHTML = '<span>🎉</span> lilin sudah ditiup! <span>🎉</span>';
    });
}

// Efek hover tambahan untuk tombol
const buttons = document.querySelectorAll('.btn-primary, .btn-primary-small, .btn-secondary, .btn-blow');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'all 0.2s ease';
    });
});