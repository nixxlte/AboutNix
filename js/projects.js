fetch("./projects/phantom.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("Phantom").innerHTML = marked.parse(text);
    });