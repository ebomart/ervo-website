import React from "react";
import emailIcon from "../company-assets/assets/mail-icon.png";
import phoneIcon from "../company-assets/assets/call-icon.png";
const Footer = () => {
  return (
    <footer className="border-border-primary m-auto mt-10 w-full max-w-[90%] border-t p-4 md:p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-text-primary flex flex-col items-start gap-2 text-xs md:text-sm">
          <div>© 2025 ERVO,&nbsp;All Rights Reserved.</div>
          <div className="max-w-xs md:max-w-none">
            Terms & Conditions | Privacy Policy | Rewards Policy | Promotions |
            Terms & Conditions
          </div>
        </div>
        <div className="mt-4 flex flex-col items-start gap-2 text-xs md:mt-0 md:text-sm">
          <div className="font-medium">Contact Us</div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="mailto:info@ervo.com" className="flex items-center gap-1">
              <img src={emailIcon} alt="email" className="h-4 w-4" />
              <span className="break-all">Support@ervo.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1">
              <img src={phoneIcon} alt="phone" className="h-4 w-4" />
              1800 123 4567
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
