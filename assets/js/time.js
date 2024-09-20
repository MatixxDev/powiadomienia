let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let p = document.getElementById('time');

p.textContent = hours + ":" + minutes;