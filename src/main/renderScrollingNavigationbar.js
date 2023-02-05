import '../assets/css/main.css';
import '../assets/css/fontawesome-all.min.css';
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import { Component } from 'react'



export default class scrollyNav extends Component{
    render()
        {
            return (
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                <li><Link  activeClass="nav" to="About" spy={true} smooth={true}>About</Link></li>
                <li><Link  to="Current Projects" spy={true} smooth={true}>Current Projects</Link></li>
                <li><Link  to="Resume" spy={true} smooth={true}>Resume</Link></li>
                <li><Link  to="calc" spy={true} smooth={true}>Black Scholes Calculator</Link></li>
                </ul>
            )
        };
}