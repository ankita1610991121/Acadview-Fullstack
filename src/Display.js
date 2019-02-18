import React , {Component } from 'react';
import './App.css';
class Display extends Component{
  render(){
    return(
        <div className = "App1">
        <div> Name : {this.props.name}</div>
        <div> Age : {this.props.age}</div>
        <div> BirthMonth : {this.props.month}</div>
        
        </div>
	);
  }

}
export default Display;
