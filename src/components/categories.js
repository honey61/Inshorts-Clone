import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/sidebar.css';

function Categories() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('MENU');

  const handleSidebarToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setButtonLabel(isSidebarOpen ? 'MENU' : 'CLOSE');
  };

  const handleCategoryClick = (category) => {
    // Add your navigation logic here based on the selected category
    // For example, you can use window.location.href to navigate to the respective route
    switch (category) {
      case 'topnews':
        window.location.href = '/';
        break;
      case 'business':
        window.location.href = '/bapi';
        break;
      case 'sports':
        window.location.href = '/sapi';
        break;
      case 'technology':
        window.location.href = '/techapi';
        break;
      case 'science':
        window.location.href = '/scapi2';
        break;
      case 'health':
        window.location.href = '/helapi';
        break;
      case 'entertainment':
        window.location.href = '/entapi';
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='mainsidebar'>
        <button className='sidebaricontoggle' onClick={handleSidebarToggleClick}>
          {buttonLabel}
        </button>

        <div className={`sidebarMenu ${isSidebarOpen ? 'open' : ''}`}>
          <ul className="menus">
            <li><a onClick={() => handleCategoryClick('topnews')}>Top News</a></li>
            <li><a onClick={() => handleCategoryClick('business')}>Business News</a></li>
            <li><a onClick={() => handleCategoryClick('sports')}>Sports News</a></li>
            <li><a onClick={() => handleCategoryClick('entertainment')}>Entertainment News</a></li>
            <li><a onClick={() => handleCategoryClick('technology')}>Technology News</a></li>
            <li><a onClick={() => handleCategoryClick('science')}>Science News</a></li>
            <li><a onClick={() => handleCategoryClick('health')}>Health News</a></li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
