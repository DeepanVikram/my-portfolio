import React, { Component } from 'react';


export default class Skills extends Component {
  render() {
    return (
      <div id='Skills'>
        <div className='container-fluid' style={{background:'-webkit-linear-gradient(180deg,#025E73,#8C030E)',
  height: '660px',width:'100%'}}>
          <h1 className='text-center'><strong>Skills & Ceritification</strong></h1>
         <div className='row'>
           <div className='col-md-6'>
             <div className='skill'>
               <ul>
               <h2>Skills</h2>
                 <li>Basics of c & cpp</li>
                 <li>javascript</li>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>BootStrap</li>
                 <li>React-js</li>
                 <li>Node-js</li>
                 <li>MangoDB</li>
               </ul>
             </div>
           </div>
           <div className='col-md-6'>
             <div className='course'>
               <ul>
                 <h2>Certification</h2>
                 <li><strong>Full Stack Web Development</strong>-Skill Safari</li>
                 <li><strong>Basics of c & Cpp</strong>-Internshala</li>
                 <li><strong>HTML & CSS</strong></li>
                 <li><strong>Fire And Industrial Engineering</strong>-Adriot Groups</li>
               </ul>
             </div>
           </div>
         </div>
        </div>
      </div>
    )
  }
}
