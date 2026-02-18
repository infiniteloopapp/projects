// script.js

// Exit intent popup logic
(function() {
    let popup = document.getElementById('exitIntentPopup');
    let closeBtn = document.getElementById('closePopup');
    let tabButtons = document.querySelectorAll('.tab-btn');
    let tabContents = document.querySelectorAll('.tab-content');

    function showPopup() {
        popup.classList.remove('hidden');
    }

    function hidePopup() {
        popup.classList.add('hidden');
    }

    closeBtn.addEventListener('click', hidePopup);

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Exit intent detection (mouse leaves from top)
    let hasShown = false;
    document.addEventListener('mouseout', function(e) {
        if (!hasShown && e.clientY < 10) {
            showPopup();
            hasShown = true;
        }
    });
})();

// Contact link scroll or action can be added here if needed

