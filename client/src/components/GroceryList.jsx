import React from 'react';
import GroceryItem from './GroceryItem.jsx'


const GroceryList = (props) => (
  <div>
  	{props.list.map((item) => <GroceryItem item = {item} /> )}
  </div>
)

export default GroceryList;
