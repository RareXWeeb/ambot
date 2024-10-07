document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    const firstSectionHeader = document.querySelector('#section1 h3');
    if (firstSectionHeader) {
        firstSectionHeader.classList.add('show');
    }

    function showWithEase(el) {
        el.classList.add('show');
    }

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            showWithEase(el);
        }
    });

    document.addEventListener('scroll', function() {
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                showWithEase(el);
            }
        });
    });
});
