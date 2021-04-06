let canvas = document.getElementById("snake");
let context = canvas.getContext("2d")
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

const randomColor = Math.floor(Math.random() * 16777215).toString(16);


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

var g = context.createLinearGradient(snake[0].x, 1, 1, snake[0].y);
g.addColorStop(0, '#0d571f');
g.addColorStop(.5, '#8fb398');
g.addColorStop(1, 'green');


function criarCobra() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = g;
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}



function criarComida() {
    context.fillStyle = "#" + randomColor;
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function play() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Fim de Jogo');
        }
    }

    criarBG();
    criarCobra();
    criarComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != comida.x || snakeY != comida.y) {
        snake.pop();

    } else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(play, 100);