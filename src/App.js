import React, {useReducer} from 'react';
import Board from 'components/Board';
import {PLAYER_ONE, PLAYER_TWO} from 'config/const';
import useInterval from 'hooks/useInterval';
import './App.css';

const initialState = [PLAYER_ONE, PLAYER_TWO];

function updateGame(players, action) {
  if (action.type === 'move') {
    const newPlayers = players.map(player => ({
      ...player,
      position: {x: player.position.x + 15, y: player.position.y}
    }));
    return newPlayers;
  }
}

function App() {
  const [players, gameDispatch] = useReducer(updateGame, initialState);

  useInterval(function() {
    gameDispatch({type: 'move'});
  }, 1000);

  return <Board players={players} />;
}

export default App;
