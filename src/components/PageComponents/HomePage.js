import React, { Component } from 'react';



class Homepage extends Component {

    render() {
        return (  
                <div id = "homeContainer">
                    <div id = "welcome">
                        <div id = "startBox">
                            <h2>Welcome To The Handball Court Locator</h2>
                            <p>Use this site to to find a park with a handball court near your location.<br/> Explore different areas of NYC and discover new parks.</p>
                            <div className = "startButton">
                                <p>START BUTTON</p>
                            </div>
                        </div>
                    </div>
                    <div id = "explore">    
                        <h1>Explore the Boroughs</h1>       
                    </div>
                    <div id = "slider-container">         
                            <div className = "slider">
                                <div className = "slide"><p className = "brooklynFont">Brooklyn</p></div>
                                <div className = "slide"><p className = "statenFont">Staten Island</p></div>
                                <div className = "slide"><p className = "queensFont">Queens</p></div>
                                <div className = "slide"><p className = "bronxFont">Bronx</p></div>
                                <div className = "slide"><p className = "manFont">Manhattan</p></div>
                            </div>
                    </div>    
                </div>
    );
  }
}
export default Homepage;