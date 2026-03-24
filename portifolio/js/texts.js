function home() {
  document.Fhome.submit();
}

function update() {
    update()
}

function start() {
    fetch("./markdown/main.md")
        .then(response => response.text())
        .then(text => {
            document.getElementById("main-portifolio").innerHTML = marked.parse(text);
        });

    document.Fhome.submit();

    update()
}

start()
document.Fhome.submit();