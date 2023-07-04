import React from 'react';
import './RegisterHome.css';
import { Link } from 'react-router-dom';

function RegisterHome() {
  return (
    <center>
    <div className="contain">
      <div className='data'>
      <h1 className='wel hd'>Here is the Registration Page for Doctor and Patient</h1>
      <div className="button-contain">
        <button className="registerdocpat-button">
            <Link to='/docregistration' style={{
              color:'white',
              fontWeight:'600'
          
          }}> Doctor Register</Link>
            </button>
        
      </div>

      <div className="button-contain pat">
       
        <button className="registerdocpat-button">
            <Link to='/patregistration' style={{
              color:'white',
              fontWeight:'600'
          
          }} >Patient Register</Link>
            </button>
      </div>
      </div>
    </div>
    </center>
  );
}

export default RegisterHome;

