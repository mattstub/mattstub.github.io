(function() {
    const toggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if (toggle && sidebar) {
        toggle.addEventListener('click', function() {
            const isOpen = sidebar.classList.toggle('sidebar--open');
            toggle.setAttribute('aria-expanded', isOpen);
            body.classList.toggle('nav-open', isOpen);
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('sidebar--open')) {
                sidebar.classList.remove('sidebar--open');
                toggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('nav-open');
            }
        });

        // Close when clicking overlay
        document.addEventListener('click', function(e) {
            if (body.classList.contains('nav-open') &&
                !sidebar.contains(e.target) &&
                !toggle.contains(e.target)) {
                sidebar.classList.remove('sidebar--open');
                toggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('nav-open');
            }
        });
    }
})();
