import React, { Component } from "react";
import Day from "../Day";

class DayList extends Component {
  // ***********************************************************************************************************
  // Вся эта логика переедет в другое место (на верхний уровень), когда начну внедрять возможность выбора месяца
  // ***********************************************************************************************************
  getStart(someDate = new Date()) {
    const local = new Date(someDate); // immutable local date
    const day = new Date(local.setDate(1)); // first day of current month
    return new Date(day.setDate(-day.getDay() + day.getDate())); // get sunday
  }

  getFinish(someDate = new Date()) {
    const day = new Date(someDate);
    const firstDayOfNextMonth = new Date(
      new Date(day.setMonth(day.getMonth() + 1)).setDate(1)
    );
    return new Date(
      firstDayOfNextMonth.setDate(
        6 - firstDayOfNextMonth.getDay() + firstDayOfNextMonth.getDate()
      )
    ); // get saturday
  }

  monthArray(someDate = new Date()) {
    const start = this.getStart(someDate);
    const finish = this.getFinish(someDate);
    const monthArray = [];
    let day = start;
    monthArray.push(this.getStart(someDate)); // some reason if i push 'start' or 'day', pushed element turns into next day, not start day
    while (day < finish) {
      monthArray.push(day);
      day = new Date(day.setDate(day.getDate() + 1));
    }
    return monthArray;
  }

  render() {
    return (
      <ul className="day-list">
        {this.monthArray().map((element) => {
          return (
            <Day key={new Date(element).getTime()} date={element.getDate()} />
          );
        })}
      </ul>
    );
  }
}

export default DayList;
