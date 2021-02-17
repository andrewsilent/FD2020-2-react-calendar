import React, { Component } from "react";
import SelectedDate from "../SelectedDate";
import SelectedMonth from "../SelectedMonth";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeMonth: 0,
      relativeDate: new Date(),
      currentDate: new Date(),
      selectedDate: new Date(),
      daysArray: this.daysArray(),
    };
  }

  firstDay = (someDate = new Date()) => {
    const local = new Date(someDate); // immutable local date
    const day = new Date(local.setDate(1)); // first day of current month
    return new Date(day.setDate(-day.getDay() + day.getDate())); // get sunday
  };

  lastDay = (someDate = new Date()) => {
    const day = new Date(someDate);
    const firstDayOfNextMonth = new Date(
      new Date(day.setMonth(day.getMonth() + 1)).setDate(1)
    );
    return new Date(
      firstDayOfNextMonth.setDate(
        6 - firstDayOfNextMonth.getDay() + firstDayOfNextMonth.getDate() // get saturday
      )
    );
  };

  daysArray = (someDate = new Date()) => {
    const start = this.firstDay(someDate);
    const finish = this.lastDay(someDate);
    const daysArray = [];
    let day = start;
    daysArray.push(this.firstDay(someDate)); // some reason if i push 'start' or 'day', pushed element turns into next day, not start day
    while (day < finish) {
      daysArray.push(day);
      day = new Date(day.setDate(day.getDate() + 1));
    }
    return daysArray;
  };

  monthPagination = (step) => {
    const newRelativeDate = new Date(
      new Date().setMonth(
        new Date().getMonth() + this.state.relativeMonth + step
      )
    );
    this.setState({
      relativeMonth: this.state.relativeMonth + step,
      daysArray: this.daysArray(newRelativeDate),
      relativeDate: newRelativeDate,
    });
  };

  selectNewDate = (newDate) => {
    this.setState({ selectedDate: newDate, relativeDate: newDate });
  };

  render() {
    const { currentDate, selectedDate, daysArray, relativeDate } = this.state;
    return (
      <div className="modal-calendar">
        <SelectedDate selectedDate={selectedDate} />
        <SelectedMonth
          daysArray={daysArray}
          currentDate={currentDate}
          selectedDate={selectedDate}
          relativeDate={relativeDate}
          monthPagination={this.monthPagination}
          selectNewDate={this.selectNewDate}
        />
      </div>
    );
  }
}

export default Calendar;
