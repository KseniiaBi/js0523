window.addEventListener('load', function () {
  const canvas = document.getElementById('game_canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 600;

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 100;
      this.height = 63; // розміри персонажа 100 х 62.72
      this.position = {
        x: 0,
        y: this.game.height - this.height, // x, y - координати персонажа в заданих розмірах canvas
      };
      this.imagePlayer = new Image();
      this.imagePlayer.src = 'images/player.png';

      this.spriteSheet = null;
      this.spriteIndex = 0;
      this.speed = 5;
      this.framesRunCounter = 0;
    }

    // метод draw малює персонажа
    draw() {
      if (this.spriteSheet) {
        let spriteData;
        if (this.game.mouse.isMoving) {
          spriteData = this.spriteSheet.framesRun[this.spriteIndex].position;
        } else {
          spriteData = this.spriteSheet.framesIdle[this.spriteIndex].position;
        }

        // Застосовуємо зміни трансформації, якщо персонаж рухається вліво
        if (this.game.mouse.isMoving && this.game.mouse.isMovingLeft) {
          ctx.save();
          ctx.scale(-1, 1);
          ctx.drawImage(
            this.imagePlayer,
            spriteData.x,
            spriteData.y,
            spriteData.w,
            spriteData.h,
            -this.position.x - this.width,
            this.position.y,
            this.width,
            this.height
          );
          ctx.restore();
        } else {
          ctx.drawImage(
            this.imagePlayer,
            spriteData.x,
            spriteData.y,
            spriteData.w,
            spriteData.h,
            this.position.x,
            this.position.y,
            this.width,
            this.height
          );
        }
      }
    }
    // метод update - перепіщує персонажа на основі введених
    // користувачем даних, циклічно буде переходити між кадрами cпрайтів
    update() {
      if (this.spriteSheet) {
        const mouseX = this.game.mouse.coordinatesX;
        const distanceToMove = mouseX - this.position.x;
        const speedX = distanceToMove / this.speed;
        this.position.x += speedX;

        if (this.game.mouse.isMoving) {
          this.framesRunCounter++;

          // Змінюємо кадр анімації кожні 2 оновлення
          if (this.framesRunCounter >= 2) {
            this.spriteIndex =
              (this.spriteIndex + 1) % this.spriteSheet.framesRun.length;
            this.framesRunCounter = 0;
          }
        }
      }
      this.draw();
    }
  }

  class Mouse {
    constructor(game) {
      this.game = game;
      this.coordinatesX = 0;
      this.isMoving = false;
      this.prevX = null; // Визначаємо початкові координати курсора
      this.isMovingLeft = false; //рух вправо
    }
    mousemoveHandler(event) {
      this.coordinatesX = event.clientX - canvas.offsetLeft;
      this.isMoving = true;
      console.log(this.coordinatesX);
      if (this.prevX === null) {
        this.prevX = this.coordinatesX;
      }

      if (this.coordinatesX > this.prevX) {
        this.isMovingLeft = false;
        console.log('Курсор рухається вправо');
      } else if (this.coordinatesX < this.prevX) {
        this.isMovingLeft = true;
        console.log('Курсор рухається вліво');
      }
      this.prevX = this.coordinatesX;
    }
    stopMoving() {
      this.isMoving = false;
    }
  }

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.mouse = new Mouse(this);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  canvas.addEventListener('mousemove', (event) => {
    game.mouse.mousemoveHandler(event);
  });
  canvas.addEventListener('mouseleave', () => {
    game.mouse.stopMoving();
  });

  //ф-ція animate() заставляє гравця пересуватися
  //створюємо рекурсивний цикл
  //ф-ція щоразу викликається коли потрібно оновити картинку
  function animate() {
    requestAnimationFrame(animate); //метод запускає анімацію
    ctx.clearRect(0, 0, canvas.width, canvas.height); //очищує полотно(стераємо попередній кадр, щоб намалювати наступний)
    game.player.update(); //оновлює дані персонажа перед кожним наступним кадром
  }

  // Завантажуємо JSON-файл спрайту
  fetch('images/imageCat.json')
    .then((response) => response.json())
    .then((data) => {
      game.player.spriteSheet = data; // Після завантаження зберігаємо дані JSON у змінній spriteSheet
      console.log(game.player.spriteSheet);
      animate(); // Запускаємо анімацію після завантаження спрайтів
    });
});
