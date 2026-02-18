// script.js

document.addEventListener('DOMContentLoaded', () => {
    const exitPopup = document.getElementById('exitPopup');
    const popupClose = document.getElementById('popupClose');
    const tabButtons = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');

    // Show exit intent popup on mouse leave at top
    function handleMouseLeave(e) {
        if (e.clientY <= 0) {
            exitPopup.classList.remove('hidden');
            document.removeEventListener('mouseleave', handleMouseLeave);
        }
    }

    document.addEventListener('mouseleave', handleMouseLeave);

    // Close popup
    popupClose.addEventListener('click', () => {
        exitPopup.classList.add('hidden');
    });

    // Tab switcher
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Additional button functionalities can be added here
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        alert('Thank you for choosing our legal packages! We will contact you shortly.');
    });

    document.getElementById('editNowBtn').addEventListener('click', () => {
        alert('Please contact us at shailendra.sharma79@gmail.com to edit your consultation details.');
    });
});
