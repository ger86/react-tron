export const UNIT = 15;
export const BOARD_SIZE = 750;

export const DIRECTIONS = {
  LEFT: { x: -UNIT, y: 0},
  RIGHT: { x: UNIT, y: 0},
  UP: { x: 0, y: -UNIT},
  DOWN: { x: 0, y: UNIT}
}

export const PLAYER_ONE = {
  color: '#CC0000',
  id: '1',
  keys: {
    38: DIRECTIONS.UP,
    39: DIRECTIONS.RIGHT,
    40: DIRECTIONS.DOWN,
    37: DIRECTIONS.LEFT
  },
  direction: DIRECTIONS.RIGHT,
  position: {x: UNIT * 6, y: UNIT * 6}
}

export const PLAYER_TWO = {
  color: '#0000CC',
  id: '2',
  keys: {
    87: DIRECTIONS.UP,
    68: DIRECTIONS.RIGHT,
    83: DIRECTIONS.DOWN,
    65: DIRECTIONS.LEFT
  },
  direction: DIRECTIONS.LEFT,
  position: {x: UNIT * 43, y: UNIT * 43}
}