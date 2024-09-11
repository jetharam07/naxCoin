import React from "react";

import cardImg from "../Assets/coin1.png"
import cardImge from "../Assets/coin-removebg-preview.png"

const Card = () => {
    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="cardImage">
            <img src= {cardImge} className="card-img-top" alt="..." />
            </div >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div >
               <button className="designButton">Collect Point</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <div className="cardImage">
            <img src={cardImg} className="card-img-top" alt="..." />
            </div >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div >
               <button className="designButton">Collect Point</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <div className="cardImage">
            <img src={cardImge} className="card-img-top" alt="..." />
            </div >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
            </div>
            <div >
               <button className="designButton">Collect Point</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <div className="cardImage">
            <img src={cardImg} className="card-img-top" alt="..." />
            </div >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
            </div>
            <div >
               <button className="designButton">Collect Point</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
       
      </div>
    )
};

export default Card;