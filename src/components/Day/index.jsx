import React, { Component } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date } = this.props;
    return <>{date}</>;
  }
}

export default Day;
