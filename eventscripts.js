let seconds = 5;
const countdown = document.getElementById("countdown");
var formurl = "https://forms.office.com/Pages/ResponsePage.aspx?id=cZoyhOXi-Uifid8K47hDBuJ5oMSX115JtVjuBC6Gzx9UOVNNVlc1V0c2UDJQRzRJRTRISlRNNkgwMSQlQCN0PWcu&eventkey=234"

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
            window.location.href = formurl;
        }, 1000); // wacht 1s voor fade-out
    }
}, 1000);

