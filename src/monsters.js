export const monsters = {
  Emby: {
    image: "./src/assets/images/embySprite.png",
    position: {
      x: 280,
      y: 325 - 40, // - 40 is for it to go a litte up,,
    },
    frames: {
      max: 4,
    },
  },
  Draggle: {
    image: "./src/assets/images/draggleSprite.png",
    position: {
      x: 800,
      y: 100 - 40,
    },
    frames: {
      max: 4,
    },
    isEnemy: true,
  },
};
