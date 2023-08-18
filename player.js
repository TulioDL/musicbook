const audio = document.createElement('audio');
audio.preload = 'auto';
audio.controls = true;
audio.src = './assets/y2mate.com - Zombies.mp3';
console.log(audio);
document.getElementById('reproductor-1').appendChild(audio);
