import React, {useEffect, useReducer} from 'react';
import Board from 'components/Board';
import {BOARD_SIZE, PLAYER_ONE, PLAYER_TWO, UNIT} from 'config/const';
import useInterval from 'hooks/useInterval';
import getCellKey from 'utils/getCellKey';
import getPlayableCells from 'utils/getPlayableCells';
import playerCanChangeToDirection from 'utils/playerCanChangeToDirection';
import sumCoordinates from 'utils/sumCoordinates';
import './App.css';

const players = [PLAYER_ONE, PLAYER_TWO];

const initialState = {
  players,
  playableCells: getPlayableCells(
    BOARD_SIZE,
    UNIT,
    players.map((player) => getCellKey(player.position.x, player.position.y))
  )
};

function updateGame(game, action) {
  if (action.type === 'move') {
    const newPlayers = game.players.map((player) => ({
      ...player,
      position: sumCoordinates(player.position, player.direction)
    }));

    const newPlayersWithCollision = newPlayers.map((player) => {
      const myCellKey = getCellKey(player.position.x, player.position.y);
      return {
        ...player,
        hasDied:
          !game.playableCells.includes(myCellKey) ||
          newPlayers
            .filter((p) => p.id !== player.id)
            .map((p) => getCellKey(p.position.x, p.position.y))
            .includes(myCellKey)
      };
    });

    const newOcupiedCells = game.players.map(player => getCellKey(player.position.x, player.position.y));

    const playableCells = game.playableCells.filter(playableCell => {
      return !newOcupiedCells.includes(playableCell);
    });

    return {
      players: newPlayersWithCollision,
      playableCells: playableCells
    };
  }
  if (action.type === 'changeDirection') {
    const newPlayers = game.players.map((player) => ({
      ...player,
      direction:
        player.keys[action.key] &&
        playerCanChangeToDirection(player.direction, player.keys[action.key])
          ? player.keys[action.key]
          : player.direction
    }));
    return {
      players: newPlayers,
      playableCells: game.playableCells
    };
  }
}

function App() {
  const [game, gameDispatch] = useReducer(updateGame, initialState);

  const players = game.players;
  const diedPlayers = players.filter(player => player.hasDied);
  if (diedPlayers.length > 0) {
    console.log(diedPlayers);
  }

  useInterval(function () {
    gameDispatch({type: 'move'});
  }, diedPlayers.length > 0 ? null : 100);

  useEffect(function () {
    function handleKeyPress(event) {
      const key = `${event.keyCode}`;
      gameDispatch({type: 'changeDirection', key});
    }

    document.addEventListener('keydown', handleKeyPress);

    return function cleanUp() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <Board players={game.players} />;
}

export default App;
