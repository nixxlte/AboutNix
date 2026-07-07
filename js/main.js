// const username = 'nixxlte';
//             const repo = 'AboutNix';
        
//             const urlJson = `https://githubusercontent.com{username}/${repo}/main/commits.json`;
            
//             fetch("markdown/about.md")
//                 .then(response => response.text())
//                 .then(text => {
//                 document.getElementById("about-txt").innerHTML = marked.parse(text);
//             });

//             fetch(urlJson)
//                 .then(response => {
//                     if (!response.ok) throw new Error('Could not read the JSON file');
//                     return response.json();
//                 })
//                 .then(data => {
//                     document.getElementById('Commits').innerText = data.totalCommits;
//                 })
//                 .catch(error => {
//                     console.error('Error searching data:', error);
//                     document.getElementById('Commits').innerText = '0';
//                 });

//             const audio = document.getElementById('background-music');
//             const btnPlay = document.getElementById('btnPlay');

//             window.addEventListener('DOMContentLoaded', () => {
//                 audio.play().then(() => {
//                 btnPlay.textContent = "| | Pause";
//                 }).catch(() => {
//                 console.log("Autoplay blocked by browser");
//                 });
//             });

//             function togglePlay() {
//                 if (audio.paused) {
//                 audio.play();
//                 btnPlay.textContent = "| | Pause";
//                 } else {
//                 audio.pause();
//                 btnPlay.textContent = "▶ Play";
//                 }
//             }
//             function restartSong() {
//                 audio.currentTime = 0;
//                 audio.play();
//                 btnPlay.textContent = "| | Pause";
//             }