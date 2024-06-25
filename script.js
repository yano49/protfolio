// script.js
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');
    video.addEventListener('ended', () => {
        // Add fade-out effect to video
        video.classList.add('fade-out');
        
        // Set timeout to redirect after the fade-out effect
        setTimeout(() => {
            window.location.href = "nextpage.html";  // Replace with your desired URL
        }, 2000);  // Match with the fade-out duration
    });
});
