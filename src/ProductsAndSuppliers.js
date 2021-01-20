import React, { Component } from "react";
import { Selector } from "./Selector";
import { VolDisplay } from "./VolDisplay";

export default class ProductsAndSuppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vols: [
        {
          id: 1,
          vol: "werken",
          Lesson: "L1",
          address: "https://storage.cloud.google.com/vol_test/werken.mp3"
        },
        { id: 2, vol: "werk", Lesson: "L1", address: "/src/Voice/werken.mp3" },
        {
          id: 3,
          vol: "alles",
          Lesson: "L1",
          address:
            "https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/nl/a/1/2/a120b762d26d4f5f51a7ad9c9ecf25e2.mp3"
        },
        {
          id: 4,
          vol: "alles",
          Lesson: "L1",
          address:
            "https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/nl/a/1/2/a120b762d26d4f5f51a7ad9c9ecf25e2.mp3"
        }
      ],
      Lesson2: [
        {
          id: 1,
          vol: "werken",
          Lesson: "Ls1",
          address: "https://volapp.s3-ap-northeast-1.amazonaws.com/werken.mp3"
        },
        { id: 2, vol: "werk", Lesson: "L1", address: "/src/Voice/werken.mp3" },
        {
          id: 3,
          vol: "alles",
          Lesson: "L1",
          address:
            "https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/nl/a/1/2/a120b762d26d4f5f51a7ad9c9ecf25e2.mp3"
        },
        {
          id: 4,
          vol: "alles",
          Lesson: "L1",
          address:
            "https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/nl/a/1/2/a120b762d26d4f5f51a7ad9c9ecf25e2.mp3"
        }
      ]
    };
    this.idCounter = 100;
  }
  saveData = (collection, item) => {
    if (item.id === "") {
      item.id = this.idCounter++;
      this.setState(
        (state) => (state[collection] = state[collection].concat(item))
      );
    } else {
      this.setState(
        (state) =>
          (state[collection] = state[collection].map((stored) =>
            stored.id === item.id ? item : stored
          ))
      );
    }
  };
  deleteData = (collection, item) => {
    this.setState(
      (state) =>
        (state[collection] = state[collection].filter(
          (stored) => stored.id !== item.id
        ))
    );
  };
  render() {
    return (
      <div>
        <Selector>
          <VolDisplay
            name="vols"
            vols={this.state.vols}
            saveCallback={(p) => this.saveData("vols", p)}
            deleteCallback={(p) => this.deleteData("vols", p)}
          />
          <VolDisplay
            name="Lesson2"
            vols={this.state.Lesson2}
            saveCallback={(s) => this.saveData("Lesson2", s)}
            deleteCallback={(s) => this.deleteData("Lesson2", s)}
          />
        </Selector>
      </div>
    );
  }
}
