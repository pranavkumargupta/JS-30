const countdownElement = document.getElementById('countdown');

// Set your launch date (replace this with your actual launch date)
const launchDate = new Date('2024-12-31T00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, show a message
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = 'Coming Soon!';
    }
}, 1000);
