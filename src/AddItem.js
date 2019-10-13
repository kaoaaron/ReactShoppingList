/*
  Form handling
*/

import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      placeholderText: "Add Item"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({
      itemName: ""
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="itemName"
            placeholder={this.state.placeholderText}
            value={this.state.itemName}
            onChange={this.onChange}
          ></input>
          <input type="submit" value="Add to Shopping list" className="btn"></input><br/>
          <b style={{ display: this.props.error }}>No item was specified</b>
        </form>
      </React.Fragment>
    );
  }
}

export default AddItem;
