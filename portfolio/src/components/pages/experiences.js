import React from 'react'
import { Container } from 'react-bootstrap'
import "./experiences.css"
function experiences() {
    return (
        <div className="bodyExp">
            <h1 className= "title">E X P E R I E N C E S</h1>
            <br></br>

            <div>
            <Container className="experienceCard">
            <a className="center" href="https://hiride.ca/"><img className="pics"src="/assets/hiride.png"/></a>

            <p className="experiencetext">
                        <h2>HiRide - Frontend Developer</h2>
                        At HiRide, I worked on several frontend and design projects using React, HTML, CSS, and Figma. 
                        I designed marketing graphics and a successful marketing campaign for the launch of the HiQ Trivia App that lead to 1.5 million+ downloads in less than 2 months of launch. 
                        I also designed the UI/UX of the HiQ App, as well as new gaming features, which resulted in 500,000 monthly active users and ranking top 10 in the Trivia app category in 100+ countries.
                        Additionally, I developed product specifications, product roadmaps, wireframes and high-fidelity prototypes, as well as, business proposals which were used to demo and successfully pitch to key stakeholders and potential clients.
                        I learned to work in a fast paced environment and communicate within an interdisciplinary team of engineers, designers, developers, and business personnel.
              </p>  
            </Container>
            <Container className="experienceCard">
            <a className="center" href="http://byteoftech.ca/"><img className="pics"src="/assets/byteoftech.jpg"/></a>

            <p className="experiencetext">
                        <h2>Byte of Tech - Creator & Podcast Host</h2>
                        Byte of Tech is a podcast that I Co-founded and Co-host. 
                        We discuss topics that impact students who want to pursue careers in tech, in addition, we candidly voice our opinions and experiences. We also bring in amazing guest speakers who are experts in their fields to discuss topics like diversity in STEM, side projects, securing your dream internships, and much, much more.
                        By answering important questions and tackling hard conversations, we hope to change the face of tech, one byte at a time.
                        
                        <br></br>
                        
                        <button className="ButtonLe"><a href="http://byteoftech.ca/">LEARN MORE</a></button>
                       
              </p>  
              
            </Container>
            
            <h2 className= "youtube">Checkout My Youtube Videos.</h2>
            <div className="videoContainer">
            
            <iframe className="video" width="440" height="250" src="https://www.youtube.com/embed/oZntEOWgyU0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            <iframe className="video" width="440" height="250" src="https://www.youtube.com/embed/VVAMapGyGXc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            
            </div></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default experiences
