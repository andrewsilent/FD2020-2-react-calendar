import React, { Component } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
  }

  getClassName = () => {
    if (this.props.date === new Date().getDate()) {
      return `day current-day`;
    }
    return `day`;
  };

  render() {
    const { date } = this.props;
    return (
      <li className={this.getClassName()}>
        <span>{date}</span>
      </li>
    );
  }
}

export default Day;
