// Code by NyanRay64 =3
fetch("./markdown/projects/phantom.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("Phantom").innerHTML = marked.parse(text);
    });

fetch("./markdown/projects/luminos.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("LuminOS").innerHTML = marked.parse(text);
    });

fetch("../markdown/projects/luminosENG.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("LuminOS-eng").innerHTML = marked.parse(text);
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