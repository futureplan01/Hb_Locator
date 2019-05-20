import React, { Component } from 'react';
import Handball from '../Handball.json';
class HandballData extends Component {
  render() {
    return (
        <div> 
            {Handball.map((hb, i)=>{
                return(<span key = {i}>
                    Name: {hb.Name},
                    Number of Court: {hb.Num_of_Courts}
                    <br/>
                 </span>)
            })}
        </div>
    );
  }
}
export default HandballData;