import React, { Component } from "react";
import SelectedDay from "../SelectedDay";
import SelectedDayOfWeek from "../SelectedDayOfWeek";

class SelectedDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedDate: date } = this.props;
    return (
      <div className="selected-day">
        <SelectedDayOfWeek date={date} />
        <SelectedDay date={date} />
      </div>
    );
  }
}

export default SelectedDate;
