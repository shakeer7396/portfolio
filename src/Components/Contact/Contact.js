import React from "react";


import {HeroContainer,} from "./ContactElements";
function Contact() {
  return (
    <div className="heroMain">
     <HeroContainer>
   
   
      <u><h1>Contact</h1></u>
      <h1 className="name">Shaik <span style={{color:'darkblue'}}>Shakeer</span> </h1>
      <div className="contacts">
     <div className="linkedin">
     
     <a href="https://www.linkedin.com/in/shaik-shakeer-aa8965236/"><i class="fab fa-linkedin"></i></a>
         <p>liked in</p>
     </div>

     <div className="email">
     <i class="fas fa-envelope"></i>
         <p>email : shaikshakeerss123@gmail.com</p>
     </div>

     <div className="phone">
     <i class="fas fa-phone"></i>
         <p>phone : 7396089610
         </p>
     </div>

      </div>
      </HeroContainer> 
    </div>
    
  );
}

export default Contact;