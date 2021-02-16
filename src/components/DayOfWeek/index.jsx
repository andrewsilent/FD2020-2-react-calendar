import React, { Component } from "react";

class DayOfWeek extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="day-of-week">{this.props.dayOfWeek}</li>;
  }
}

export default DayOfWeek;
