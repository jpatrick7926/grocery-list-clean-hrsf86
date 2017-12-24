import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: ''
    }
    this.addItem = this.addItem.bind(this);
    this.groceryName = this.groceryName.bind(this);
    this.setAmount = this.setAmount.bind(this);
  }

  addItem(event) {
    var grocery = {};

    grocery.description = this.state.name;
    grocery.quantity = this.state.quantity;
    return this.props.add(grocery);
  }

  groceryName(event) {
  	this.setState({name: event.target.value,});
  }

  setAmount(event) {
  	this.setState({quantity: event.target.value});
  }


  render () {
    return (
    	<div>
    	  Item: <input type = 'text'  onChange = {this.groceryName} />
      	  <br></br>
      	  Quantity: <input type = 'text'  onChange = {this.setAmount} /> <button onClick = {this.addItem}> Add Grocery </button>
    	</div>

    );
  }
}

export default AddGrocery;
