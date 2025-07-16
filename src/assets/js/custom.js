// Custom JavaScript for the static site

// Function to go to home page
function goHome() {
    window.location.href = 'index.html';
}

// Function to go to Facebook page
function goToFbPage() {
    window.location.href = 'https://m.facebook.com/Sufara-i-ted%C5%BEvid-osnove-testna-verzija-1992735521023625/';
}

// Function to toggle collapsible content
function toggleCollapsible(button) {
    const content = button.nextElementSibling;
    if (button.textContent === "Otvori") {
        button.textContent = "Zatvori";
        content.style.display = "block";
    } else {
        button.textContent = "Otvori"; 
        content.style.display = "none";
    }
}

// Function to toggle language in the introduction page
function toggleLanguage(lang) {
    const languages = ['bosnian', 'english', 'russian', 'italian', 'german'];
    languages.forEach(l => {
        const content = document.getElementById(`${l}Content`);
        const button = document.getElementById(`${l}Btn`);
        if (l === lang) {
            content.style.display = 'block';
            button.classList.add('fw-bold');
        } else {
            content.style.display = 'none';
            button.classList.remove('fw-bold');
        }
    });
}

// Initialize collapsible elements
document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            toggleCollapsible(this);
        });
    });
});


// Initialize Bootstrap tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any Bootstrap components if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); 