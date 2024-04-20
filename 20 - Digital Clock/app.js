document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        const now = new Date();
    document.querySelector('.hours').textContent = String(now.getHours()).padStart(2,'0');
    document.querySelector('.mins').textContent = String(now.getMinutes()).padStart(2,'0');
    document.querySelector('.sec').textContent = String(now.getSeconds()).padStart(2,'0');
    },1000);
});



    