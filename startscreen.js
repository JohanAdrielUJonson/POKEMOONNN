document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');

    if (startBtn) {
        startBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop instant navigation
            const targetUrl = startBtn.getAttribute('href');

            // Add fade-out class to body for smooth transition animation
            document.body.classList.add('fade-out');

            // Wait for the animation to finish (0.4s), then navigate
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    }
});