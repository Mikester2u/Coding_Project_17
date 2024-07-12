//U22562170
import React, {UseState} from 'react';
import tasks from './tasks';
import FancyText from './FancyText'; //imports

const TaskGenerator = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = UseState(0);


const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = () => { //Pending or Completed 
    const currentTask = tasks[currentTaskIndex];
    currentTask.isCompleted = currentTask.isCompleted === "Completed" ? "Pending" : "Completed";
    setCurrentTaskIndex(currentTaskIndex); 
  };

  const currentTask = tasks[currentTaskIndex];

  return ( // FancyText and button components 
    <div>
      <FancyText title={false} text={`Task: ${currentTask.name}`} />
      <FancyText title={false} text={`Status: ${currentTask.isCompleted === "Completed" ? "Completed" : "Pending"}`} />
      <button onClick={toggleTaskCompletion}>
        {currentTask.isCompleted === "Completed" ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText title={false} text="Keep up the good work! You're doing great!" />
    </div>
  );
};

export default TaskGenerator;