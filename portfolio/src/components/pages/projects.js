import React from 'react';
import Button from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import "./projects.css";

function projects() {
    return (
        <div className= "background2">
             <h1 className= "title">P R O J E C T S</h1>
             <br></br>
        <div className= "container">
           
          <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/neumorph.png" />
                <Card.Body>
                  <Card.Title>Neumorphic HiQ Design</Card.Title>
                  <Card.Text>
                  As a fun side project, I created a neumorphic redesign of the HiQ app.
                  This Soft UI trend has been all the rage in 2020 as it adds a sense of calmness and simplicity to the app's interface.
                  </Card.Text>
                  
                  <button className="Button"><a href="https://www.figma.com/file/rfHrbI3VS93xysNqlyVJ4t/HiQ-Neumorphic-App-Designs-Portfolio?node-id=296%3A0"><img className="Buttonimg" src="assets/figma.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/hiq.png" />
                <Card.Body>
                  <Card.Title>HiQ Trivia App Design</Card.Title>
                  <Card.Text>
                  I designed the HiQ App's interface, Community, and Head-to-Head feature resulting in 500,000 monthly active users, 1 milllion+ downloads, and ranking Top 10 in Trivia in 100+ countries.
                  </Card.Text>
                  
                  <button className="Button"><a href="https://www.figma.com/file/9DgRW1zxvbrlQSD0BD9EMB/HiQ-Designs-Portfolio?node-id=459%3A0"><img className="Buttonimg" src="assets/figma.png" alt=""/></a></button>
                  <button className="Button"><a href="https://www.gethiq.ca/"><img className="Buttonimg" src="assets/link.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/BLE.png" />
                <Card.Body>
                  <Card.Title>BLE Connect App Design</Card.Title>
                  <Card.Text>
                  During my time at HiRide, I designed the BLE Connect App which is to be used with the TraceScan Wearable Devices to mitigate the spread of COVID-19 using contact tracing.
                  </Card.Text>
                  
                  <button className="Button"><a href="https://www.figma.com/file/PioKSVunJtypoVbecv1Udb/BLE-Connect-Portfolio?node-id=0%3A1"><img className="Buttonimg" src="assets/figma.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/tracescanbus.png" />
                <Card.Body>
                  <Card.Title>TraceScan - HiRide </Card.Title>
                  <Card.Text>
                  I designed the TraceScan Business web app to help Businesses facilitate contact tracing for COVID-19 conveniently using QR codes. 
                  I also worked on the frontend development using React.
                  </Card.Text>
                  
                  <button className="Button"><a href="https://www.figma.com/file/vBpKbRN9Y71wQ3uZVrKTFJ/TraceScan-Business-Portfolio"><img className="Buttonimg" src="assets/figma.png" alt=""/></a></button>
                  <button className="Button"><a href="https://www.tracescanbusiness.com/"><img className="Buttonimg" src="assets/link.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/MediTrack.png" />
                <Card.Body>
                  <Card.Title>MediTrack App Design</Card.Title>
                  <Card.Text>
                  MediTrack allows users to access prescription information easily and legibly to minimize accidental drug misusage.
                  This design concept would mitigate over 33% of preventable medication errors.
                  </Card.Text>
                  
                  <button className="Button"><a href="https://www.figma.com/file/ty7H7lFT0o0hbIiEldTuVr/MediTrack?node-id=1%3A4"><img className="Buttonimg" src="assets/figma.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/memorymaps.png" />
                <Card.Body>
                  <Card.Title>Memory Maps</Card.Title>
                  <Card.Text>
                  Memory Maps allows caretakers to remotely monitor dementia patients. 
                  Caretakers recieve updates and alerts about the patient’s whereabouts and when they are in high-risk locations. 
                  The patient can also recieve directions to get home from these areas.
                  
                  </Card.Text>
                  
                  <button className="Button"><a href="https://devpost.com/software/memorymaps#updates"><img className="Buttonimg" src="assets/devpost.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners"  src="assets/deca.png" />
                <Card.Body>
                  <Card.Title>Urban Farms</Card.Title>
                  <Card.Text>
                    Urban Farms is an entrepreneurial venture that provides fresh produce to orontonians
                    through custom microgardens. Urban farms was successful in its initiative to better the environment
                    as it was provincially recognized as one of the Top 10 Entrepreneurship Start-up Business Plans.
                    
                  </Card.Text>
                  <button className="Button"><a href="https://drive.google.com/file/d/0B13wdSVVTpxTek5ieVNVdzhTMnRoUkxYc3BDd2RUc1EwLTVN/view?usp=sharing"><img className="Buttonimg" src="assets/slides.png" alt=""/></a></button>
                  <button className="Button"><a href="https://docs.google.com/document/d/1WdcF4uGxAEHi5UH0UEkcfbPez4T4m58Zvl3Tt4w_kQM/edit?usp=sharing"><img className="Buttonimg" src="assets/docs.png" alt=""/></a></button>
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners"  src="assets/triplane.png" />
                <Card.Img variant="top" src="assets/triplane2.png" />
                <Card.Body>
                  <Card.Title>Triplane CAD</Card.Title>
                  <Card.Text>
                  CAD interpretation of a Sopwith Triplane done using SolidWorks.
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/magickingdom.png" />
                <Card.Body>
                  <Card.Title>Magic Kingdom CAD</Card.Title>
                  <Card.Text>
                    CAD interpretation of Disney's Magic Kingdom Castle done using SolidWorks.
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/gwagon.png" />
                <Card.Body>
                  <Card.Title>G-Wagon CAD</Card.Title>
                  <Card.Text>
                  CAD interpretation of a Black 2019 Mercedes-Benz G-class (G-Wagon) with tinted windows. 
                  Assembly and parts were created in SolidWorks. 
                  </Card.Text>
                  
                </Card.Body>
            </Card>
           
            
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners" src="assets/artwork.jpg" />
                <Card.Body>
                  <Card.Title>My Artwork</Card.Title>
                  <Card.Text>
                    Design is an intrinsic part of Engineering. My passion for design is fueled by my love for art.
                    Ever since I could barely hold a pencil, I've been creating art. I've worked in almost every medium, from oil paints to charcoal and even Prismacolours.
                    My love for art makes me a better developer, designer, and future Engineer.

                  </Card.Text>
                  
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners"src="assets/wheelchairSketch.png" />
                <Card.Img variant="top" src="assets/wheelchair.png" />
                <Card.Body>
                  <Card.Title>Wheelchair Cleaning Device</Card.Title>
                  <Card.Text>
                    I designed a mechanical apparatus that removes unwanted particles from wheelchair wheels with 90% efficiency. 
                    I conducted a needs assesment, developed personnas, and created requirements and constraints of the biomedical device.
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            <Card className= "proj" style={{ width: '18rem' }}>
                <Card.Img variant="top" className= "rounded-corners"src="assets/bearparts1.png" />
                <Card.Img variant="top" className= "rounded-corners"src="assets/bearparts2.png" />
                
               
                <Card.Body>
                  <Card.Title>3D Printed Bear Puzzle</Card.Title>
                  <Card.Text>
                    Designed(CAD) and 3D printed an interactive puzzle of a Grizzly Bear eating salmon on a canoe using SolidWorks. 
                  </Card.Text>
                 
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default projects
