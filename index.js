// @ts-check

"use strict";

const app = () => {
  const canvas = document.querySelector("canvas");

  /**
   * Returns an object that provides methods and properties
   * for drawing and manipulating images and graphics on a
   * canvas element in a document. A context object
   * includes information about colors, line widths, fonts,
   * and other graphic parameters that can be drawn on a canvas.
   *
   * sets the rendered for the canvas, could be any of these options below
   * bitmaprenderer
   * webgl
   * webgl2
   */
  const context = canvas.getContext("2d");

  class Sprite {
    position = {
      x: 0,
      y: 0,
    };

    constructor({ position: { y, x }, image }) {
      this.position = {
        x,
        y,
      };
      this.image = new Image();
      this.image.src = image;
    }

    // integration of the sprite with canvas
    render() {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }

  const background = new Sprite({
    position: {
      x: -735,
      y: -600,
    },
    image: "./src/assets/tiled/Pellet-Town.png",
  });

  canvas.width = 1024;
  canvas.height = 576;

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const playerImage = new Image();
  playerImage.src = "./src/assets/images/playerDown.png";

  const player = new Sprite({
    position: {
      x: canvas.width / 2 - playerImage.width / 4 / 2,
      y: canvas.height / 2 - playerImage.height / 2,
    },
    image: "./src/assets/images/playerDown.png",
  });

  let lastKey = "";
  let sprint = false;
  let crouching = false;
  const keys = {
    ArrowUp: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    ArrowDown: { pressed: false },

    a: { pressed: false },
    w: { pressed: false },
    d: { pressed: false },
    s: { pressed: false },
  };

  const animate = () => {
    // find way to handle FPS here
    window.requestAnimationFrame(animate);

    background.render();
    // player.render()
    context.drawImage(
      playerImage,
      0,
      0,
      playerImage.width / 4,
      playerImage.height,
      canvas.width / 2 - playerImage.width / 4 / 2,
      canvas.height / 2 - playerImage.height / 2,
      playerImage.width / 4,
      playerImage.height
    );

    let step = 3;

    if (crouching) step /= 2;
    if (sprint) step *= 2;

    if (
      (keys.w.pressed && lastKey === "w") ||
      (keys.ArrowUp.pressed && lastKey === "ArrowUp")
    ) {
      background.position.y += step;
    }

    if (
      (keys.d.pressed && lastKey === "d") ||
      (keys.ArrowRight.pressed && lastKey === "ArrowRight")
    ) {
      background.position.x -= step;
    }

    if (
      (keys.s.pressed && lastKey === "s") ||
      (keys.ArrowDown.pressed && lastKey === "ArrowDown")
    ) {
      background.position.y -= step;
    }

    if (
      (keys.a.pressed && lastKey === "a") ||
      (keys.ArrowLeft.pressed && lastKey === "ArrowLeft")
    ) {
      background.position.x += step;
    }
  };

  animate();

  window.addEventListener("keydown", ({ key, code }) => {
    if (code.includes("Shift")) {
      crouching = true;
      return;
    }

    if (code === "Space") {
      sprint = true;
      return;
    }

    if (keys[key] === undefined) {
      // alert("didnt code this key yet!");
      return;
    }

    lastKey = key;
    keys[key].pressed = true; // ?
  });

  window.addEventListener("keyup", ({ key, code }) => {
    if (code.includes("Shift")) {
      crouching = false;
      return;
    }

    if (code === "Space") {
      sprint = false;
      return;
    }

    if (keys[key] === undefined) {
      // alert("didnt code this key yet!");
      return;
    }

    keys[key].pressed = false; // ?
  });
};

document.addEventListener("DOMContentLoaded", app);
