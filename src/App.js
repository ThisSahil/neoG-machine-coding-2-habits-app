import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./HabitApp/Main";
import Singledetail from "./HabitApp/Singledetail";
import HabitForm from "./HabitApp/HabitForm";
import Archive from "./HabitApp/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/habitform/:id" element={<HabitForm />} />
        <Route path="/:id" element={<Singledetail />} />
      </Routes>
    </div>
  );
}

export default App;
