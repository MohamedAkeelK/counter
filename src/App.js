import React, {Component} from 'react';

class Counter extends Component {
 constructor() {
   super();
   this.state = {
     count: 0,
   };
 }

 

 increment = () => {
  if(this.state.count < 20) {
    this.setState ({
      count: this.state.count + 1
    })
  }
 }


 decrement = () => {
  if(this.state.count > 0) {
    this.setState ({
      count: this.state.count - 1
    })
  }
}
 
 clear = () => {
    this.setState ({
      count: this.state.count = 0
    })

  }

  toggle = () => {
    
  }

  render() {
    return(
      <div className = "container">
        <div className = "navbar">Counter.js</div>
        <div className = "counter">
          <h1>{this.state.count}</h1>
          <button type = "button" onClick = {this.increment}>Increment</button>
          <button type = "button" onClick = {this.decrement}>Decrement</button>
          <button type = "button" onClick = {this.clear}>clear</button>
          <button type = "button" onClick = {this.toggle}>toggle bewtween increments of 1 and 2</button>
        </div>
      </div>
    )
  }
}

export default Counter;