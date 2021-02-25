import React from "react";

import  { ClockStyle }  from "./clockStyle";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export default class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      date: ``
    };
  }

  startTime() {
    const today = new Date();
    const h = today.getHours();
    const m = checkTime(today.getMinutes());
    const s = checkTime(today.getSeconds());
    const mm = checkTime(today.toLocaleDateString());
  

    this.setState({ date: h + ":" + m + ":" + s  + ", de " + mm });
    this.timeout = setTimeout(() => this.startTime(), 500);
  }

  componentDidMount() {
    this.startTime();
  }
  componentWillUnmount() {
    if (!this.timeout) return;
    clearTimeout(this.timeout);
  }
  render() {
    return <ClockStyle>BEM VINDO(a), SÃO {this.state.date}</ClockStyle>;
  }
}