import React, { Component } from "react";

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  }

  render() {
    const { month } = this.state;
    const { selectedDate, monthPagination, relativeDate } = this.props;
    return (
      <div className="month-list">
        <div className="prev-month" onClick={()=>monthPagination(-1)}>{`<`}</div>
        <h2 className="month">
          {month[relativeDate.getMonth()]} {relativeDate.getFullYear()}
        </h2>
        <div className="next-month" onClick={()=>monthPagination(1)}>{`>`}</div>
      </div>
    );
  }
}

export default Month;
