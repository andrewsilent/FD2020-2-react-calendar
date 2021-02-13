import React, { Component } from "react";
import SingleDay from "../SingleDay";
import SingleMonth from "../SingleMonth";

class Calendar extends Component {
  render() {
    return (
      <div className="modal-calendar">
        <SingleDay />
        <SingleMonth />
      </div>
    );
  }
}

export default Calendar;
