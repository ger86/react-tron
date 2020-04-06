export default function sumCoordinates(coordA, coordB) {
  return Object.keys(coordA).reduce(
    (positionObject, coordinate) => ({
      ...positionObject,
      [coordinate]: coordA[coordinate] + coordB[coordinate]
    }),
    {}
  );
}