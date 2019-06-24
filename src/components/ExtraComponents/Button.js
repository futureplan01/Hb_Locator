import React, { Component } from "react";

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.ButtonClicked = this.ButtonClicked.bind(this);
    }
    ButtonClicked(){
        let newCount = this.state.count;
        this.setState({count: ++newCount})
    }
    render(){
        let count = this.state.count;
        return(
        <button onClick = {this.ButtonClicked} > 
            I've Been Clicked {count} Times
        </button>)
    }
}
export default Button
// why do I use this.Function instead of Function.