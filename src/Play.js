import React, { Component } from "react";

export class Play extends Component {
  state = {
    play: false
  };

  componentDidMount() {
    const Beep = this.props.address;
    this.audio = new Audio(Beep);

    this.audio.load();
    console.log(this.props.className);
    console.log(this.props.address);
  }
  playAudio() {
    const audioPromise = this.audio.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          // autoplay started
          console.log("BEEP!!!");
          console.log(this.props.address);
        })
        .catch((err) => {
          // catch dom exception
          console.info(err);
        });
    }
  }
  render() {
    // const { time } = this.state;
    return (
      <button className={this.props.className} onClick={() => this.playAudio()}>
        {" "}
        Play{" "}
      </button>
    );
  }
}
