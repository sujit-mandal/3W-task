import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import fantomImage from "../assets/fantom.png";
import fuji from "../assets/fuji.png";
import harmony from "../assets/harmony.jpeg";
import mubai from "../assets/mumbai.png";
import sokol from "../assets/sokol.png";
import testnet from "../assets/testnet.png";
import kovan from "../assets/kovan.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Ethereum Kovan");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (optionText, imageSrc) => {
    setSelectedOption(optionText);
    setSelectedImage(imageSrc);
    toggleOptions();
  };
  return (
    <div className="nav-bar">
      <h1>Faucets</h1>
      <div className="menubar">
        <div className="select-menu">
          <div className="select-btn" onClick={toggleOptions}>
            <div className="select-btn-text">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt=""
                  style={{ width: "14px", height: "14px" }}
                />
              ) : (
                <img
                  src={kovan}
                  alt=""
                  style={{ width: "14px", height: "14px" }}
                />
              )}
              <span className="sBtn-text">
                {selectedOption || "Ethereum Kovan"}
              </span>
            </div>

            <RiArrowDownSLine className="arrow" />
          </div>
          {showOptions && (
            <ul className="options">
              <li
                className="option"
                onClick={() => selectOption("Fantom Testnet", fantomImage)}
              >
                <img src={fantomImage} alt="" />
                <span className="option-text">Fantom Testnet</span>
              </li>
              <li
                className="option"
                onClick={() => selectOption("Avalanche Fuji", fuji)}
              >
                <img src={fuji} alt="" />
                <span className="option-text">Avalanche Fuji</span>
              </li>
              <li
                className="option"
                onClick={() => selectOption("Harmony Testnet", harmony)}
              >
                <img src={harmony} alt="" />
                <span className="option-text">Harmony Testnet</span>
              </li>
              <li
                className="option"
                onClick={() => selectOption("Polygon Mumbai", mubai)}
              >
                <img src={mubai} alt="" />
                <span className="option-text">Polygon Mumbai</span>
              </li>
              <li
                className="option"
                onClick={() => selectOption("POA Network Sokol", sokol)}
              >
                <img src={sokol} alt="" />
                <span className="option-text">POA Network Sokol</span>
              </li>
              <li
                className="option"
                onClick={() => selectOption("BNB Chain Testnet", testnet)}
              >
                <img src={testnet} alt="" />
                <span className="option-text">BNB Chain Testnet</span>
              </li>
            </ul>
          )}
        </div>
        <button className="wallet-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
            <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path>
          </svg>
          Connect Wallet
        </button>
        <div className="user">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "font-size": "25px", color: "rgb(109, 115, 128)" }}
            className="user-icon"
            onClick={toggleMenu}
          >
            <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
          </svg>
          {isMenuOpen && (
            <ul className="user-menu">
              <li>
                <Link to="/login" className="link">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link">
                  FAQ
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
