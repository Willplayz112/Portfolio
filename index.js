// Theme toggle logic
document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('themeSwitch');
    const themeLabel = document.getElementById('themeLabel');
    const body = document.body;

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        switchInput.checked = true;
        themeLabel.textContent = 'Dark Mode';
    }

    switchInput.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeLabel.textContent = 'Dark Mode';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeLabel.textContent = 'Light Mode';
        }
    });
});
