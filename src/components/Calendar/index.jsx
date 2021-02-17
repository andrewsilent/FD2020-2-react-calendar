import React, { Component } from "react";
import SelectedDate from "../SelectedDate";
import SelectedMonth from "../SelectedMonth";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      selectedDate: new Date(),
    };
  }

  selectNewDate = (newDate) => {
    this.setState({selectedDate: newDate});
  }

  render() {
    const { currentDate, selectedDate } = this.state;
    return (
      <div className="modal-calendar">
        <SelectedDate selectedDate={selectedDate} />
        <SelectedMonth selectedDate={selectedDate} currentDate={currentDate} selectNewDate={this.selectNewDate}/>
      </div>
    );
  }
}

export default Calendar;
