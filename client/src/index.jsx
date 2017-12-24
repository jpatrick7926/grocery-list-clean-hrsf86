import React from 'react';
import ReactDOM from 'react-dom';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList
    }
  }

  handleClick(groceryObj) {
  	var flag = true;
  	var groceries = this.state.list.groceryList;

  	for (var i = 0; i < groceries.length; i++) {
  	  if (groceries[i].description.toLowerCase() === groceryObj.description.toLowerCase()) {
        var num = i;

  	  	this.setState(() => {

          this.state.list.groceryList[num].quantity = Number(this.state.list.groceryList[num].quantity) + Number(groceryObj.quantity);
          {list: this.state.groceryList}

        });
  	  	flag = false;
  	  }
  	}

  	if (flag) {
	  	this.setState((prevState) => {
	  		var prevArr = prevState.list.groceryList;
	  		var last = prevArr[prevArr.length - 1].id;
	  		var next = last + 1;
	  		groceryObj.id = next;
  			{list: prevState.list.groceryList.push(groceryObj)}
  		});
    }
  }


  render () {
    return (
      <div>
      <h1> Grocery List </h1>
      	<GroceryList list = {this.state.list.groceryList}/>
        <AddGrocery add = {this.handleClick.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
