import React from 'react'
import "./contact.css"

function contact() {
    return (
        <div>
            <h1 className= "title">C O N T A C T</h1>
            <h4 className= "together">Want to get to know me better? Let's Connect.</h4>
            <div className="connect-buttons">
            <button className="connect"><a href="https://www.linkedin.com/in/amna1/"><img className="btnimg" src="assets/linkedin.png"/></a></button>
            <button className="connect"><a href="https://github.com/AmnaMughal288"><img className="btnimg" src="assets/github.png"/></a></button>
            <button className="connect"><a href="mailto: a4mughal@uwaterloo.ca"><img className="btnimg" src="assets/mail.png"/></a></button>
            </div>
                      
        </div>
    )
}

export default contact
