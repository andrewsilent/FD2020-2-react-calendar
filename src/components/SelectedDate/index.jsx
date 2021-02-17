import React, { Component } from "react";
import SelectedDay from "../SelectedDay";
import SelectedDayOfWeek from "../SelectedDayOfWeek";

class SelectedDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedDate } = this.props;
    return (
      <div className="selected-day">
        <SelectedDayOfWeek selectedDate={selectedDate} />
        <SelectedDay selectedDate={selectedDate} />
      </div>
    );
  }
}

export default SelectedDate;
