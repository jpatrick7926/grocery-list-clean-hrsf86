import React from 'react';

class GroceryItem extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  }
	}

	render() {
	  return (
	    <div>{this.props.item.description + ' ' + this.props.item.quantity}</div>
	  )
	}
}

export default GroceryItem;
