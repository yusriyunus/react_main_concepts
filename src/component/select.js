import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      flavors: [
        { id: 1, flavor: "Grapefruit" },
        { id: 2, flavor: "Lime" },
        { id: 3, flavor: "Coconut" },
        { id: 4, flavor: "Mango" }
      ]
    };
  }

  handleSubmit = e => {
    alert("Your favorite flavor is : " + this.state.value);
    e.preventDefault();
  };

  handleChange = e => {
    const value = [...this.state.value];
    value.length > 0
      ? value.includes(e.target.value)
        ? this.setState({
            value: value.filter(item => item !== e.target.value)
          })
        : this.setState({
            value: [...value, e.target.value]
          })
      : this.setState({ value: [e.target.value] });
  };

  render() {
    const { flavors, value } = this.state;
    console.log(value);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor :
          <select multiple value={value} onChange={this.handleChange}>
            {flavors.map(flavor => {
              return (
                <option key={flavor.id.toString()}>{flavor.flavor}</option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
}

export default Select;
