import React, { Component } from "react";
import { Play } from "./Play";

export class VolTableRow extends Component {
  render() {
    let p = this.props.vol;
    return (
      <tr>
        <td> {p.id} </td>
        <td> {p.vol} </td>
        <td> {p.Lesson} </td>
        <td> {p.address} </td>
        <td>
          <button
            className="btn btn-sm btn-warning m-1"
            onClick={() => this.props.editCallback(p)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => this.props.deleteCallback(p)}
          >
            Delete
          </button>
          <Play
            address={p.address}
            className="btn btn-sm btn-danger m-1"
          ></Play>
        </td>
      </tr>
    );
  }
}
