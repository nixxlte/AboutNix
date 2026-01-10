// Code by NyanRay64 =3

function home() {
  document.Fhome.submit();
}

function update() {
  update();
}

function start() {
  fetch("markdown/introduction.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("introduction").innerHTML = marked.parse(text);
  });

  fetch("markdown/contact.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("contact").innerHTML = marked.parse(text);
    });

  fetch("../markdown/contactENG.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("contact-eng").innerHTML = marked.parse(text);
    });
  
  fetch("markdown/about.md")
    .then(response => response.text())
    .then(text => {
      document.getElementById("about-content").innerHTML = marked.parse(text);
    });

  fetch("../markdown/projects/aboutlumin.md")
    .then(response => response.text())
    .then (text => {
      document.getElementById("about-lumin").innerHTML = marked.parse(text);
    });
  
  fetch("../markdown/download.md")
    .then(response => response.text())
    .then (text => {
      document.getElementById("download-text").innerHTML = marked.parse(text);
    });

  fetch("../markdown/innerlines.md")
    .then(response => response.text())
    .then (text => {
      document.getElementById("innerlines-text").innerHTML = marked.parse(text);
    });

  document.Fhome.submit();

  update();
}

start();
document.Fhome.submit();