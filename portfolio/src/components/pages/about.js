import React from 'react';
import Button from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Media from 'react-bootstrap/Media'
import  "./about.css";

function about() {
    return (
        <div>
           <h1 className= "title">A B O U T</h1>
           
           
                <div className="aboutsection">
                    <img
                      className="profile"
                      src="/assets/circle-cropped.png"/>
                    
                      <h5 className= "know">Get to Know Me.</h5>
                      <p className="bod">
                        Hi my name is Amna Mughal, and welcome to my digital portfolio! 
                        I am an incoming second year Biomedical Engineering student at the University of Waterloo.
                        I am passionate about Product Design, Product Management , and UI/UX. I am experienced in C#, C/C++, Javascript, React, and HTML/CSS. 
                        I am also proficient in the use of Figma as a design tool (this website was actually designed in Figma). I am always looking to grow as devoloper and designer by learning new technologies and skills.
                        <br></br>
                        <br></br>
                        In my free time, you can find me doing anything creative, from drawing and painting to playing the piano and guitar. 
                        About a year ago, I started making engineering related Youtube Videos where I talk about school, internships, and even side project ideas.
                        I also Co-founded and Co-host a podcast called “Byte of Tech”. The podcast is a fun platform where I have gotten the oppotunity to be mentored by various leaders within the STEM industry.

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </p></div>
                    
                
        </div>
    )
}

export default about
