import React, { Component } from "react";

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      date: new Date(),
    };
  }

  render() {
    const { month, date } = this.state;
    return (
      <div className="month-list">
        <div className="prev-month display-none">prev</div>
        <h2 className="month">
          {month[date.getMonth()]} {date.getFullYear()}
        </h2>
        <div className="next-month display-none">next</div>
      </div>
    );
  }
}

export default Month;
