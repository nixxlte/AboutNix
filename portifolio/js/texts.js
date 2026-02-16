function update() {
    update()
}

function start() {
    fetch("./markdown/main.md")
        .then(response => response.text())
        .then(text => {
        document.getElementById("main").innerHTML = marked.parse(text);
        });
    update()
}

start()