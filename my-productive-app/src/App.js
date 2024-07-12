//U22562170

import './App.css';
import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator'; //imports

function App() { //footer included
  return (
    <div className="App">
      <FancyText title = {true} text="Task Manager App"/>
      <TaskGenerator/>
      <footer>
        <FancyText title = {false} text="2024 Task Manager App"/>
      </footer>
    </div>
  );
}

export default App;
