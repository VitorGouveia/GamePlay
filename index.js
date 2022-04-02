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

  canvas.width = 1024;
  canvas.height = 576;

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const image = new Image();
  image.src = "./src/assets/tiled/Pellet-Town.png";

  image.onload = () => {
    context.drawImage(image, -735, -600);
  };

  const playerImage = new Image();
  playerImage.src = "./src/assets/images/playerDown.png";

  playerImage.onload = () => {
    // @ts-ignore
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
  };
};

document.addEventListener("DOMContentLoaded", app);
