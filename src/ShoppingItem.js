/*
  Represents each item in the list
*/

import React from "react";

class ShoppingItem extends React.Component {
  render() {
    return (
      <div>
        <p style={{ display: "inline-block" }}>{this.props.item.itemName}</p>
        <button
          type="submit"
          style={{marginLeft: "40px"}}
          onClick={this.props.deleteItem.bind(this, this.props.item.id)}
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }
}

export default ShoppingItem;
