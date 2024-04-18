let userinput = document.getElementById("dob");
userinput.max = new Date().toISOString().split('T')[0];

document.querySelector('button').addEventListener("click", () => {
    let dob = new Date(userinput.value);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust for negative months or days
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    // return { years, months, days };
    document.querySelector('.result').innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;

})
