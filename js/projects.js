fetch("./markdown/projects/phantom.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("Phantom").innerHTML = marked.parse(text);
    });

fetch("./markdown/projects/nexusos.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("NexusOS").innerHTML = marked.parse(text);
    });

fetch("./markdown/projects/eclipse.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("Eclipse").innerHTML = marked.parse(text);
    });

fetch("./markdown/projects/aboutnix.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("AboutNix").innerHTML = marked.parse(text);
    });