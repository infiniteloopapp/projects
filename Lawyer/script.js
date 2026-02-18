// script.js

// Exit intent popup logic
(function() {
    var popup = document.getElementById('exitIntentPopup');
    var closeBtn = document.getElementById('closePopup');
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabContents = document.querySelectorAll('.tab-content');
    var popupShown = false;

    function showPopup() {
        if (!popupShown) {
            popup.style.display = 'flex';
            popupShown = true;
        }
    }

    // Detect exit intent (mouse leaves viewport from top)
    document.addEventListener('mouseout', function(e) {
        if (e.clientY <= 0) {
            showPopup();
        }
    });

    // Close popup on close button click
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Tab switching logic
    tabButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var target = this.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
})();