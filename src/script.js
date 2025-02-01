fetch("https://xpdevs.github.io/JS2PY/src/data.js")
    .then(response => response.text())
    .then(code => eval(code))  // Executes the script
    .catch(error => console.error("Script loading failed:", error));
