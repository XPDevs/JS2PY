fetch('https://xpdevs.github.io/JS2PY/data/data.json')
  .then(response => response.json())
  .then(data => {
    // Assuming the JSON file contains JavaScript code in a string format
    const scriptContent = data.script;  // Adjust the key based on your JSON structure

    // Execute the script using eval() or new Function()
    eval(scriptContent);
    
    // Alternatively: 
    // new Function(scriptContent)();
  })
  .catch(error => {
    console.error('Error loading JSON or executing script:', error);
  });
