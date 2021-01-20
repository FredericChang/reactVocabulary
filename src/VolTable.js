import React, { Component, component } from "react";
import { VolTableRow } from "./VolTableRow";
export class VolTable extends Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th
              colSpan="5"
              className="bg-primary text-white text-cneter h4 p-2"
            >
              Vol List
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Vol</th>
            <th>Lesson</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.vols.map((p) => (
            <VolTableRow
              vol={p}
              key={p.id}
              editCallback={this.props.editCallback}
              playCallback={this.props.playCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
