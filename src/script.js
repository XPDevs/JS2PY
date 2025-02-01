window.onload = function() {
    const statusDiv = document.getElementById('embedStatus');
    if (window.self !== window.top) {
        statusDiv.textContent = ""; // Embedded in an iframe
    } else {
        statusDiv.textContent = ""; // Not embedded
    }
};

