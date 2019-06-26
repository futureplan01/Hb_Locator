import React, { Component } from "react";

const WithClicker = OriginalComponent =>{
    class NewComponent extends Component {
        constructor(props){
            super(props);
            this.state = {count: 0};
            this.ButtonClicked = this.ButtonClicked.bind(this);
        }
        ButtonClicked(){
            let newCount = this.state.count;
            this.setState({count: ++newCount})
        }
        render (){
            return <OriginalComponent count = {this.state.count} ButtonClicked = {this.ButtonClicked} name= "JJ the Best"/>
        }
    }
    return NewComponent;
}
export default WithClicker;

// why do I use this.Function instead of Function.