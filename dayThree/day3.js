const upSquare = n => Math.ceil(Math.sqrt(n));
const getLayer = n => {
  const m = upSquare(n);
  return Math.ceil((m - 1) / 2);
};
const inputNumber = 289326;
const distination = n => {
  if (n === 1)
    return 0;
  const layer = getLayer(n);
  n -= (2 * layer - 1) ** 2 + 1;
  const layerLength = 2 * layer;
  const lowerLayer = layerLength * Math.floor(n / layerLength);
  const upperLayer = lowerLayer + layerLength - 1;
  const middleLayer = (lowerLayer + upperLayer - 1) / 2;
  return layer + Math.abs(n - middleLayer);
};

console.log(distination(inputNumber));
