import React from 'react';

const Home = () => {
  const onButtonClicked = () => {
    console.log('Button clicked');
  }

  return (
    <div>
      <div>I am Home Component www</div>
      <button onClick={onButtonClicked}>Press Me</button>
    </div>
  );
};

export default {
  component: Home,
}