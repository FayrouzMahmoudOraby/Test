import React from 'react';

const Footer = () => {
  return (
     <div className="footer">
        <div className="container">
        <div className="main-section">
        <div>
          <h2>ADDRESS</h2>
          <p>500 Terry Francine St. San Francisco</p>
          <p> CA 94158</p>
        </div>
        <div>
          <h2>CONTACT</h2>
          <p>info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
        </div>
        <div>
          <h2>HOURS</h2>
          <p>OPEN DAILY</p>
          <p>10 AM-10 PM</p>
        </div>
        </div>
        </div>

        <div className="footer">
        <div className="last-section">
        <p>&copy; 2035 by Gelato. Powered and secured by Wix</p>
        </div>
        </div>
     </div>
  );
 }

export default Footer;