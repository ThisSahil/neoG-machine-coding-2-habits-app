import React from "react";
import { useParams } from "react-router-dom";
import "./Singledetail.css";
import { HabitState } from "./Context/Context";
import { useNavigate } from "react-router-dom";

const Singledetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { habitState, habitDispatch } = HabitState();

  const habits = habitState.habits;

  const habit = habits.find((habit) => habit.id === Number(id));
  const { name, goal, repeat, startDate, image } = habit;

  const handleDelete = () => {
    const updated = habits.filter((habit) => habit.id !== Number(id));

    habitDispatch({ type: "FETCH_HABITS", payload: updated });
    navigate("/");
  };

  const handleArchive = () => {
    const updated = habits.map((habit) => {
      if (habit.id === Number(id)) {
        habit.arc = true;
      }

      return { ...habit };
    });

    console.log(updated);

    habitDispatch({ type: "FETCH_HABITS", payload: updated });
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/habitform/${id}`);
  };

  return (
    <div className="habit-details">
      <div className="habit-image">
        {image && <img src={image} alt={name} />}
      </div>
      <div className="habit-info">
        <h2>{name}</h2>
        <p>
          <strong>Goal:</strong> {goal}
        </p>
        <p>
          <strong>Repeat:</strong> {repeat}
        </p>
        <p>
          <strong>Start Date:</strong> {startDate}
        </p>

        <div className="buttons">
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="archive-button" onClick={handleArchive}>
            Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singledetail;
