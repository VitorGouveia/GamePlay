import { attacks } from "./attacks.js";

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
    health: 100,
    attacks: [
      attacks.tackle,
      attacks.firebolt,
      attacks.eruption,
      attacks.pound,
    ],
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
    health: 1,
    isEnemy: true,
    attacks: [attacks.tackle, attacks.pound],
  },
};
