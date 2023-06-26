class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 150;
      this.left = 170;
      this.top = 480;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/sonic.png";
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;

      this.jumping = false;
      this.jumpHeight = 250; 
      this.jumpDistance = 0;
  
    }
  
    move() {
      this.left += this.directionX;
      if (this.left < 50) {
        this.left = 50;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
        this.left = this.gameScreen.offsetWidth - this.width - 50;
      }
  
      this.updatePosition();
    }

    jump() {
      if (!this.jumping) {
        console.log("jump");
        this.jumping = true;
        const gravity = 0.6;
        const initialJumpSpeed = 15;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        if (this.jumping) {
          this.element.src = "../images/rolling.gif";
        }
    
        const jumpInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.jumping = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.jumping = false;
          }
    
          if (!this.jumping) {
            clearInterval(jumpInterval);
            this.element.src = "../images/sonic.png";
          }
        }, 16);
      }
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  }