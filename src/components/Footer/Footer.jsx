import { t } from "i18next";
import React from "react";
import logoAr from "../../assets/images/Footer-removebg-preview.png";
import logoEn from "../../assets/images/Footer-removebg-preview.png";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  const { lang } = localStorage;
  return (
    <footer className="mainFooter">
      <div className="container">
        <div className="follow">
          <p>{t("Follow Us")}</p>
          <div className="media">
            <div className="icon">
              <a
                href="https://www.facebook.com/profile.php?id=61567779457730"
                target="blank"
              >
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://x.com/postbett" target="blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/post_bet" target="blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="end">
          <div className="part-1">
            <img src={lang == "en" ? logoEn : logoAr} alt="" />
            <a
              href="https://www.google.com/maps?q=23.4241,53.8478"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Location")}
            </a>
            <Link to={"/about"}>{t("About")}</Link>
          </div>
          <div className="copyright">
            <p>{t("© 2024. All rights reserved by Boulevard.")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
