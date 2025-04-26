let startTime, interval, elapsedTime = 0;

function updateTime() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    const ms = diff % 1000;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60));

    document.getElementById('time').textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms, 3)}`;
}

function pad(num, size = 2) {
    return num.toString().padStart(size, '0');
}

function startStopwatch() {
    if (!interval) {
        startTime = Date.now();
        interval = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        elapsedTime += Date.now() - startTime;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00:00.000';
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    const lapTime = document.getElementById('time').textContent;
    const lapDiv = document.createElement('div');
    lapDiv.textContent = lapTime;
    document.getElementById('laps').appendChild(lapDiv);
}