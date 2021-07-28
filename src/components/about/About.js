import React, { Component } from 'react'
import Profile from './../../images/Profile.jpg'; 
import Pdf from './../../Document/Pdf.pdf';
export default class About extends Component {
  render() {
    return (
      <div id='About'>
       <div className='container' style={{background:'-webkit-linear-gradient(180deg,#0597F2,#242873)',
  height: '700px',width:'100%'}}>
         <div className='row'>
          <div className='col-md-6 text-center' style={{color:'white'}}>
           <h1>Hello.i'm <strong>Deepan Rajendran</strong></h1> <br/>
           <p> i am full stack developer passionate towards building applications that are<br/> 
             scalabel and maintainable with beautifully crafted code.
            </p>
          </div>
          <div className='col-md-6'>
          <img className='img-responsive img-circle rounded float-right' style={{height:'250px'}} src={Profile} alt='Profile-photo'></img> 
          </div>
         </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <button type='button' className='btn btn-danger btn-lg btn-responsive'>
            <a href={Pdf} target='_blank'>Resume</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
