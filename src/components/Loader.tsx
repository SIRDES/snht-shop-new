"use client";

import React from "react";
import AppleSpinner from "./AppleSpinner";

/**
 * A premium loading component featuring glassmorphism, 
 * an Apple-style spinner, and animated text.
 */
const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <style>
                {`
          :root {
            --primary: #4f46e5;
            --bg: #0f172a;
            --glass: rgba(30, 41, 59, 0.7);
          }

          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--bg);
            color: white;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            overflow: hidden;
            z-index: 9999;
            -webkit-app-region: drag; /* Allow dragging the splash window */
          }

          .glass-panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2.5rem;
            border-radius: 1.5rem;
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.8s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .brand-text {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
          }

          .status-text {
            font-size: 0.875rem;
            color: #94a3b8;
            font-weight: 400;
            text-align: center;
          }

          .animated-dots::after {
            content: '';
            animation: dots-animation 1.5s infinite;
          }

          @keyframes dots-animation {
            0% { content: ''; }
            33% { content: '.'; }
            66% { content: '..'; }
            100% { content: '...'; }
          }

          .spinner-container {
            margin-bottom: 2rem;
          }
        `}
            </style>
            <div className="glass-panel">
                <AppleSpinner className="spinner-container" />
                <div className="brand-text">SNHT-SHOP</div>
                <div className="status-text">
                    Initializing <span className="animated-dots"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
