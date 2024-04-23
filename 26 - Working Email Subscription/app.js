const scriptURL = 'https://script.google.com/macros/s/AKfycbxHKlEIZN5GIbKUNK6MiG2XHqo_wjSHR276eOIJgaeWSt6zSg-idO7Djfsah6QoA0tzGQ/exec';
  const form = document.forms['submit-to-google-sheet'];
  const message = document.getElementById('message');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Thank you for Subsribing !";
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })