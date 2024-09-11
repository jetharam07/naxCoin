import React from "react";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
    <section className="hero">
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
          "Exclusive Nex Crypto Airdrop: Secure Your Free Coins Now!"
          </h1>
          <p className="primary-text">
          "Claim your free Nex crypto coins today <br/> and join the future of decentralized finance!<br/> 🚀 Limited airdrop—grab yours now!"
          </p>
         
        </div>
        
      </div>
    </div>
  

  </section>



  </div>
  );
};

export default Home;