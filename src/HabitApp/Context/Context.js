import React, { createContext, useContext, useEffect, useReducer } from "react";
import { habitReducer } from "./Reducer";
import { habits } from "../../fakeFetch/api";

const HabitContext = createContext();

const Context = ({ children }) => {
  const [habitState, habitDispatch] = useReducer(habitReducer, {
    habits: [],
  });

  const fetchHabits = () => {
    setTimeout(() => {
      habitDispatch({ type: "FETCH_HABITS", payload: habits });
    }, 1000);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <HabitContext.Provider value={{ habitState, habitDispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

export default Context;

export const HabitState = () => {
  return useContext(HabitContext);
};
