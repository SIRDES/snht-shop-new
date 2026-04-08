"use client";

import React from "react";

interface AppleSpinnerProps {
  className?: string;
}

/**
 * A reusable Apple-style spinner component.
 */
const AppleSpinner: React.FC<AppleSpinnerProps> = ({ className }) => {
  return (
    <div className={`spinner-wrapper ${className || ""}`}>
      <style>
        {`
          .spinner-wrapper {
            position: relative;
            width: 50px;
            height: 50px;
          }

          .apple-spinner {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .apple-spinner div {
            position: absolute;
            width: 5%;
            height: 25%;
            background: #fff;
            left: 45%;
            top: 35%;
            opacity: 0;
            border-radius: 50px;
            animation: apple-fade 1s linear infinite;
          }

          @keyframes apple-fade {
            from { opacity: 1; }
            to { opacity: 0.25; }
          }

          .apple-spinner div:nth-child(1) { transform: rotate(0deg) translate(0, -110%); animation-delay: 0s; }
          .apple-spinner div:nth-child(2) { transform: rotate(30deg) translate(0, -110%); animation-delay: -0.9167s; }
          .apple-spinner div:nth-child(3) { transform: rotate(60deg) translate(0, -110%); animation-delay: -0.8333s; }
          .apple-spinner div:nth-child(4) { transform: rotate(90deg) translate(0, -110%); animation-delay: -0.75s; }
          .apple-spinner div:nth-child(5) { transform: rotate(120deg) translate(0, -110%); animation-delay: -0.6667s; }
          .apple-spinner div:nth-child(6) { transform: rotate(150deg) translate(0, -110%); animation-delay: -0.5833s; }
          .apple-spinner div:nth-child(7) { transform: rotate(180deg) translate(0, -110%); animation-delay: -0.5s; }
          .apple-spinner div:nth-child(8) { transform: rotate(210deg) translate(0, -110%); animation-delay: -0.4167s; }
          .apple-spinner div:nth-child(9) { transform: rotate(240deg) translate(0, -110%); animation-delay: -0.3333s; }
          .apple-spinner div:nth-child(10) { transform: rotate(270deg) translate(0, -110%); animation-delay: -0.25s; }
          .apple-spinner div:nth-child(11) { transform: rotate(300deg) translate(0, -110%); animation-delay: -0.1667s; }
          .apple-spinner div:nth-child(12) { transform: rotate(330deg) translate(0, -110%); animation-delay: -0.0833s; }
        `}
      </style>
      <div className="apple-spinner">
        {[...Array(12)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default AppleSpinner;
