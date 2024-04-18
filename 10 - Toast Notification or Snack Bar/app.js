document.addEventListener("DOMContentLoaded", () => {
    const toastBox = document.getElementById("toastBox");
    const buttonsContainer = document.querySelector(".buttons");

    buttonsContainer.addEventListener("click", handleButtonClick);

    // Function to handle button click events
    function handleButtonClick(event) {
        const button = event.target.closest("button");
        if (!button) return;

        const type = button.dataset.type;
        const message = getMessageByType(type);
        showToast(message);
    }

    // Function to retrieve the message based on the button type
    function getMessageByType(type) {
        const messages = {
            success: '<i class="fa-solid fa-circle-check"></i> Successfully Submitted',
            error: '<i class="fa-solid fa-circle-xmark"></i> Please fix the Error',
            invalid: '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again'
        };
        return messages[type] || '';
    }

    // Function to display the toast message
    function showToast(message) {
        const toast = createToastElement(message);
        toastBox.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 6000);
    }

    // Function to create the toast element with appropriate classes based on the message
    function createToastElement(message) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerHTML = message;

        if (message.includes("Success")) {
            toast.classList.add("success");
        } else if (message.includes("Error")) {
            toast.classList.add("error");
        } else if (message.includes("Invalid")) {
            toast.classList.add("invalid");
        }

        return toast;
    }
});
