import React, { Component } from "react";
import DayOfWeek from "../DayOfWeek";

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
          return <DayOfWeek key={index} dayOfWeek={element} />;
        })}
      </ul>
    );
  }
}

export default DayOfWeekList;
