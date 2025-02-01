window.onload = function() {
    const statusDiv = document.getElementById('embedStatus');
    if (window.self !== window.top) {
        statusDiv.textContent = "Yes"; // Embedded in an iframe
    } else {
        statusDiv.textContent = "No"; // Not embedded
    }
};

