// Function to update the timestamp
function updateTimestamp() {
    const timestampElement = document.getElementById("last-modification-time-1");
    const currentTimestamp = new Date().toLocaleString();
    timestampElement.textContent = currentTimestamp;
}

// Call the updateTimestamp function when the page loads
window.onload = function() {
    updateTimestamp();
}


