// JavaScript code to toggle visibility of the full content in the home page
const readMoreButtons = document.querySelectorAll('.expand-btn'); // Select all buttons with class "expand-btn" which are read more buttons
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => { // Add click event listener for each button
        const article = button.closest('.news-item'); // Find the closest parent article
        const fullContent = article.querySelector('.news-full-content'); // Get the full content div

        // Toggle the display of the full content
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
            fullContent.style.display = 'block'; // Show the full content
            button.textContent = 'Read Less'; // Change button text to 'Read Less'
        } else {
            fullContent.style.display = 'none'; // Hide the full content
            button.textContent = 'Read More'; // Change button text to 'Read More'
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle the 'open' class on the content div
            content.classList.toggle('open');
        });
    });
});
//////////////////////////
//the workshop slider in the services page
var workshopItems = document.querySelectorAll('.workshop-item');
var currentWorkshopIndex = 0;
function changeWorkshopSlide(n) {
    currentWorkshopIndex += n;
    if (currentWorkshopIndex < 0) {
        currentWorkshopIndex = workshopItems.length - 1;
    } else if (currentWorkshopIndex >= workshopItems.length) {
        currentWorkshopIndex = 0;
    }

    for (var i = 0; i < workshopItems.length; i++) {
        workshopItems[i].style.display = 'none';
    }

    workshopItems[currentWorkshopIndex].style.display = 'block';
}


//the confirming of the password in get statred page 
function validatePasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        document.getElementById("password").value = "";
         document.getElementById("confirm-password").value="";
        return false;
    } return true;
}


