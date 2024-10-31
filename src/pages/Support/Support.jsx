import React, { useEffect, useState } from "react";
import "./support.scss";
import { t } from "i18next";
import { useForm } from "@formspree/react";
import { useToast } from "@chakra-ui/react";

function Support() {
  const [state, handleSubmit] = useForm("xyzygkre");
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const toast = useToast();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [id]: value,
      };
    });
  };
  const handleCheckBeforeSubmit = async (e) => {
    let isErrorGlobal = false;
    e.preventDefault();
    for (const key in data) {
      if (data[key] == "" || data[key] == " ") {
        setErrors((prev) => {
          return {
            ...prev,
            [key]: true,
          };
        });
        if (!isErrorGlobal) isErrorGlobal = true;
      }
    }
    if (isErrorGlobal) return;
    await handleSubmit(e);
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
      const parent = this.parentNode;
      parent.classList.add("focus");
    }
    function blurFunc() {
      const parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  return (
    <div className="support">
      <div className="container">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">{t("Let's get in touch")}</h3>
            <p className="text">
              {t(
                "Stay in complete communication to ensure your complete satisfaction"
              )}
            </p>

            <div className="info">
              <div className="information">
                <i className="fa-solid fa-map-location"></i>
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fa-regular fa-envelope"></i>
                <p>support@postbet.ae</p>
              </div>
            </div>

            <div className="social-media">
              <p>{t("Connect with us :")}</p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61567779457730"
                  target="blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/postbett" target="blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/post_bet" target="blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form onSubmit={(e) => handleCheckBeforeSubmit(e)}>
              <h3 className="title">{t("Message Via Email")}</h3>
              <div className="input-container">
                <label for="name">{t("Username")}</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  id="name"
                  value={data.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.name && (
                <p>
                  {t("Username")} {t("Can’t be Empty")}
                </p>
              )}
              <div className="input-container">
                <label for="email">{t("Email")}</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  id="email"
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.email && (
                <p>
                  {t("Email")} {t("Can’t be Empty")}
                </p>
              )}
              <div className="input-container">
                <label for="subject">{t("Subject")}</label>
                <input
                  type="text"
                  name="subject"
                  className="input"
                  id="subject"
                  value={data.subject}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.subject && (
                <p>
                  {t("Subject")} {t("Can’t be Empty")}
                </p>
              )}
              <div className="input-container textarea">
                <label for="message">{t("Message")}</label>
                <textarea
                  name="message"
                  className="input"
                  id="message"
                  value={data.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              {errors.message && (
                <p>
                  {t("Message")} {t("Can’t be Empty")}
                </p>
              )}
              <button type="submit" className="btn" disabled={state.submitting}>
                {t("Submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
