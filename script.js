document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('rickPlayer');
    const audio = document.getElementById('audioPlayer');
    const container = document.getElementById('container');

    const movePlayer = (event) => {
        const x = Math.random() * (window.innerWidth - player.clientWidth);
        const y = Math.random() * (window.innerHeight - player.clientHeight);
        player.style.left = `${x}px`;
        player.style.top = `${y}px`;
    };

    player.addEventListener('mouseover', movePlayer);
});


















// let audioStarted = false;

// container.addEventListener('mouseover', function() {
// if (!audioStarted) {
//     audio.play().then(function() {
//         audioStarted = true;
//     });

// };
// }