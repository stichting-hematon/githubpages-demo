let seconds = 5;
const countdown = document.getElementById("countdown");
const overlay = document.querySelector(".overlay");
const goButton = document.getElementById("goButton");
var formurl = "https://forms.office.com/Pages/ResponsePage.aspx?id=cZoyhOXi-Uifid8K47hDBuJ5oMSX115JtVjuBC6Gzx9UOVNNVlc1V0c2UDJQRzRJRTRISlRNNkgwMSQlQCN0PWcu&eventkey=234"

function redirect() {
    overlay.style.transition = "opacity 1s";
    overlay.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=cZoyhOXi-Uifid8K47hDBuJ5oMSX115JtVjuBC6Gzx9UOVNNVlc1V0c2UDJQRzRJRTRISlRNNkgwMSQlQCN0PWcu&eventkey=234";
    }, 1000); // wacht 1s voor fade-out
}

// Countdown automatisch
const interval = setInterval(() => {
    seconds--;
    countdown.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(interval);
        redirect();
    }
}, 1000);

// Klikbare knop
goButton.addEventListener("click", () => {
    clearInterval(interval);
    redirect();
});
