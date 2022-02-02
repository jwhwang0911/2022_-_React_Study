import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";

function App() {

  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial = {true}/>
        <Hello color="blue"/>
      </Wrapper>
      <Counter />
    </>
  );
}

export default App;
