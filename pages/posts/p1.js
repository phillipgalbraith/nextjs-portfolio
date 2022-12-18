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
import Head from 'next/head';

export default function P1() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

  const entry = {
    idx: 1,
    img: "../p1.png",
    title: "Blogging with Next.js",
    photoCredit: "Glenn Carstens-Peters",
    photoCreditUrl: "https://unsplash.com/@glenncarstenspeters",
    summary: `How to build a Next.js blog with react-bootstrap.`,
    date:'December 17, 2022',
    article: `
      Next.js is touted as a powerful deployment platform.  I wanted to put together a blog for months.
      Next is a great choice for Blogs due to static site generation...
    `
  }

  return (<>
      <Head>
      <title>
        Phillip Galbraith
      </title>
      <link href="/icon.png" rel="icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="bg-dark bg-gradient text-black">
        
      <header id="home" className="bg-dark container row">
        <Navbar expand="lg" fixed="top" bg="secondary gradient">
          <Container >
            <Navbar.Brand href="#home">    
              <img src="../navbarIcon.png" className=""/>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  href="/" >
                  <span className="text-white">
                    <b>Phillip Galbraith</b>
                  </span>
                </Nav.Link>
            
                <Nav.Link href="/" >
                  <b className="text-white">Home</b>
                </Nav.Link>  
                <Nav.Link href='/posts/p1' >
                  <b className="text-white">Previous</b>
                </Nav.Link>  
                <Nav.Link href='/posts/p2' >
                  <b className="text-white">Next</b>
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      
      <main className="bg-success pt-5 container bg-gradient">
        <h1 className="pt-5"> {entry.title}</h1>
        {entry.date} <br/>
        Phillip Galbraith <img src="../author.png"/>
        <div id="about" className=' d-flex flex-wrap pt-5'>
          <div className='row bg-light d-flex flex-wrap justify-content-between'>
            <div className='col '>
              <div className="card bg-black my-2" >
                <img src={entry.img} className="card-img-top" alt="..."/>
                <div className="card-body text-light">
                  <p className="card-title">
                    Photo by <a className="link-light" href={entry.photoCreditUrl}>{entry.photoCredit}</a>
                  </p>
                  <p className="card-text ">
                    {entry.summary}
                  </p>
                </div>
              </div>    
           </div>
           
           <div className="col">
              <p className="card-text ">
                {entry.article}
              </p>
            </div>
          </div>
        </div>
        
      </main>
      <footer className="container bg-dark">
        <div id="contact" className="pb-5 col-5 text-white">        
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
        </footer>
    </div>
    </>);
  }