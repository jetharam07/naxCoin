import React from "react";
import "./Secondpage.css";
import secondIm from "../../Assets/airdrop11.jpg"
import secondIma from "../../Assets/airdrop12.png"


const Secondpage = () => {
return(
<>
<div className="page2">
<div className="row row-cols-1 row-cols-md-2 g-4 second">
<div className="col second">
          < div className="cardname">
            <div className="HoverCardimage">
          <img src= {secondIm} className="card-img-top" alt="..." />
</div>
              <p className="sencondPageText">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="col second">
          <div className="cardname">
          <div className="HoverCardimage">
          <img src= {secondIma} className="card-img-top" alt="..." />
</div>
              <p className="sencondPageText">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
</div>

</div>
</>
)
}


export default Secondpage;