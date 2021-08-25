function Rgba() {
  for (let i = 0; i < 4; i += 1) {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + i));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  }
}

export default Rgba;
