import React from 'react';

export const Home = () => {
  const onButtonClicked = () => {
    console.log('Button clicked');
  }

  return (
    <div>
      <div>I am Home Component ccc</div>
      <button onClick={onButtonClicked}>Press Me</button>
    </div>
  );
};