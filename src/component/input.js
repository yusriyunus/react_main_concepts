import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert("A name was submitted :  " + this.state.value);
  };

  handleChange = e => {
    this.setState({ value: e.target.value.toUpperCase() });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <input type="file" />
      </React.Fragment>
    );
  }
}

export default Input;
