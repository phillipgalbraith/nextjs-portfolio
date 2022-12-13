import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'; 
import { 
  BsLinkedin,
  BsEnvelope,
  BsGithub,
 } from "react-icons/bs";
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {



  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  
  return (
    <div className="bg-dark bg-gradient">

      <Head>
        <title>
          Phillip Galbraith
        </title>
        <link href="/logo.png" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="home"></div>
      <header className="container row">
        <Navbar expand="lg" fixed="top" bg="secondary gradient">
          <Container >
            <Navbar.Brand href="#home">    
            <img src="./logo.png" className=""/>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="home" href="#home" >
                  <span className="text-black">
                    <b>Phillip Galbraith</b>
                  </span>
                </Nav.Link>
            
                <Nav.Link href="#home" >
                  <b>About</b>
                </Nav.Link>  
                <Nav.Link href="#portfolio" >
                  <b>Portfolio</b>
                </Nav.Link>  
                <Nav.Link href="#resume" >
                  <b>Resume</b>
                </Nav.Link>
                <Nav.Link href="#contact" >
                  <b>Contact</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      <main className="bg-gradient text-black mt-5">
        <div className="bg-success bg-gradient">


          <h1 className='pt-5 ps-5'>Phillip Galbraith</h1>
  
          <div className="container col">
            <div className="row">
              <div className="row">
     
                <div className="row mb-3">
                 
                  <div id="about" className='col-lg pe-5 me-5'>
                    <p>
                      I make, modify, and modularize 
                      APIs, responsive pages, 
                      and graphics.
                    </p>
                    <p className="d-flex text-secondary"> 
                      <div className="p-2 bg-white rounded-circle border border-white" >
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                          <img src="js.png" alt="html5" width="40" height="40"/> 
                        </a>
                      </div>
                      
                      <span>{" . "}</span>
                      <div className="p-2 bg-white rounded-circle border border-white" >
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                          <img src="express.png" alt="html5" width="40" height="40"/> 
                        </a>
                      </div>
                      
                      <span>{" . "}</span>
                      <div className="p-2 bg-white rounded-circle border border-white" >
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                          <img src="react.png" alt="react" width="40" height="40"/> 
                        </a> 
                      </div>
                      <span>{" . "}</span>
                      <div className="p-2 bg-white rounded-circle border border-white" >
                        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                          <img src="postgres.png" alt="postgresql" width="40" height="40"/> 
                        </a>
                      </div>
                      <span>{" . "}</span>
                      <div className="p-2 bg-white rounded-circle border border-white" >
                        <a className="bg-white rounded-circle border border-white" href="https://redux.js.org" target="_blank" rel="noreferrer"> 
                          <img src="redux.png" alt="redux" width="40" height="40"/> 
                        </a> 
                      </div>
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="container">
          <h2>portfolio</h2>
          <div className="row">
 
            <div className="col-sm pb-2">
              <a href="https://phillipgalbraith.github.io/portfolio-site/">
                <div className="card link-info bg-black my-2" >
                  <img src="./vanillaPortfolio.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Portfolio</h5>
                  
                    <p className="card-text ">
                      plain JS/HTML/CSS
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm pb-2">
              <a href="https://marketplace-f9a23.web.app/">
                <div className="card link-info bg-black  my-2" >
                  <img src="./marketplace.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Marketplace</h5>
                    <p className="card-text">
                      React/Redux/Postgres
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm row">
              <a href="https://feast-planner-2b2ea.web.app/dashboard">
                <div className="card link-info bg-black my-2" >
                  <img src="./feastPlanner.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Feast Planner</h5>
                    <p className="card-text">
                    React/Redux/Express
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
        </div>
    
        <div className='container w-100 my-4' id="resume">
          My Resume
          <iframe 
          width="100%"
          height="600px"
            src="https://docs.google.com/document/d/e/2PACX-1vTQpLPbYcotzsc7aKIi-VxTEmHCEl8qJk0z9f3bSNrN9dob0yimAiOM9LjMK_QYTr7Glon3sLfaG7XD/pub?embedded=true"
          >
          </iframe>
        </div>
        <div id="contact" className=" pb-5 container row bg-dark text-white">        
          <Navbar expand="lg">
            <Container >
              <Navbar.Brand href="#home">    
                <span className="text-white">Contacts</span>
              </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link id="home" href="#contacts" >
                    <span className="text-info">
                      <BsEnvelope />
                      {" "}
                      <b>Email</b> 
                    </span>
                  </Nav.Link>

                  <Nav.Link href="https://github.com/phillipgalbraith" >
                    <span className="text-info">
                      <BsGithub />
                      {" "}
                      <b>GitHub</b> 
                    </span>
                  </Nav.Link>  
                  <Nav.Link href="https://linkedin.com/in/phillip-galbraith-web" >
                  <span className="text-info">
                      <BsLinkedin />
                      {" "}
                      <b>LinkedIn</b> 
                    </span>                </Nav.Link>  
                </Nav>
            </Container>
          </Navbar>
        </div>
      </main>
    
    </div>

  )
}
