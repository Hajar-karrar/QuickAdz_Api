import React from 'react'
import "./About.css";
import Navbar from './Navbar';
export default function AboutUs() {
  return (
    <body className="body">
      <div>
      <div>
      <Navbar/>

    <section class="about-section">
        <h1>ABOUT</h1>
        <div className='con'>
            <div className='car1'>
                <h1>US</h1>
                <p>Welcome to QuickAdz</p>
                <p>platform for connecting suppliers and  
                enthusiasts f interior design, modern 
                vehicles, nd the latest technological innovations.</p>
            </div>
            <div class="car22">
                <img className='imm' src="b1.jpeg" alt=""/>
            </div>

            <div class="car2">
                <img className='imm2' src="four1.jpg" alt="Modern Design"/>

                <div className='caption'>
                <h2>Our Philosophy</h2>
                <p>Our vision is to become the leader in platforms, <br />
                of announcements by connecting suppliers and   <br />
                enthusiasts, while inspiring innovation and creativity in every sector we serve. </p>
                </div>
            </div>

        </div>
    </section>
      </div>
    </div>
    </body>
    
  )
}