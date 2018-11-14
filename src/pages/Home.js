import React, { Component } from 'react';

export default class Home extends Component {

  handleClick() {
    console.log("hello");
  }

  render() {
    return (
      <div className="">
        Home works FUCK YEAH
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
};
