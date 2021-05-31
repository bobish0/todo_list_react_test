import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // Starting state of "newItem".
    this.state = {
      newItem: "",
      list: []
    };
  }


  updateInput(key,value){
    // update react state

      this.setState({
        [key]: value
      })
  }

  addItem(){
    // create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };


    // copy of list of items (spread operator)
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);


    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });

  }
 
  deleteItem (id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being delited
    const updatedList = list.filter(item => item.id !== id);
    
    this.setState({list: updatedList});

  }
   

   render(){
   return (
     <div className="App">
 <div>
 <h1>ToDo-List</h1>
   
   <input
   type='text'
   placeholder='Type Item Here...'
   value={this.state.newItem} // stores/shows the value of 'newItem'. 
   onChange={e => this.updateInput('newItem',e.target.value)}
   />
 
 <button className = 'add-style'
 onClick= {() => this.addItem()}
 > <b>ENTER</b> </button>
 <br/>

    <ul>
{this.state.list.map(item => {
  return(
    <li key= {item.id}>
      {item.value}
      <button className = 'delete-style'
      onClick = {() => this.deleteItem(item.id)}

      >DELETE</button>
    </li>
  )
})}
    </ul>

 
 </div>
     </div>
   );
 
   }
 }
 
 
 export default App;
 