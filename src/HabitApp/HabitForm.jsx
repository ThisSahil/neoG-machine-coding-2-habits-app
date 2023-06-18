import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HabitState } from "./Context/Context";

const HabitForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { habitState, habitDispatch } = HabitState();

  const habits = habitState.habits;

  let habit;

  if (habits.length > id) {
    habit = habits.find((habit) => habit.id === Number(id));
  }

  const [habitData, setHabitData] = useState({
    id: id,
    name: "",
    goal: "",
    repeat: "",
    startDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHabitData({ ...habitData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onAddHabit(habitData);

    if (id < habits.length) {
      const updated = habits.map((habit) => {
        if (habit.id === Number(id)) {
          habit.name = habitData.name;
          habit.goal = habitData.goal;
          habit.repeat = habitData.repeat;
          habit.startDate = habitData.startDate;
        }

        return { ...habit };
      });

      habitDispatch({ type: "FETCH_HABITS", payload: updated });

      setHabitData({
        id: "",
        name: "",
        goal: "",
        repeat: "",
        startDate: "",
      });
      navigate("/");
    } else {
      const newHabit = {
        id: habits.length + 1,
        name: habitData.name,
        goal: habitData.goal,
        repeat: habitData.repeat,
        startDate: habitData.startDate,
      };

      habits.push(newHabit);

      setHabitData({
        id: "",
        name: "",
        goal: "",
        repeat: "",
        startDate: "",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <Link to="/">ALL</Link>
      <form className="habit-form" onSubmit={handleSubmit}>
        <label>
          Name of Habit:
          <input
            type="text"
            name="name"
            value={habitData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Goal of Habit:
          <input
            type="text"
            name="goal"
            value={habitData.goal}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Repeat:
          <input
            type="text"
            name="repeat"
            value={habitData.repeat}
            onChange={handleInputChange}
          />
        </label>
        <div className="datepicker-container">
          <label>
            Start Date:
            <input
              type="text"
              name="startDate"
              value={habitData.startDate}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default HabitForm;
