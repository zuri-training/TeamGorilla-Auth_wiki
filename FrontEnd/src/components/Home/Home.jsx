import React from "react";
import './Home.css';
import code1 from '../../assets/images/main1.png'
import code2 from '../../assets/images/main2.png'
import code3 from '../../assets/images/main3.png'

export default function Home() {

    return(
        <div className="hero" >
             <div className="hero-div">
                <h1>Authentication Library</h1>
                <p>Authwiki is a library base platform thas servrs as storage of various authentication codes to speed up development process</p>
             </div>
             <div className="Explore">
                <button>Explore Now</button>
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
                </div>
             </div>
        </div>

        
    )
}


