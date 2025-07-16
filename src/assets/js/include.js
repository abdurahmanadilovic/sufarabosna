// Function to include HTML components
function includeHTML() {
    const includes = document.getElementsByTagName('include');
    for (let i = 0; i < includes.length; i++) {
        const element = includes[i];
        const file = element.getAttribute('src');
        if (file) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Component not found.";
                    }
                    
                    // Remove the include tag from the DOM
                    const parentElement = element.parentNode;
                    while (element.firstChild) {
                        parentElement.insertBefore(element.firstChild, element);
                    }
                    parentElement.removeChild(element);
                    
                    // Set up navigation after includes are loaded
                    setupNavigation();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    }
}

// Function to set up navigation
function setupNavigation() {
    // Set active link based on current page
    setActiveLink();
    
    // Add click event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link:not([target="_blank"])');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For same-page navigation, update active state
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('http')) {
                setActiveLink(this);
            }
        });
    });
}

// Function to set active link
function setActiveLink(clickedLink = null) {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        
        // If this is a clicked link, make it active
        if (clickedLink && link === clickedLink) {
            link.classList.add('active');
            localStorage.setItem('activeNavLink', href);
        }
        // Otherwise check if it matches current page or stored active link
        else if (!clickedLink) {
            const storedActiveLink = localStorage.getItem('activeNavLink');
            if (href === currentPage || href === storedActiveLink) {
                link.classList.add('active');
            }
        }
    });
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
    
    // Also set up navigation in case there are no includes
    setupNavigation();
});