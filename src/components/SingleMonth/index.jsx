import React, { Component } from "react";
import DayOfWeekList from "../DayOfWeekList";
import DayList from "../DayList";

class SingleMonth extends Component {
  render() {
    return (
      <div className="single-month">
        <h2 className="month">February 2020</h2>
        <DayOfWeekList />
        <DayList />
      </div>
    );
  }
}

export default SingleMonth;
