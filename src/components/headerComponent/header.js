import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <div id = "text">
                <div className = "logo">
                    Handball Court Locator
                </div>

                <nav>
                    <ul>
                        <li><a href = "#">Home</a></li>
                        <li><a href = "#">Parks</a></li>
                        <li className = "lastLink"><a href = "#">More</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
    );
  }
}
export default Header;