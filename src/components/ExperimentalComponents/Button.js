import React, { Component } from "react";

class Button extends Component {
    

    render(){
        let x = 5;
        const {name,updateValue,test} = this.props;
        return(
        <button onClick = {()=> updateValue(x)} > 
           {name} I've Been Clicked {test} Times
        </button>)
    }
}
export default Button
// why do I use this.Function instead of Function.