import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';


const AdminPage = () => {
  return (
    <body>
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
         
        </div>
        <ul id="new-nav-items" className="navbar-menu">
          <li id="hitem" className="navbar-item" >
            <Link to="/doctorsview" className='numtext'>View Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsdelete" className='numtext'>Delete Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsapprove" className='numtext'>Approve Doctors</Link>
          </li>
          <li id="hitem" className='navbar-item'>
            <Link to="/SignIn" classname='numtext'>Logout</Link>
          </li>
          
        </ul>
      </nav>
      <br></br><br></br><br></br>
      
      <div className='para'>
        <h3>
Health is the condition of the human body which is free from any injury or illness.
 But staying healthy is defined as staying mentally, physically and socially fit.
  Maintaining good health will ultimately lead to a happy mind which is more valuable than any precious gift in today's life.</h3>
        </div>
       
        
      </div> 
      </body>

  );
};

export default AdminPage;
