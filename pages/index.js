import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'; 
import { 
  BsLinkedin,
  BsEnvelope,
  BsGithub,
 } from "react-icons/bs";
 import {
  RiReactjsFill,
 } from "react-icons/ri";
import {  SiRedux } from 'react-icons/si';
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
        <link href="/icon.png" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="home"></div>
      <header className="container row">
        <Navbar expand="lg" fixed="top" bg="secondary gradient">
          <Container >
            <Navbar.Brand href="#home">    
            <img src="./navbarIcon.png" className=""/>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  href="#home" >
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
      <main className="bg-gradient text-black pt-5">
        <div className="bg-success ">

          <div className="container">    
            <div className=" col">
              <div className="row">
                <div className="row">
       
                  <div className="row ">
                   
                    <div id="about" className='col  pt-5 pe-5 me-5'>
                      <div className='row'>
                        <div className='col-4 pe-2'>
                          <img src="./portrait.png" alt="portrait"/>
                        </div>
                        <div className='col-8'>
                          <p className="fs-4">
                            Hey, I'm Phillip Galbraith.  I make, modify, and modularize 
                            APIs, responsive pages, 
                            and graphics in the greater Seattle area. 
                          </p>
                          <p className="fs-5">
                            This page:    
                            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="link-dark"> 
                              {" "}  NextJS {" "}<img src="/next.png" alt="next js" className="bg-white rounded-circle"/>
                            </a>
                            {" "}&{" "}
                            <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer"  className="link-dark"> 
                              react-bootstrap{" "} <img src="/react-bootstrap.png" alt="react bootstrap" className="rounded-circlebg-white"/>
                            </a>
                          </p>
                        </div>

                      </div>
                      
                      
                    </div>
                    <div className="width -100 d-flex row container text-secondary link-white">
                        <div className='d-flex pb-3 flex-wrap justify-content-end w-100'> 
                        {
                          [
                            {
                              url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
                              img: "./js.png",
                              alt: "JavaScript icon"
                            },
                            {
                              url: "https://expressjs.com",
                              img: "./express.png",
                              alt: "express icon"
                            },
                            {
                              url: "https://reactjs.org/",
                              img: "./react.png",
                              alt: "react icon"
                            },
                            {
                              url: "https://redux.js.org",
                              img: "./redux.png",
                              alt: "redux icon"
                            }, 
                            {
                              url: "https://www.postgresql.org",
                              img: "./postgres.png",
                              alt: "postgresql icon"
                            },
                          ].map( e => {
                            return (
                                <div className="pb-2 inline-block me-2 " >
                                  <a href={e.url} target="_blank" rel="noreferrer"> 
                                    <img src={e.img} alt={e.alt} className="bg-white"/>
                                  </a>
                                </div>
                              )
                          })
                        }
                         
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="container  pt-5">
          <h3>
            <span className="text-success"> {"{"} </span>         
            portfolio
            <span className="text-success"> {"}"} </span>
          </h3>
          <div className="row">
 
            { 
              [
                {
                  img: "./vanilla.png",
                  url: "https://phillipgalbraith.github.io/portfolio-site/",
                  h5: "Portfolio",
                  p: "plain JS/HTML/CSS"
                },
                {
                  img: "./market.png",
                  url: "https://marketplace-f9a23.web.app/",
                  h5: "Market",
                  p: "React/Redux/Postgres"
                },
                {
                  img: "./feast.png",
                  url: "https://phillipgalbraith.github.io/portfolio-site/",
                  h5: "Feast Planner",
                  p: "React/Redux/Express"
                }
              ].map(e => {
                return (
                  <div className="col-sm pb-2">
                  <a className="link-success" href={e.url}>
                    <div className="card bg-black my-2" >
                      <img src={e.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{e.h5}</h5>
                      
                        <p className="card-text ">
                          {e.p}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                )
              })
            }
          </div>
          
        </div>
    
        <div className='container w-100 my-4' id="resume">
          <h3>
            <span className="text-success"> {"{"} </span>
            My Resume 
            <span className="text-success"> {"}"} </span>
          </h3>
          <iframe 
          width="100%"
          height="600px"
            src="https://docs.google.com/document/d/e/2PACX-1vTQpLPbYcotzsc7aKIi-VxTEmHCEl8qJk0z9f3bSNrN9dob0yimAiOM9LjMK_QYTr7Glon3sLfaG7XD/pub?embedded=true"
          >
          </iframe>
        </div>
        <div className="container">
          <div className="row">
      
            <div id="contact" className=" pb-5 col-5 text-white">        
              <Navbar expand="lg">
                <Container >
                  <Navbar.Brand href="#home">    
                    <span className="text-white">Contact</span>
                  </Navbar.Brand>
                    <Nav className="me-auto">
                      <Nav.Link  href="#contact" >
                        <span className="text-white">
                          <BsEnvelope />
                          {" "}
                          <b>Email</b> 
                        </span>
                      </Nav.Link>
    
                      <Nav.Link href="https://github.com/phillipgalbraith" >
                        <span className="text-white">
                          <BsGithub />
                          {" "}
                          <b>GitHub</b> 
                        </span>
                      </Nav.Link>  
                      <Nav.Link href="https://linkedin.com/in/phillip-galbraith-web" >
                        <span className="text-white">
                          <BsLinkedin />
                          {" "}
                          <b>LinkedIn</b> 
                        </span>                
                      </Nav.Link>  
                    </Nav>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </main>
    
    </div>

  )
}
