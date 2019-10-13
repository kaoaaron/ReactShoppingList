/*
  Main Container
*/

import React from "react";
import AddItem from "./AddItem";
import Items from "./Items";
import './App.css';

const blocktypes = ["none", "inline-block"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: blocktypes[0]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  //adds item
  addItem(itemName) {
    const newItem = {
      id: this.state.items.length,
      itemName: itemName,
      active: true
    };

    //checks if input consists of only whitespace
    if (itemName.replace(/\s/g, "").length) {
      this.setState({
        items: [...this.state.items, newItem],
        error: blocktypes[0]
      });

    } else {
      this.setState({
        error: blocktypes[1]
      });
    }
  }

  //deletes item from list
  deleteItem(id) {
    this.setState({
      items: [...this.state.items.filter(items => items.id !== id)]
    });
  }

  render() {
    return (
      <React.Fragment>
        <AddItem addItem={this.addItem} error={this.state.error}></AddItem>
        <Items items={this.state.items} deleteItem={this.deleteItem}></Items>
      </React.Fragment>
    );
  }
}

export default App;
