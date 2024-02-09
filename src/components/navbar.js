// import React, { useState } from 'react';
// import './style/Navbarstyle.css'


// const NAVBAR = () => {

//   // const [log ,setlog ] = useState(true);
//   const login =()=>{
//     window.location.href = '/login';
//   }
//   return (
//     <div>
//       <div className='containerss' style={{ width: '100%' }}>
//         <div className='menu'></div>

//         <div className='main-logo'>
//         <img 
//           src="https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
//           // src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
//           className="logo"
//           alt=""
//           height="50"
//           margin-top="2"
//         />
//           <div className='inshort-text'>
//            <div className='text3'> inshorts
//            <div className='tagline'>stya informe</div>
//         </div>
//         </div>
//         </div>
//      <div className='login2' onClick={login}>LOGIN</div>
        
//     </div>
  
//     </div>
//   );
// };

// export default NAVBAR;

import React, { useState, useEffect } from 'react';
import './style/Navbarstyle.css';


const NAVBAR = () => {

  
  return (
    <div>
      <div className='containerss' style={{ width: '100%' }}>
        <div className='menu'></div>

        <div className='main-logo'>
          <img
            src="https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
            className="logo"
            alt=""
            height="50"
            margin-top="2"
          />
          <div className='inshort-text'>
            <div className='text3'> inshorts
              <div className='tagline'>stya informe</div>
            </div>
          </div>
        </div>
    
          <div className='login2' onClick={() => (window.location.href = '/login')}>
            Login
          </div>
      </div>
    </div>
  );
};

export default NAVBAR;
