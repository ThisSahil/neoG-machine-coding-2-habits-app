import React from "react";
import Habitcard from "./Habitcard";
import { HabitState } from "./Context/Context";
import { Link } from "react-router-dom";

const Archive = () => {
  const { habitState, habitDispatch } = HabitState();

  //   console.log(habitState);

  const habits = habitState.habits;
  return (
    <div className="all-container">
      <Link to="/">ALL</Link>
      {habits.map((habit) => habit.arc && <Habitcard habit={habit} />)}
    </div>
  );
};

export default Archive;
