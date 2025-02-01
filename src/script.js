function loadScript(scriptUrl) {
    var script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
}

// Load a different JavaScript file
loadScript("https://xpdevs.github.io/JS2PY/src/data.js");
