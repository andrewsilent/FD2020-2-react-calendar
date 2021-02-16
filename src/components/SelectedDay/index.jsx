import React, { Component } from "react";

class SelectedDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p className="day">{this.props.date.getDate()}</p>;
  }
}

export default SelectedDay;
