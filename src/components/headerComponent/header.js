import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
            <header>
                <div id = "headerText">
                    <div className = "logo">
                        Handball Court Locator
                    </div>

                    <nav>
                        <ul>
                            <li><Link to = "/">Home</Link></li>
                            <li><Link to = "/Map">Map</Link></li>
                            <li className = "lastLink"><Link to = "/anything_else">Yo Mamma</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
  }
}
export default Header;