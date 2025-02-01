function loadAndExecuteScript() {
    // Path to the .json file that actually contains JavaScript code inside it
    const jsonFilePath = '../data/myfile.json'; // Path to the file

    // Fetch the "JSON" file that contains JavaScript code inside it
    fetch(jsonFilePath)
        .then(response => response.text()) // Get the file as text (not as JSON)
        .then(jsCode => {
            try {
                // Execute the JavaScript code inside the file
                eval(jsCode); // or you can use new Function(jsCode)
                console.log('JavaScript code executed successfully.');
            } catch (error) {
                console.error('Error executing JavaScript code:', error);
            }
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
}

// Call the function to load and execute the JavaScript code from the file
loadAndExecuteScript();

