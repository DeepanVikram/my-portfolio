import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div id='Project'>
       <div className='container-fluid' style={{background:'-webkit-linear-gradient(180deg,#6F8C30,#ECF235)',
  height: '1200px',width:'100%'}}>
         <h1 className='text-center' style={{color:'blue'}}><strong>PROJECTS</strong></h1>
         <div className='row'>
           <div className='col-md-4'>
             <div className='todo'>
              <ul>
              <h2 style={{color:'red'}}>ToDo List App</h2>
             <p style={{fontSize:'20px'}}>The web application that allows the user to list down a task that needs 
               to be completed or things that the user wants to do.</p>
              <h3 style={{color:'#F20587'}}>Languages Used</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>React-JS</li>
              </ul>
             </div>
           </div>
             <div className='col-md-4'>
             <div className='portfolio'>
               <ul>
                 <h2 style={{color:'red'}}>PortFolio WebPage</h2>
                 <p style={{fontSize:'20px'}}>The personal portfolio website that displays the sample of mywork,details
                    about myself and completed projects and so on.</p>
                  <h3 style={{color:'#F20587'}}>Languages Used</h3>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React-JS</li>
               </ul>
             </div>
           </div>
           <div className='col-md-4'>
               <div className='movie'>
                 <ul>
                   <h2 style={{color:'red'}}>Movie site</h2>
                   <p style={{fontSize:'20px'}}>Using this Website we can fetch the movies details,Also we can search using name
                      of the movies specially hollywood movies</p>
                    <h3 style={{color:'#F20587'}}>Languages used</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React-JS</li>
                 </ul>
               </div>
             </div>
           </div>
           
           <div className='row'>
            
             <div className='col-md-4'>
               <div className='tictac'>
                 <ul>
                 <h2 style={{color:'red'}}>Tic Tac Toe Game</h2>
                 <p style={{fontSize:'20px'}}>The Game play by 2 players battle using "X" and "O" with 9 boxes on it</p>
                 <h3 style={{color:'#F20587'}}>Languages used</h3>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>React-JS</li>
                 </ul>
               </div>
             </div>
           </div>
        </div>
      </div>
    )
  }
}
