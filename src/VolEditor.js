import React, { Component, component } from "react";

export class VolEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: props.vol.id || "",
        vol: props.vol.vol || "",
        Lesson: props.vol.Lesson || "",
        address: props.vol.address || ""
      }
    };
  }

  handleChange = (ev) => {
    ev.persist();
    this.setState(
      (state) => (state.formData[ev.target.name] = ev.target.value)
    );
  };

  handleClick = () => {
    this.props.saveCallback(this.state.formData);
  };

  render() {
    return (
      <div className="m-2">
        <div className="form-group">
          <label>ID</label>
          <input
            className="form-control"
            name="id"
            disabled
            value={this.state.formData.id}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>vol</label>
          <input
            className="form-control"
            name="vol"
            value={this.state.formData.vol}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>LESSON</label>
          <input
            className="form-control"
            name="Lesson"
            value={this.state.formData.Lesson}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>ADDRESS</label>
          <input
            className="form-control"
            name="address"
            value={this.state.formData.address}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={this.handleClick}>
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.props.cancelCallback}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
