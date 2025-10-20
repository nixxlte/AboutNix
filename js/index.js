// Code by NixitCat UwU

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
  
  document.Fhome.submit();

  update();
}

start();