document.body.innerHTML += `
  <div id="copyright">
    <a href="https://xpdevs.github.io/JS2PY" target="_blank">© XPDevs</a> | © James Turner
  </div>
  <style>
    #copyright {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background-color: rgba(211, 211, 211, 0.7); /* Light grey with opacity */
      padding: 5px 10px;
      font-size: 12px;
      color: black;
      z-index: 9999; /* Ensures it overlays on top of everything */
    }

    #copyright a {
      color: black;
      text-decoration: none;
    }

    #copyright a:hover {
      text-decoration: underline;
    }
  </style>
`;

