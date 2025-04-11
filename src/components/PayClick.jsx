import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./PayClick.css";

const PayClick = () => {
  return (
    <div className="ppc-wrapper">
      <div className="ppc-card">
        <div className="ppc-content">
          {/* Left Section: Text + Button */}
          <div className="ppc-left">
            <div className="ppc-heading">
              <span className="ppc-title">Pay-per-click</span>
              <span className="ppc-title">advertising</span>
            </div>

            <a href="#" className="ppc-learn-more">
              <div className="ppc-icon">
                <FaArrowRight />
              </div>
              <span>Learn more</span>
            </a>
          </div>

          {/* Right Section: Image */}
          <div className="ppc-image">
            <img
              src="./src/assets/tokyo-selecting-a-value-in-the-browser-window 1.svg"
              alt="Pay-per-click visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayClick;
