import React, { Component, component } from "react";
import { VolTable } from "./VolTable";
import { VolEditor } from "./VolEditor";
export class VolDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selectedVol: null
    };
  }
  startEditing = (vol) => {
    this.setState({ showEditor: true, selectedVol: vol });
  };
  createVol = () => {
    this.setState({ showEditor: true, selectedVol: {} });
  };
  cancelEditing = () => {
    this.setState({ showEditor: false, selectedVol: null });
  };
  saveVol = (vol) => {
    this.props.saveCallback(vol);
    this.setState({ showEditor: false, selectedVol: null });
  };

  render() {
    if (this.state.showEditor) {
      return (
        <VolEditor
          key={this.state.selectedVol.id || -1}
          vol={this.state.selectedVol}
          saveCallback={this.saveVol}
          cancelCallback={this.cancelEditing}
        />
      );
    } else {
      return (
        <div className="m-2">
          <VolTable
            vols={this.props.vols}
            editCallback={this.startEditing}
            deleteCallback={this.props.deleteCallback}
          />
          <div className="text-center">
            <button className="btn btn-primary m-1" onClick={this.createVol}>
              Create Product
            </button>
          </div>
        </div>
      );
    }
  }
}
