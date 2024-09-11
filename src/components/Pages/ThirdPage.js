import React from "react";
import "./ThirdPage.css";
import thirdPageImage from "../../Assets/thirdpage.avif"
const ThirdPage= () => {
  return(
   <>
   <div className="thirdbackgroundImg"
   style={{
    backgroundImage: `url(${thirdPageImage})`,
    backgroundSize: 'cover',
    height: '100vh', // Ensure height is set so that background is visible
    // width: '100%', // Full width to cover the area
  }}
   >
  <div class="container">
  <div class="row">
  <div class="col-3">
  {/* <p>Hello 2 content</p> */}
  </div>
  <div class="col-2">
    {/* <p>Hello 3 content</p> */}
  </div>
    <div class="col-4">
      <h className="heading1">Rebate up to 55%</h>
      
<div className="heading2">
<h >Refer Friends Earn Together</h>
<h5>Get up to 55% rebate when you invite friends to KiloEx!
Become an affiliate partner to gain more referral benefits.</h5>

</div>
<div>
<button>Invite Friends</button>
</div>
    </div>




 </div>
  
</div>


</div>
   </>
  

  )

}

export default ThirdPage;