import React, { Component } from "react";

class SelectedDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeekArray: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "satarday",
      ],
    };
  }

  render() {
    const { dayOfWeekArray } = this.state;
    const { date } = this.props;
    return (
      <div className="selected-day">
        <h2 className="day-of-week">{dayOfWeekArray[date.getDay()]}</h2>
        <p className="day">{date.getDate()}</p>
      </div>
    );
  }
}

export default SelectedDay;
