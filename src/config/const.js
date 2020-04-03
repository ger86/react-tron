export const UNIT = 15;
export const BOARD_SIZE = 750;

export const PLAYER_ONE = {
  color: '#CC0000',
  id: '1',
  keys: {
    38: 'up',
    39: 'right',
    40: 'down',
    37: 'left'
  },
  direction: 'right',
  position: {x: UNIT * 6, y: UNIT * 6}
}

export const PLAYER_TWO = {
  color: '#0000CC',
  id: '2',
  keys: {
    87: 'up',
    68: 'right',
    83: 'down',
    65: 'left'
  },
  direction: 'left',
  position: {x: UNIT * 43, y: UNIT * 43}
}