import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from './InputSample';
import UserList from './UserList';

function App() {

  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial = {true}/>
        <Hello color="blue"/>
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList />
    </>
  );
}

export default App;
