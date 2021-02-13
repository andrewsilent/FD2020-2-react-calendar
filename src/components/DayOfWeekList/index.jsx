import React, { Component } from "react";

class DayOfWeekList extends Component {
  render() {
    return (
      <ul className="day-of-week-list">
        <li className="day-of-week">S</li>
        <li className="day-of-week">M</li>
        <li className="day-of-week">T</li>
        <li className="day-of-week">W</li>
        <li className="day-of-week">T</li>
        <li className="day-of-week">F</li>
        <li className="day-of-week">S</li>
      </ul>
    );
  }
}

export default DayOfWeekList;
