import React from "react";
import './Home.css';
import code1 from '../../assets/images/main1.png'
import code2 from '../../assets/images/main2.png'
import code3 from '../../assets/images/main3.png'
import partner1 from '../../assets/images/partner1.png'
import partner2 from '../../assets/images/partner2.png'
import partner3 from '../../assets/images/slack.png'
import partner4  from '../../assets/images/Vector.png'
import hands  from '../../assets/images/hands.svg'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";






export default function Home() {


    return(
        <div className="hero" >
             <div className="hero-div">
                <h1>Authentication Library</h1>
                <p>Authwiki is a library base platform thas servrs as storage of various authentication codes to speed up development process</p>
             </div>
             <div className="Explore">
                <button><a href="http://">Explore Now</a>  <FaArrowRight />
                </button>
                
             </div>
             <div className="code-codes">
             <h1 className="code1"><img src={code3} alt='main'/></h1>
                <h1 className="code2"><img src={code1} alt='main'/></h1>
                <h1 className="code3"><img src={code2} alt='main'/></h1>
             </div>
             <div className="brand">
                <div className="brands-with">
                    <h1 className="brand1">Brands Who Trus Us</h1>
                    <p className="brand2">Meet pur collaorative partners from across the world</p>
               <div className="Part">
                <h1 className="partner"><img src={partner1} alt='part'/></h1>
                <h1 className="partner"><img src={partner2} alt='part'/></h1>
                <h1 className="partner3"><img src={partner3} alt='part'/></h1>
                <h1 className="partner"><img src={partner4} alt='part'/></h1>
                </div>
                </div>
                
             </div>
             <div className="choose">
                  <h1>Why Choose Us</h1>
                  <p>AuthWiki serves as a Storage of Authentication codes</p>
             </div>

             
<div className="wrapper">

<div className="box">

  <div className="content">
  <h1 className="pinkCol"><FaRegFileAlt /></h1>
   <h1 className="content1">Documentation</h1>
  The use, operation, maintenance of the authentication codes are
    listed and explained for easy use by the developers.
   </div>
   
</div>

<div class="box">
  <div class="content">
  <h1 className="pinkCol">< FaUsers/></h1>
   <h1 className="content1">Contribution</h1>
   Auth-wiki provides a community of interactions for developers and codes.
   </div>
  
</div>

<div class="box">
  <div class="content11">
  <h1 className="bluurur"><FaCloudDownloadAlt/></h1>
   <h1 className="content1">Code Download</h1>
   We provide a download option for Authenticated and verified 
   users to use the codes when they please and in any instance.
   </div>
</div>
</div>

{/* ========================About Section */}
<div className="About-section">
      <div className="about-1">
      <h1 className="rec"><img src={hands} alt='part'/></h1>
      </div>

      <div className="about">
         <h2 className="about-info">About Us</h2>
         <p className="about-info-2">Find out about who we are</p>
         <p className="about-info-3">We are a group of tech savvy individuals with an aim to elevate the technology industry through speed and
             agility. One of the solutions we are proud to offer 
            is our authentication library. Our team is made up of tech enthusiast with a forward driven mind set.</p>

         <p className="about-info-4"> <a href="http://">Find Out More</a> <FaArrowRight /></p>
         {/* <p className="text"></p> */}
          
         
      </div>
</div>





<div class="Card">
  <div class="CardInner">
  <div className="cardUpdate">
      <h3 className="h3">Do you want to get <br/> updates from AuthWiki?</h3>
      <p className="pppp">Sign up for Our Newsletter</p>
  </div>
  <div class="container">
    <div class="InputContainer">
      <input placeholder="enter your email address"/>
   
    </div>
  </div>
 </div>
</div>



 </div>

        

        
    )
}


