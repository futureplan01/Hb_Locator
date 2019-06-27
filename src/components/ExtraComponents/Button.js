import React, { Component } from "react";

class Button extends Component {

    render(){
        const {name,count,increment,withTest,test} = this.props;
        withTest();
        console.log(test);
        return(
        <button onClick = {increment} > 
           {name} I've Been Clicked {count} Times
        </button>)
    }
}
export default Button
// why do I use this.Function instead of Function.