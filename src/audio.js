const baseVolume = 0.5;

export const audio = {
  map: new Howl({
    src: "./src/assets/audio/map.wav",
    html5: true,
    volume: baseVolume,
  }),
  initBattle: new Howl({
    src: "./src/assets/audio/initBattle.wav",
    html5: true,
    volume: baseVolume * 2,
  }),
  battle: new Howl({
    src: "./src/assets/audio/battle.mp3",
    html5: true,
    volume: baseVolume,
  }),
  tackle: new Howl({
    src: "./src/assets/audio/tackleHit.wav",
    html5: true,
    volume: baseVolume * 2,
  }),
  fireball: new Howl({
    src: "./src/assets/audio/fireballHit.wav",
    html5: true,
    volume: baseVolume * 2,
  }),
  initFireball: new Howl({
    src: "./src/assets/audio/initFireball.wav",
    html5: true,
    volume: baseVolume * 2,
  }),
  victory: new Howl({
    src: "./src/assets/audio/victory.wav",
    html5: true,
    volume: baseVolume * 2,
  }),
};
