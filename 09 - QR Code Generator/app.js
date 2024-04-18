

document.getElementById('getqr').addEventListener('click', () => {
    if (textorurl.value.length != 0) {
        let qrimage = document.getElementById('qrimage');
        let textorurl = document.getElementById('textorurl');
        const api_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textorurl.value}`;
        qrimage.src = api_url;
        document.querySelector('.qrbox').style.display = "block";
    }
    else {
        document.getElementById("textorurl").classList.add("shake-input");

        // Remove shake animation class after the animation ends
        setTimeout(function () {
            document.getElementById("textorurl").classList.remove("shake-input");
        }, 500); // Adjust timeout to match animation duration
    }
});
