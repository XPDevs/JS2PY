function loadScript(scriptUrl) {
    var script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    document.head.appendChild(script);
}

// Load a different JavaScript file
loadScript("data.js");
