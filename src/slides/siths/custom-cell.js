import React from "react";
import { TextField } from "@material-ui/core";

class CustomCell extends React.Component {
  state = {
    value: this.props.value
  };

  getValue = () => {
    return this.state.value;
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return <TextField value={this.state.value} onChange={this.handleChange} />;
  }
}

export default CustomCell;
