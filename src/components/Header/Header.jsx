import React from "react";
import logoAr from "../../assets/images/logo.jpg";
import logoEn from "../../assets/images/logoEn.jpg";
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";
import "./header.scss";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LangBall from "../../assets/images/message.png";
import suadiArabia from "../../assets/images/Saudi Arabia.png";
import USA from "../../assets/images/USA.png";

function Header() {
  const { lang, direction } = localStorage;

  const changeLanguage = (id) => {
    localStorage.lang = id;
    localStorage.direction = id == "ar" ? "rtl" : "ltr";
    location.reload()
  };
  return (
    <header className="mainHeader">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={lang == "en" ? logoEn : logoAr} alt="" />
          </Link>
        </div>
        <nav className="mainNav">
          <div className="items">
            <NavLink to={"/"}>{t("Home")}</NavLink>
            <NavLink to={"/about"}>{t("About")}</NavLink>
            <NavLink to={"/support"}>{t("Support")}</NavLink>
            <NavLink to={"/policy"}>{t("Policy")}</NavLink>
          </div>
          <div className="menu">
            <Menu >
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {t("Menu")}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/"}>
                    <i className="fa-solid fa-house"></i> {t("Home")}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/about"}>
                    <i className="fa-regular fa-address-card"></i> {t("About")}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/support"}>
                    {" "}
                    <i className="fa-solid fa-headset"></i>
                    {t("Support")}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/policy"}>
                    {" "}
                    <i className="fa-solid fa-building-shield"></i>
                    {t("Policy")}
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="lang">
            <Popover
              placement={direction == "rtl" ? "bottom-start" : "bottom-end"}
            >
              <PopoverTrigger>
                <Button>
                  <img src={LangBall} alt="" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <div
                    className="itemlang"
                    onClick={() => changeLanguage("ar")}
                  >
                    <img src={suadiArabia} alt="" /> {t("Arabic")}
                  </div>
                  <div
                    className="itemlang"
                    onClick={() => changeLanguage("en")}
                  >
                    <img src={USA} alt="" /> {t("English")}
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
