import React, { Component } from "react";
import SelectedDate from "../SelectedDate";
import SelectedMonth from "../SelectedMonth";

class Calendar extends Component {
  render() {
    return (
      <div className="modal-calendar">
        <SelectedDate />
        <SelectedMonth />
      </div>
    );
  }
}

export default Calendar;
