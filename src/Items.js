/*
  Renders the list of items in the array
*/

import React from "react";
import ShoppingItem from "./ShoppingItem";

class Items extends React.Component {
  render() {
    return this.props.items.map(item => (
      <ShoppingItem
        key={item.id}
        item={item}
        deleteItem={this.props.deleteItem}
      ></ShoppingItem>
    ));
  }
}

export default Items;
