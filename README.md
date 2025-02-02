# JS2PY - JavaScript to Python Converter

JS2PY is a free tool that allows you to easily convert JavaScript code into Python. Simply add it to your project, and you’ll be able to seamlessly convert JavaScript into Python code.

## 🔗 Links

- **GitHub Repository:** [JS2PY](https://github.com/XPDevs/JS2PY)
- **Download Pre-Made Version:** [Download Here](download/download.html)
- **Official Website:** [JS2PY on XPDevs](https://xpdevs.github.io/JS2PY/)

## 📌 How to Integrate JS2PY into Your Project

To use JS2PY in your own web project, simply add the following line of code inside the `<head>` tag of your HTML document:

```html
<script src="https://xpdevs.github.io/JS2PY/data/data.json"></script>

🖥️ Adding the GUI

To integrate the GUI into your project, use the following HTML:

<textarea id="inputJs" placeholder="Enter your JavaScript code here..."></textarea>
<button onclick="convertToPython()">Convert to Python</button>
<pre id="output"></pre>

You can also add CSS to improve its design. Here’s an example:

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
}
textarea {
    width: 100%;
    height: 200px;
    font-size: 14px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
#output {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: monospace;
}

🔄 Example Conversion

JavaScript Code:

const name = prompt("What's your name?");
console.log(`Hello, ${name}!`);

Converted Python Code:

name = input("What's your name? ")
print(f"Hello, {name}!")

⚠️ Legal Information

JS2PY is a free and open-source tool developed by XPDevs and James Turner that enables the conversion of JavaScript code into Python. To use JS2PY, credit must be given to XPDevs and James Turner at the bottom of the project, along with a link to the official website:

https://xpdevs.github.io/JS2PY/

Failure to provide credit may result in revocation of the right to use JS2PY. The tool remains freely available under an open-source license.

To add the required copyright information to your project, include this script:

<script src="https://xpdevs.github.io/JS2PY/copyright/copyright.js"></script>

🚀 Future Plans

Currently, JS2PY requires the GUI as there is no server setup for standalone usage. However, efforts are being made to allow conversion without the need for the GUI in future updates.


---

© 2025 XPDevs | JS2PY - A Free, Simple Conversion Tool


