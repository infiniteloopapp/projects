// script.js

// Exit intent popup logic
const exitPopup = document.getElementById('exitPopup');
const buyTabButton = document.querySelector('.tab-button[data-tab="buyTab"]');
const editTabButton = document.querySelector('.tab-button[data-tab="editTab"]');
const buyTabContent = document.getElementById('buyTab');
const editTabContent = document.getElementById('editTab');
const closePopupButton = document.getElementById('closePopup');
const editForm = document.getElementById('editForm');

let popupShown = false;

function showPopup() {
    if (!popupShown) {
        exitPopup.style.display = 'flex';
        popupShown = true;
    }
}

function hidePopup() {
    exitPopup.style.display = 'none';
}

// Detect exit intent (mouse leaving top of viewport)
document.addEventListener('mouseout', function(e) {
    if (e.clientY < 50 && !popupShown) {
        showPopup();
    }
});

// Tab switching
buyTabButton.addEventListener('click', () => {
    buyTabButton.classList.add('active');
    editTabButton.classList.remove('active');
    buyTabContent.classList.add('active');
    editTabContent.classList.remove('active');
});

editTabButton.addEventListener('click', () => {
    editTabButton.classList.add('active');
    buyTabButton.classList.remove('active');
    editTabContent.classList.add('active');
    buyTabContent.classList.remove('active');
});

// Close popup
closePopupButton.addEventListener('click', () => {
    hidePopup();
});

// Handle edit form submission
editForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    alert(`Details updated:\nEmail: ${email}\nPhone: ${phone}`);
    hidePopup();
});

// Buy now button click
const buyNowButton = document.getElementById('buyNow');
buyNowButton.addEventListener('click', () => {
    alert('Thank you for choosing Royal Laws! Our consultant will contact you shortly.');
    hidePopup();
});

