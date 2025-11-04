import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-12 py-20 bg-bg-secondary">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div>© 2024 ERVO, All Rights Reserved.</div>
          <div>
            Terms & Conditions | Privacy Policy | Rewards Policy | Promotions |
            Terms & Conditions
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>Contact Us</div>
          <div>
            <a href="mailto:info@ervo.com">Support@ervo.com</a>
            <a href="tel:+919876543210">1800 123 4567</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
