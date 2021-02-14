import React, { Component } from "react";
import DayOfWeekList from "../DayOfWeekList";
import DayList from "../DayList";
import MonthList from "../MonthList";

class SelectedMonth extends Component {
  render() {
    return (
      <div className="selected-month">
        <MonthList />
        <DayOfWeekList />
        <DayList />
      </div>
    );
  }
}

export default SelectedMonth;
