
// import React from 'react';
// import './style/Headerstyle.css';

// const Header = ({ author, description, imgURL, title, publishedAt, url }) => {
//   return (
//     <div className='hadermainbody'>
//       <div className='main-headerclass'>
//         <div className="card with-shadow"> {/* Add the 'with-shadow' class */}
//           <div className="row">
//             <div className="col-md-4">
//               <div className="news-card-image">
//                 <img  className="card with-shadow"
//                   style={{ width: '100%', margin: '2%', height: '250px' }}
//                   src={imgURL}
//                   alt="NO IMAGE"
//                 />
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="news-card-title news-right-box">
//                 <div
//                   className="clickable"
//                   href="/en/news/assured-internship-with-gaming-esports-certificate-program-hero-vired-1689823845929"
//                 >
//                   <span style={{ fontSize: '2vw'  }}>
//                     {title}
//                     <div style={{ fontSize: '1vw' }}>
//                       Short by: {author} on: {publishedAt}
//                     </div>
//                   </span>
//                   <span style={{ fontSize: '1.3vw' }}>
//                     {description}
//                   </span>
//                 </div>
//               </div>
//               <br />
//               <div className="news-card-content news-right-box">
//                 {/* <div itemprop="articleBody">
//                 </div> */}
//               </div>
//               <div className="news-card-footer news-right-box">
//                 <div className="read-more">
//                   Read more at: <a href={url}>NEWS.com</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './style/Headerstyle.css';

const Header = ({ author, description, imgURL, title, publishedAt, url }) => {
  const headerRef = useRef(null);



  return (
    <div className='hadermainbody'>
      <div className='main-headerclass'>
        <div className="card with-shadow">
          <div className="row">
            <div className="col-md-4">
              <div className="news-card-image">
                <img
                  className="card with-shadow"
                  style={{ width: '100%', margin: '2%', height: '250px' }}
                  src={imgURL}
                  alt="NO IMAGE"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="news-card-title news-right-box">
                <div
                  className="clickable"
                  href="/en/news/assured-internship-with-gaming-esports-certificate-program-hero-vired-1689823845929"
                  ref={headerRef}
                >
                  <span style={{ fontSize: '2vw' }}>
                    {title}
                    <div style={{ fontSize: '1vw' }}>
                      Short by: {author} on: {publishedAt}
                    </div>
                  </span>
                  <span style={{ fontSize: '1.3vw' }}>{description}</span>
                </div>
              </div>
              <br />
              <div className="news-card-content news-right-box">{/* Content goes here */}</div>
              <div className="news-card-footer news-right-box">
                <div className="read-more">
                  Read more at: <a href={url}>NEWS.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
