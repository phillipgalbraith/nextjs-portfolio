import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'; 
import { useEffect } from 'react'
                  <img src="./vanillaPortfolio.png" className="card-img-top" alt="..."/>

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  
  return (
    <div className="container bg-dark">
      <Head>
        <title>
          Phillip Galbraith
        </title>
        <link href="/logo.png" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     
      <main className="bg-gradient text-white ">
        <div className="container">
          <div className="left">

            <h1 className="title bg-gradient-primary text-white">
            <span className='text-secondary'>1|</span>
            <span className="text-primary"> {" {"} </span>
              Phillip Galbraith,
            </h1>
          </div>

          <div className="right">
            <h2 className="description bg-gradient-primary text-white">
              <span className='text-secondary'>2| ...</span>
                Full Stack
              <span className="text-primary">{" }"}</span>
            </h2>
            <p className='text-white'>
              Experience excellent collaboration and development.
              Contact me: {" "}
              <a href="https://linkedin.com/phillip-galbraith-web" 
                rel="noreferrer noopener" 
                target="_blank"
                className='link-info'
              >
                  <b>✉ </b> 
              </a> 
              <span className="text-light"> | </span>
              <a href="https://linkedin.com/phillip-galbraith-web" 
                rel="noreferrer noopener" 
                target="_blank"
                className="link-info"
              >
                    <b> in</b>
              </a> 
            </p>
          </div>
        </div>
       
        <div className="navbar bg-black text-light"> 
          Home Contact Portfolio Resume
        </div>
        <div className="container">
          <div className="row d-flex">
 
            <div className="col">
              <a href="https://phillipgalbraith.github.io/portfolio-site/">
                <div className="card" >
                  <img src="./vanillaPortfolio.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Vanilla JS Portfolio</h5>
                    <p className="card-text">
                      A vanilla js/css/html portfolio
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://marketplace-f9a23.web.app/">
                <div className="card" >
                  <img src="./marketplace.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Marketplace</h5>
                    <p className="card-text">
                      A React/Redux market
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://feast-planner-2b2ea.web.app/dashboard">
                <div className="card" >
                  <img src="./feastPlanner.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Feast Planner</h5>
                    <p className="card-text">
                    A React/Redux planner
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    
      

      </main>

      <footer className="bg-dark ">
        Contact
      </footer>
      
    </div>
  )
}
