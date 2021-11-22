import { render } from "react-dom";
import { Component } from "react";

class Countercomponent extends Component {
    constructor(props){
        super(props);
      this.state = {
        initialValue : 5,
        temp : 5, 
        
      }
    }
    
    count = 0;
    handleIncrement = () => {
      this.setState({initialValue : this.state.initialValue + 1});
      this.count++;
    }

    render(){
      return (
        <div>
        <h3>{this.props.componentname} Component</h3>
        <h4>Initial Value : {this.state.initialValue} </h4>
        <button onClick={this.handleIncrement}>Increment</button> &nbsp;
        <button onClick={() =>{this.setState({initialValue: this.state.initialValue  -1}); this.count--}}>Decrement</button> &nbsp;
        <button onClick={() =>{this.setState({initialValue: this.state.temp});this.count = 0}}>Reset</button>
        
        </div>
      );
    }
}

    export default Countercomponent;