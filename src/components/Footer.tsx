import React from "react";
import facebook from "../assets/Icon feather-facebook.png";
import instagram from "../assets/Icon feather-instagram.png";
import linkedin from "../assets/Icon feather-linkedin.png";
import twitter from "../assets/Icon feather-twitter.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-white text-xl font-bold mb-2">
              Connect with us
            </h2>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <img className="w-[6%]" src={facebook} alt="facebook" />
              <img className="w-[10%]" src={instagram} alt="instagram" />
              <img className="w-[10%]" src={linkedin} alt="linkedin" />
              <img className="w-[10%]" src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © 2024 Video Clone App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
