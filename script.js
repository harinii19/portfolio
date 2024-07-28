document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('#theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'light-mode') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
