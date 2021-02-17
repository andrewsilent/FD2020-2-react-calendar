import React, { Component } from "react";
import DayOfWeekList from "../DayOfWeekList";
import DayList from "../DayList";
import Month from "../Month";

class SelectedMonth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      daysArray,
      currentDate,
      selectedDate,
      relativeDate,
      selectNewDate,
      monthPagination,
    } = this.props;
    return (
      <div className="selected-month">
        <Month
          daysArray={daysArray}
          selectedDate={selectedDate}
          relativeDate={relativeDate}
          monthPagination={monthPagination}
        />
        <DayOfWeekList />
        <DayList
          daysArray={daysArray}
          currentDate={currentDate}
          selectedDate={selectedDate}
          relativeDate={relativeDate}
          selectNewDate={selectNewDate}
        />
      </div>
    );
  }
}

export default SelectedMonth;
