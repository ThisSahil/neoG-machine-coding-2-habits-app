import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Habitcard = ({ habit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${habit.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3 className="habit-name">{habit.name}</h3>
      {habit.image && <img src={habit.image} />}
    </div>
  );
};

export default Habitcard;
