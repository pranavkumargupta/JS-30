document.addEventListener('DOMContentLoaded', () => {
    const curentDate = new Date();

    const dateElement = document.getElementById('calendar-date');
    const dayElement = document.getElementById('calendar-day');
    const monthElement = document.getElementById('calendar-month');
    const yearElement = document.getElementById('calendar-year');
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    dateElement .textContent = String(curentDate.getDate()).padStart(2,"0");
    dayElement .textContent = daysOfWeek[curentDate.getDay()];
    // This way we can also find the long name of month.    
    monthElement.textContent = curentDate.toLocaleDateString(undefined, { month: 'long' });
    yearElement .textContent = curentDate.getFullYear();
})


// toLocaleDateString() is used to format the date according to the user's locale.
// The undefined parameter in toLocaleDateString() tells the method to use the default locale settings.
// Options like { day: '2-digit' }, { weekday: 'long' }, { month: 'long' }, and { year: 'numeric' } specify how each part of the date should be formatted.
// For example, '2-digit' ensures that the day is displayed with leading zeros if necessary, and 'long' specifies that the full name of the day or month should be used.
// toLocaleDateString() is used to format the date according to the user's locale.
// The undefined parameter in toLocaleDateString() tells the method to use the default locale settings.
// Options like { day: '2-digit' }, { weekday: 'long' }, { month: 'long' }, and { year: 'numeric' } specify how each part of the date should be formatted.
// For example, '2-digit' ensures that the day is displayed with leading zeros if necessary, and 'long' specifies that the full name of the day or month should be used.