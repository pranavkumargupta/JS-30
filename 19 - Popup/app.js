document.addEventListener('DOMContentLoaded', () => {
    const showPopup = document.getElementById('showPopup');
    const closePopup = document.getElementById('closePopup');

    showPopup.addEventListener('click', () => {
        document.querySelector('.popup').classList.add('showpopup');
    });

    closePopup.addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('showpopup');
    });
    
    
})