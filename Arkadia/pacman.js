
alert('Hello, welcome to the game!');

document.addEventListener("DOMContentLoaded", () => {
    const scoreDisplay = document.getElementById("score");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    const container = document.querySelector(".container");
    container.appendChild(scoreDisplay);
    container.appendChild(grid);

    const width = 28;
    let score = 0;
    const layout = [/* layout array here */];
    const squares = [];

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");
            square.id = i;
            grid.appendChild(square);
            squares.push(square);
            if (layout[i] === 0) squares[i].classList.add("pac-dot");
            if (layout[i] === 1) squares[i].classList.add("wall");
            if (layout[i] === 2) squares[i].classList.add("ghost-lair");
            if (layout[i] === 3) squares[i].classList.add("power-pellet");
        }
    }

    createBoard();

    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add("pac-man");

    function movePacman(e) {
        const directions = {
            "ArrowLeft": -1,
            "ArrowUp": -width,
            "ArrowRight": 1,
            "ArrowDown": width,
        };

        const newDirection = directions[e.key];
        if (newDirection !== undefined) {
            const nextIndex = pacmanCurrentIndex + newDirection;

            if (
                nextIndex >= 0 &&
                nextIndex < squares.length &&
                !squares[nextIndex].classList.contains("wall") &&
                !squares[nextIndex].classList.contains("ghost-lair")
            ) {
                pacmanCurrentIndex = nextIndex;
                squares[pacmanCurrentIndex].classList.add("pac-man");
                squares[pacmanCurrentIndex - newDirection].classList.remove("pac-man");
                pacDotEaten();
                powerPelletEaten();
                checkForGameOver();
                checkForWin();
            }
        }
    }

    document.addEventListener("keyup", movePacman);

    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove("pac-dot");
        }
    }

    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            score += 10;
            scoreDisplay.innerHTML = score;
            // Logic for ghosts becoming scared
            squares[pacmanCurrentIndex].classList.remove("power-pellet");
        }
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN;
        }
    }

    const ghosts = [/* ghost instances here */];

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        moveGhost(ghost);
    });

    function moveGhost(ghost) {
        const directions = [-1, 1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghost.timerId = setInterval(() => {
            if (!squares[ghost.currentIndex + direction].classList.contains("ghost") &&
                !squares[ghost.currentIndex + direction].classList.contains("wall")) {
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }
        }, ghost.speed);
    }

    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains("ghost") && 
            !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            setTimeout(() => alert("Game Over"), 500);
        }
    }

    function checkForWin() {
        if (score >= 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            setTimeout(() => alert("You have WON!"), 500);
        }
    }
});
