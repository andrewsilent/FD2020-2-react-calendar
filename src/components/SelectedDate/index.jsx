import React, { Component } from "react";
import SelectedDay from "../SelectedDay";

class SelectedDate extends Component {
  render() {
    return (
        <SelectedDay date={new Date()} />
    );
  }
}

export default SelectedDate;
