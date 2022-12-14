import React from "react";
import "./Home.css";
import code1 from "../../assets/images/main1.png";
import code2 from "../../assets/images/main2.png";
import code3 from "../../assets/images/main3.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/slack.png";
import partner4 from "../../assets/images/Vector.png";
import about from "../../assets/images/about-us.png"
import user_1 from "../../assets/images/user_1.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-div">
        <h1>Authentication Library</h1>
        <p className="hero-text">
          Authwiki is a library base platform thas servrs as storage of various
          authentication codes to speed up development process
        </p>
      </div>
      <div className="Explore">
        <button>
          <a href="http://">Explore Now</a>
        </button>
      </div>
      <div className="codes">
      <div className="code-codes">
        <h1 className="code1">
          <img src={code3} alt="main" />
        </h1>
        <h1 className="code2">
          <img src={code1} alt="main" />
        </h1>
        <h1 className="code3">
          <img src={code2} alt="main" />
        </h1>
      </div>
      </div>
      <div className="brand">
        <div className="brands-with">
          <h1 className="brand1">Brands Who Trust Us</h1>
          <p className="brand2">
            Meet our collaorative partners from across the world
          </p>
          <div className="Part">
            <h1 className="partner">
              <img src={partner1} alt="part" />
            </h1>
            <h1 className="partner">
              <img src={partner2} alt="part" />
            </h1>
            <h1 className="partner3">
              <img src={partner3} alt="part" />
            </h1>
            <h1 className="partner">
              <img src={partner4} alt="part" />
            </h1>
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
            <h1 className="pinkCol">
              <FaRegFileAlt />
            </h1>
            <h1 className="content1">Documentation</h1>
            The use, operation, maintenance of the authentication codes are
            listed and explained for easy use by the developers.
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h1 className="pinkCol">
              <FaUsers />
            </h1>
            <h1 className="content1">Contribution</h1>
            Auth-wiki provides a community of interactions for developers and
            codes.
          </div>
        </div>

        <div className="box">
          <div className="content11">
            <h1 className="bluurur">
              <FaCloudDownloadAlt />
            </h1>
            <h1 className="content1">Code Download</h1>
            We provide a download option for Authenticated and verified users to
            use the codes when they please and in any instance.
          </div>
        </div>
      </div>

      <section className='home_about'>
      <div className="about_section">
         <img src={about} alt="about-us" className="about_img"/>
         <div className="about_text">
            <h2>About Us</h2>
            <p>Find out about who we are</p>
            <p style={{padding: '1rem 0 3rem 0'}}>
               We are a group of tech savvy individuals with an aim to elevate the technology industry
               through speed and agility. One of the solutions we are proud to offer is our authentication library.
               Our team is made up of tech enthusiast with a forward driven mind set.
            </p>
            <Link to='/team' className="about_link">Find Out More <BsArrowRight className="about-arrow"/></Link>
         </div>
      </div>

      </section>
      <div className="testimonial_section">
         <h2>Our Happy Users</h2>
         <div className="testimonials__">
           <div className="testimonial">
              <img src={user_1} alt="user-1" />
              <p style={{fontWeight: '700'}}>David Mark</p>
              <p>
                The days of coding from scratch are over. Authwiki greatly reduces turn around time.
                I will definitely reccommend this to any serious developer out there
              </p>
           </div>
           <div className="testimonial">
              <img src={user_1} alt="user-1" />
              <p style={{fontWeight: '700'}}>David Mark</p>
              <p>
                The days of coding from scratch are over. Authwiki greatly reduces turn around time.
                I will definitely reccommend this to any serious developer out there
              </p>
           </div>
           <div className="testimonial">
              <img src={user_1} alt="user-1" />
              <p style={{fontWeight: '700'}}>David Mark</p>
              <p>
                The days of coding from scratch are over. Authwiki greatly reduces turn around time.
                I will definitely reccommend this to any serious developer out there
              </p>
           </div>
         </div>
      </div>

      {/* <section className='newsletter'> */}
      <div className="newsletter_section">
         <div className="newsletter_text">
           <h3 style={{fontSize: '24px'}}>Do you want to get updates from AuthWiki?</h3>
           <p style={{fontSize: '18px', margin: '0'}}>Sign up for Our Newsletter</p>
         </div>
         <div className="newsletter_input">
            <input type="email" name="email" id="email" placeholder="enter your email address" size="50" className="newsletter_email" />
            <BsArrowRight className="newsletter_arrow" />
         </div>
         </div>
      {/* </section> */}
      
    </div>
  );
}
