// Get the lists and box elements
const lists = document.querySelectorAll('.list');
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

// Iterate through each list item
lists.forEach(list => {
    // Add dragstart event listener to each list item
    list.addEventListener("dragstart", e => {
        // Store the selected item
        let selected = e.target;

        // Prevent default behavior for dragover on right box
        rightBox.addEventListener("dragover", e => {
            e.preventDefault(); // Prevent default behavior
        });

        // Handle drop event on right box
        rightBox.addEventListener("drop", e => {
            rightBox.appendChild(selected); // Append selected item to right box
            selected = null; // Reset selected item
        });

        // Prevent default behavior for dragover on left box
        leftBox.addEventListener("dragover", e => {
            e.preventDefault(); // Prevent default behavior
        });

        // Handle drop event on left box
        leftBox.addEventListener("drop", e => {
            leftBox.appendChild(selected); // Append selected item to left box
            selected = null; // Reset selected item
        });
    });
});
