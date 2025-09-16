let seconds = 5;
const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
    seconds--;
    countdown.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(interval);
        // Fade-out effect voordat redirect
        const overlay = document.querySelector(".overlay");
        overlay.style.transition = "opacity 1s";
        overlay.style.opacity = 0;
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000); // wacht 1s voor fade-out
    }
}, 1000);
