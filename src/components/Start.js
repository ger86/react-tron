import React from 'react';
import Button from 'components/Button';

export default function Start({onClick}) {
  return (
    <div className="play-info">
      <Button onClick={onClick}>Comenzar</Button>
    </div>
  );
}
