import "../modal.css";
import Calendar from "./calendar";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
    <div className={`background ${isOpen ? "is-active" : ""}`}></div>
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Add period</h2>
            <img src="cross.svg" alt="" />
          </div>
          <div className="modal-body">
            <div className="period-name">
              <label htmlFor="period">Period name</label>
              <input type="text" id="period" />
            </div>
            <div className="start-end-time">
              <div className="start-time">
                <label htmlFor="starttime">Start time</label>
                <input type="time" id="starttime" />
              </div>
              <div className="end-time">
                <label htmlFor="endtime">End time</label>
                <input type="time" id="endtime" />
              </div>
            </div>
            <div className="repeat-days">
              <label htmlFor="repeat-days">Repeat days</label>
              <div className="days">
                <div className="day">
                  <button className="day-btn clicked">M</button>
                </div>
                <div className="day">
                  <button className="day-btn ">T</button>
                </div>
                <div className="day">
                  <button className="day-btn ">W</button>
                </div>
                <div className="day">
                  <button className="day-btn clicked">T</button>
                </div>
                <div className="day">
                  <button className="day-btn ">F</button>
                </div>
                <div className="day">
                  <button className="day-btn ">S</button>
                </div>
                <div className="day">
                  <button className="day-btn ">S</button>
                </div>
              </div>
            </div>
            <div className="from">
              <label htmlFor="calendar">From</label>
              <Calendar id="calendar" />
            </div>
          </div>
          <div className="modal-footer">
            <div className="footer-left">
              <div className="colors">
                <div className="color red color-checked"></div>
                <div className="color yellow"></div>
                <div className="color blue"></div>
                <div className="color green"></div>
              </div>
            </div>
            <div className="footer-right">
              <img src="delete.svg" alt="" />
              <button
                className="add-period-btn"
                onClick={() => {
                  onClose();
                }}
              >
                <img src="plus.svg" alt="" className="plus" />
                Add Period
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
