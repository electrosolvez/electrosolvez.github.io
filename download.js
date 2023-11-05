// Function to update the table when changes occur
    function updateTable() {
        // Check if the HTML code has changed (you can implement your own logic here)
        if (/* Add your condition to check if changes occurred */) {
            // Perform the table update here
            document.getElementById("last-modification-time-1").textContent = new Date().toLocaleString();
        }
    }

    // Call the updateTable function when the page loads
    window.onload = function() {
        updateTable();
    }
