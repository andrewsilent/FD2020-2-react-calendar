import React, { Component } from "react";

class SelectedDayOfWeek extends Component {
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
    const { selectedDate } = this.props;
    const { dayOfWeekArray } = this.state;
    return (
      <h2 className="day-of-week">{dayOfWeekArray[selectedDate.getDay()]}</h2>
    );
  }
}

export default SelectedDayOfWeek;
