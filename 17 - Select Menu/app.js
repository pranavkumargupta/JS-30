
document.addEventListener('DOMContentLoaded', () => {
    const selectorField = document.getElementById('selectorField');
    const selectedText = document.getElementById('selectedText');
    const list = document.getElementById('list');

    selectorField.addEventListener('click', () => {
        list.classList.toggle('hidden');
        selectorField.querySelector('i').classList.toggle('rotate');
    });

    list.addEventListener('click', (e) => {
        if (e.target.matches('li')) {
            selectedText.textContent = e.target.querySelector('p').textContent;
            list.classList.add('hidden');
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selectorField.contains(e.target) && !list.contains(e.target)) {
            list.classList.add('hidden');
        }
    });

})