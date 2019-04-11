import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
            <header>
                <div className = "logo">
                    <p>HANDBALL COURT LOCATOR</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to = "/">HOME</Link></li>
                        <li><Link to = "/Map">MAP</Link></li>
                        <li className = "lastLink"><Link to = "/anything_else">MORE</Link></li>
                    </ul>
                </nav>
            </header>
    );
  }
}
export default Header;