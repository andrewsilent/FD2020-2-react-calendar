import React, { Component } from "react";
import DayOfWeekList from "../DayOfWeekList";
import DayList from "../DayList";
import Month from "../Month";

class SelectedMonth extends Component {
  render() {
    return (
      <div className="selected-month">
        <Month />
        <DayOfWeekList />
        <DayList />
      </div>
    );
  }
}

export default SelectedMonth;
