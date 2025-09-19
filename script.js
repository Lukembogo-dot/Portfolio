document.querySelectorAll('.learn-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/luke-mbogo254/', '_blank');
    });
});

// Add this for the contact button
document.querySelectorAll('.btn').forEach(function(button) {
    if (button.textContent.trim() === 'Contact Me') {
        button.addEventListener('click', function() {
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});