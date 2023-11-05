// script.js

function updateLastModificationTime() {
    var dateElement = document.getElementById("last-modification-time");
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleString();
    dateElement.textContent = formattedDate;
}

updateLastModificationTime();
document.body.addEventListener('DOMSubtreeModified', updateLastModificationTime);
