document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.trim() !== "") {
            eyeIcon.style.display = "block";
        } else {
            eyeIcon.style.display = "none";
        }
    });

    eyeIcon.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        eyeIcon.classList.toggle("fa-eye");
        eyeIcon.classList.toggle("fa-eye-slash");
    });
});
