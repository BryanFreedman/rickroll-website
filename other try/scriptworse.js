document.addEventListener('DOMContentLoaded', function() {
    const rickPlayersContainer = document.getElementById('rickPlayers');

    const audioSources = [
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3',
        'jocofullinterview41.mp3'
    ];

    let currentAudioIndex = 0; // Index of the currently playing audio

    const createPlayer = (audioSource) => {
        const audio = new Audio(audioSource);
        audio.controls = true;
        audio.autoplay = true;

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.appendChild(audio);
        rickPlayersContainer.appendChild(playerDiv);

        // Position the player randomly
        const x = Math.random() * (window.innerWidth - playerDiv.clientWidth);
        const y = Math.random() * (window.innerHeight - playerDiv.clientHeight);
        playerDiv.style.left = `${x}px`;
        playerDiv.style.top = `${y}px`;

        return audio;
    };

    const playNextAudio = () => {
        if (currentAudioIndex < audioSources.length) {
            const audio = createPlayer(audioSources[currentAudioIndex]);
            audio.onended = () => {
                currentAudioIndex++; // Move to the next audio in sequence
                playNextAudio(); // Play the next audio
            };
        }
    };

    playNextAudio(); // Start playing the first audio immediately
});