import React from "react";
import { HabitState } from "./Context/Context";
import Habitcard from "./Habitcard";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";

const All = () => {
  const navigate = useNavigate();

  const { habitState, habitDispatch } = HabitState();

  console.log(habitState);

  const habits = habitState.habits;

  const handleClick = () => {
    navigate(`/habitform/${habits.length}`);
  };

  return (
    <div className="all-container">
      <Link to="/archive">Archived</Link>

      {habits.map((habit) => !habit.arc && <Habitcard habit={habit} />)}

      <div className="card" onClick={handleClick}>
        <h3 className="habit-name">Add a New Habit</h3>
        <div className="symbol">+</div>
      </div>
    </div>
  );
};

export default All;
