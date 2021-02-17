import React, { Component } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
  }

  getClassName = () => {
    const { date, selectedDate, currentDate, relativeDate } = this.props;
    let classnames = [];
    classnames.push("day");
    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth()
    ) {
      classnames.push("current");
    }
    if (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth()
    ) {
      classnames.push("selected");
    }
    if (date.getMonth() !== relativeDate.getMonth()) {
      classnames.push("another");
    }
    return classnames.join(" ");
  };

  render() {
    const { date, selectNewDate } = this.props;
    return (
      <li className={this.getClassName()}>
        <span onClick={() => selectNewDate(date)}>{date.getDate()}</span>
      </li>
    );
  }
}

export default Day;
