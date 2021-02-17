import React, { Component } from "react";
import Day from "../Day";

class DayList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentDate, selectedDate, relativeDate, selectNewDate, daysArray } = this.props;
    return (
      <ul className="day-list">
        {daysArray.map((element) => {
          return (
            <Day
              key={new Date(element).getTime()}
              date={element}
              currentDate={currentDate}
              selectedDate={selectedDate}
              relativeDate={relativeDate}
              selectNewDate={selectNewDate}
            />
          );
        })}
      </ul>
    );
  }
}

export default DayList;
