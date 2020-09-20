import React from 'react'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

import './home.css';
function home() {
    return (
        <div className="home">
            <Container className="homebod">
            <img className= "background" img src= "ipad3.jpg"/>
            <div className= "text">
            <h1 className= "name" >Amna Mughal</h1>
            <h2 className= "description">Student, Designer, Aspiring Engineer.</h2>
            <button className="Button2"><Link to="/about">LEARN MORE</Link></button>
            </div>
            </Container>
           
        </div>
    )
}

export default home
