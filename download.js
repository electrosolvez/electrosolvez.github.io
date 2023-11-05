// Function to update the table when changes occur
function updateTable() {
    // Check if the HTML code has changed (replace with your own logic)
    if (checkForChanges()) {
        // Perform the table update here
        document.getElementById("last-modification-time-1").textContent = new Date().toLocaleString();
    }
}

// Function to check for changes in the HTML code (replace with your own logic)
function checkForChanges() {
    // Implement your logic here to detect changes
    // Return true if changes occurred, otherwise return false
    return true; // For demonstration, always returning true
}

// Call the updateTable function when the page loads
window.onload = function() {
    updateTable();
}

