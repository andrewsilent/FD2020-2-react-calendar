import React, { Component } from "react";
import SelectedDate from "../SelectedDate";
import SelectedMonth from "../SelectedMonth";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }

  render() {
    return (
      <div className="modal-calendar">
        <SelectedDate selectedDate={this.state.selectedDate} />
        <SelectedMonth />
      </div>
    );
  }
}

export default Calendar;
