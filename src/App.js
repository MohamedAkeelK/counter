import React, {Component} from 'react';

class Counter extends Component {
 constructor() {
   super();
   this.state = {
     count: 0,
     button: "single increment"
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
    if((this.state.button === "single increment") && (this.state.count  <= 20)) {
      this.setState ({
        count: this.state.count + 1,
        button: "double increment"
      })
    } else if ((this.state.button === "double increment") && (this.state.count <= 18)) {
      this.setState ({
        count: this.state.count + 2,
        button: "single increment"
      })
    } else {
        return;
    }
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
          <button type = "button" onClick = {this.toggle}>{this.state.button}</button>
        </div>
      </div>
    )
  }
}

export default Counter;