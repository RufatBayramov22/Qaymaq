import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/headerImg/qaymaq.logo.png";
import { GrDown } from "react-icons/gr";
import { WiDirectionRight } from "react-icons/wi";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleChangeLng = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="contanier">
        <div className="row">
          <nav className="navBar">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <ul className="navList">
              <li className="navItem">
                <Link to="/">{t("header.home")}</Link>
              </li>
              <li className="navItem">
                <Link to="/products">{t("header.products")}</Link>
              </li>
              <li className="navItem">
                <Link to="/about">{t("header.about")}</Link>
              </li>
              {/* <li className="navItem">
                <Link to="/blog">{t("header.blog")}</Link>
              </li> */}
              <li className="navItem">
                <Link to="/contact">{t("header.contact")}</Link>
              </li>
            </ul>
          </nav>
          <div className="burger">
            <div
              className={isOpen ? "burgerOverlay active" : "burgerOverlay"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></div>

            <nav className="burgerMenu">
              <div
                className="burger-menu-icon "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div className="burger-menu-icon-line"></div>
                <div className="burger-menu-icon-line"></div>
                <div className="burger-menu-icon-line"></div>
              </div>
              <div
                className={isOpen ? "mainMenu active" : "mainMenu"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <ul className="burgerMenuItem">
                  <li>
                    <Link to="/">{t("header.home")}</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link to="/about">{t("header.about")}</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link to="/contact">{t("header.contact")}</Link>
                    <WiDirectionRight />
                  </li>
                  {/* <li>
                    <Link to="/blog">{t("header.blog")}</Link>
                    <WiDirectionRight />
                  </li> */}
                  <li>
                    <Link to="/products">{t("header.products")}</Link>
                    <WiDirectionRight />
                  </li>
                </ul>
              </div>
            </nav>
            <button>
              <Link to="tel:+994124471325"> (+994)-12-447-13-25</Link>
            </button>
            <select className="language" defaultValue={i18n.language} onChange={handleChangeLng}>
              <option value="en">En</option>
              <option value="az">Aze</option>
              <option value="ru">Rus</option>
              <GrDown fill="black" className="down" />
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
