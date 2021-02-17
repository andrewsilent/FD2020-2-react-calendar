import React, { Component } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
  }

  getClassName = () => {
    const { date, selectedDate } = this.props;
    let classnames = [];
    classnames.push("day");
    if (
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      classnames.push("current");
    }
    if (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth()
    ) {
      classnames.push("selected");
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
