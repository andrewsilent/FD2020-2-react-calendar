import React, { Component } from "react";
import DayOfWeekList from "../DayOfWeekList";
import DayList from "../DayList";
import Month from "../Month";

class SelectedMonth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedDate, selectNewDate } = this.props;
    return (
      <div className="selected-month">
        <Month />
        <DayOfWeekList />
        <DayList selectedDate={selectedDate} selectNewDate={selectNewDate} />
      </div>
    );
  }
}

export default SelectedMonth;
