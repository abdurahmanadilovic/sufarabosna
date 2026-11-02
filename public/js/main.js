// Show/hide collapsible content blocks ("Otvori" / "Zatvori" buttons)
function toggleCollapsible(button) {
    const content = button.nextElementSibling;
    const isOpen = button.textContent === 'Zatvori';
    button.textContent = isOpen ? 'Otvori' : 'Zatvori';
    content.style.display = isOpen ? 'none' : 'block';
}

// Switch the language of the introduction text on the home page
function toggleLanguage(lang) {
    const languages = ['bosnian', 'english', 'russian', 'italian', 'german', 'arabic', 'swedish', 'turkish', 'indonesian', 'chinese', 'japanese', 'urdu'];
    languages.forEach((l) => {
        const content = document.getElementById(`${l}Content`);
        const button = document.getElementById(`${l}Btn`);
        if (!content || !button) return;
        content.style.display = l === lang ? 'block' : 'none';
        button.classList.toggle('fw-bold', l === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.collapsible').forEach((button) => {
        button.addEventListener('click', () => toggleCollapsible(button));
    });

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        new bootstrap.Tooltip(el);
    });
});
