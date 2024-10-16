let clickCount = 0;
let timeLeft = 60; // Время в секундах
let timerInterval;

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("clickButton").addEventListener("click", incrementClickCount);

function startGame() {
    clickCount = 0;
    timeLeft = 60;
    
    // Сбрасываем предыдущие результаты
    document.getElementById("clickCount").textContent = "Bosishlar soni: 0";
    document.getElementById("timer").textContent = "Vaqt: 60 soniya";
    document.getElementById("result").textContent = "";
    
    // Активируем кнопку кликов
    document.getElementById("clickButton").disabled = false;
    
    // Начинаем отсчет времени
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").textContent = `Vaqt: ${timeLeft} soniya`;
    
    // Если время вышло
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}

function incrementClickCount() {
    clickCount++;
    document.getElementById("clickCount").textContent = `Bosishlar soni: ${clickCount}`;
}

function endGame() {
    document.getElementById("clickButton").disabled = true;
    document.getElementById("result").textContent = `O'yin tugadi! Siz ${clickCount} marta bosdingiz.`;
}
