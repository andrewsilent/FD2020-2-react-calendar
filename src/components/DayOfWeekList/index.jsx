import React, { Component } from "react";

class DayOfWeekList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeekList: ["s", "m", "t", "w", "t", "f", "s"],
    };
  }

  render() {
    const { dayOfWeekList } = this.state;
    return (
      <ul className="day-of-week-list">
        {dayOfWeekList.map((element, index) => {
          return (
            <li key={index} className="day-of-week">
              {element}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default DayOfWeekList;
