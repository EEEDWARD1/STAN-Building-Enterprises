function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function() {
    const marqueeText = document.querySelector(".marquee-text");
    const quoteContainer = document.querySelector(".quote-container");
    const emailElement = document.getElementById("email");

    marqueeText.addEventListener("click", function() {
        quoteContainer.scrollIntoView({ behavior: "smooth" });

        // Highlight the email and make it bigger
        emailElement.style.transition = "all 0.5s ease";
        emailElement.style.fontSize = "2em";
        emailElement.style.color = "white";
        emailElement.style.padding = "10px";
        emailElement.style.borderRadius = "5px";

        // Bring the email back to normal after 2 seconds
        setTimeout(function() {
            emailElement.style.fontSize = "";
            emailElement.style.backgroundColor = "";
            emailElement.style.color = "";
            emailElement.style.padding = "";
            emailElement.style.borderRadius = "";
        }, 2000);
    });
});