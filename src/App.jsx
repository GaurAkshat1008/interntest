import "./App.css";
import Modal from "./components/modal";
import { useState } from "react";

function App() {
  var date = new Date();
  var nextDate = new Date(date);
  date = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  nextDate.setDate(nextDate.getDate() + 7);
  nextDate = nextDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="weekly-planning">
      <Modal isOpen={modalIsOpen} onClose={() => {
        setModalIsOpen(false);
      }} />
      <div className="header">
        <div className="header-left">Educator</div>
        <div className="header-middle">
          <h3>
            <img src="Planning.svg" alt="" /> Planning
          </h3>
          <h3>
            <img src="Documentation.svg" alt="" /> Documentation
          </h3>
          <h3>
            <img src="Housekeeping.svg" alt="" /> Housekeeping
          </h3>
        </div>
        <div className="header-right">
          <img src="search.svg" alt="" />
          <img src="Bell.svg" alt="" />
          <img src="Ivan.svg" alt="" />
        </div>
      </div>
      <div className="planner">
        <div className="planner-tabs">
          <div className="planner-tab">
            <button className="planner-tab-btn ">Project Planning</button>
          </div>
          <div className="planner-tab">
            <button className="planner-tab-btn active">Weekly Planning</button>
          </div>
          <div className="planner-tab">
            <button className="planner-tab-btn ">Planning Insights</button>
          </div>
        </div>
        <div className="planner-search">
          <img src="search.svg" alt="" className="image" />
          <input
            type="text"
            placeholder="Search for a project"
            className="input"
          />
        </div>
      </div>
      <div className="planner-body">
        <div className="date">
          {date}-{nextDate}
        </div>
        <img src="chevronlft.svg" alt="" className="arrow" />
        <span style={{margin:5}}>Today</span>                 
        <img src="chevronrt.svg" alt="" className="arrow" />                 
        <div className="add-period">
          <button className="add-period-btn" onClick={() => {
              setModalIsOpen(true);
          }}>
            <img src="plus.svg" alt="" className="plus" />
            Add Period
            </button>
        </div>
      </div>
      <div className="chart">
        <img src="LINES.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
