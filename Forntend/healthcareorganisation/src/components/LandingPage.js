import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {
  return (
  
    <>
    <div className='body'>
      <link rel="stylesheet" href="./fontawesome-free-5.15.3-web/css/all.min.css" />
      <nav>
        <div className="container">

          <input type="checkbox" id="showNav" />
          <label htmlFor="showNav" id="toggleNav"><i className="fas fa-bars"></i></label>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section>
        <div className="container">
  
                  <p className='para'style={{marginLeft:'150px'}}>
                  Health is the condition of the human body which is free from any injury or illness. But staying healthy is defined as staying mentally, physically and socially fit. Maintaining good health will ultimately lead to a happy mind which is more valuable than any precious gift in today's life.
                  </p>



          <Link to ="/signIn" style={{

                color:"white",
                background:"transparent",
                border:"3px solid white",
                borderRadius:"20px",
                padding:"20px 50px 20px 50px",
                boxShadow:"none"


          }} >Login</Link>



        </div>
      </section>





      </div>

      <section className='oo'>

      </section>

      <section className='footer'>
        <div className="confoot">

          <center>

            <h1> Healthcare Organization </h1>

            <h3>follow us on </h3>
            <h5>@LinkedIn</h5>
            <h5>@Instagram</h5>
            <h5>@Youtube</h5>



          </center>

      
        </div>
        <div className='cp'>
            <p>copyright reserved @ 2023</p>
          </div>
      </section>
    </>
  
  );
}

export default LandingPage;
