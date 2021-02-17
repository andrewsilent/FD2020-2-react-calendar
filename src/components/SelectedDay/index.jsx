import React, { Component } from "react";

class SelectedDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedDate } = this.props;
    return <p className="day">{selectedDate.getDate()}</p>;
  }
}

export default SelectedDay;
