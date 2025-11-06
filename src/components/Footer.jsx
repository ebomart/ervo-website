import React from 'react'
import emailIcon from '../company-assets/assets/mail-icon.png';
import phoneIcon from '../company-assets/assets/call-icon.png';
const Footer = () => {
  return (
    <footer className="w-full max-w-[90%] m-auto border-t border-border-primary p-4 md:p-6">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col items-start gap-2 text-xs md:text-sm">
          <div>© 2025 ERVO,&nbsp;All Rights Reserved.</div>
          <div className="max-w-xs md:max-w-none">
            Terms & Conditions | Privacy Policy | Rewards Policy | Promotions | Terms & Conditions
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs md:text-sm mt-4 md:mt-0">
          <div className="font-medium">Contact Us</div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="mailto:info@ervo.com" className="flex items-center gap-1">
              <img src={emailIcon} alt="email" className="w-4 h-4" />
              <span className="break-all">Support@ervo.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1">
              <img src={phoneIcon} alt="phone" className="w-4 h-4" />
              1800 123 4567
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
