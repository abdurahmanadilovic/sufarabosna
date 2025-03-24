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
                    
                    // Set active link based on current page
                    setActiveLink();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    }
}

// Function to set active link in navigation
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', includeHTML); 