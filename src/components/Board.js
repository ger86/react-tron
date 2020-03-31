import React, {useEffect, useRef} from 'react';

const unit = 15;
const boardSize = 750;

export default function Board() {
  const canvasRef = useRef();
  useEffect(function() {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = '#001900';
    for (let i = unit * 2; i <= boardSize; i += unit * 2 ) {
      context.moveTo(i, 0);
      context.lineTo(i, boardSize);
    }
    for (let i = unit * 2; i <= boardSize; i += unit * 2 ) {
      context.moveTo(0, i);
      context.lineTo(boardSize, i);
    }
    context.stroke();
    context.closePath();
  }, []);
  return (
    <canvas ref={canvasRef} id="board" width={boardSize} height={boardSize} className="board" />
  );
}
