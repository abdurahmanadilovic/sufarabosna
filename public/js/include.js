// Loads <include src="..."> fragments (header/footer) into the page,
// then highlights the nav link of the current page and fills in the year.
async function loadIncludes() {
    const includes = document.querySelectorAll('include[src]');
    await Promise.all([...includes].map(async (el) => {
        try {
            const response = await fetch(el.getAttribute('src'));
            if (!response.ok) throw new Error(response.status);
            el.outerHTML = await response.text();
        } catch (error) {
            console.error('Include failed:', el.getAttribute('src'), error);
            el.remove();
        }
    }));
}

function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link:not([target="_blank"])').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
}

function setCurrentYear() {
    document.querySelectorAll('[data-current-year]').forEach((el) => {
        el.textContent = new Date().getFullYear();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadIncludes();
    setActiveLink();
    setCurrentYear();
});
