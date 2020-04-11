import sumCoordinates from 'utils/sumCoordinates';

export default function playerCanChangeToDirection(currentDirection, nextDirection) {
  const result = sumCoordinates(currentDirection, nextDirection);
  return Object.keys(result).filter(coordinate => result[coordinate] !== 0).length > 0;
}
