import React, { useEffect, useState } from "react";
import "./support.scss";
import { t } from "i18next";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@chakra-ui/react";

function Support() {
  const [state, handleSubmit] = useForm("xyzygkre");
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [responseData, setResponseData] = useState();
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
    e.preventDefault();
    const { name, email, subject, phone, message } = data;
    if (!name || !email || !subject || !phone || !message) {
      return toast({
        isClosable: true,
        status: "info",
        duration: 4000,
        position: "top",
        title: t("Fill All Fields"),
      });
    }
    const response = await handleSubmit(e);
    setResponseData(response);
    if (responseData && responseData.ok)      
      return toast({
        isClosable: true,
        status: "success",
        duration: 4000,
        position: "top",
        title: t("Thanks for cooperation !"),
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
      <div class="container">
        <span class="big-circle"></span>
        <div class="form">
          <div class="contact-info">
            <h3 class="title">{t("Let's get in touch")}</h3>
            <p class="text">
              {t(
                "Stay in complete communication to ensure your complete satisfaction"
              )}
            </p>

            <div class="info">
              <div class="information">
                <i className="fa-solid fa-map-location"></i>
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div class="information">
                <i className="fa-regular fa-envelope"></i>
                <p>support@postbet.ae</p>
              </div>
            </div>

            <div class="social-media">
              <p>{t("Connect with us :")}</p>
              <div class="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>
            <form onSubmit={(e) => handleCheckBeforeSubmit(e)}>
              <h3 class="title">{t("Message Via Email")}</h3>
              <div class="input-container">
                <label for="name">{t("Username")}</label>
                <input
                  type="text"
                  name="name"
                  class="input"
                  id="name"
                  value={data.name}
                  onChange={(e) => handleChange(e)}
                />
                <ValidationError
                  prefix="Username"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div class="input-container">
                <label for="email">{t("Email")}</label>
                <input
                  type="email"
                  name="email"
                  class="input"
                  id="email"
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div class="input-container">
                <label for="subject">{t("Subject")}</label>
                <input
                  type="text"
                  name="subject"
                  class="input"
                  id="subject"
                  value={data.subject}
                  onChange={(e) => handleChange(e)}
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div class="input-container textarea">
                <label for="message">{t("Message")}</label>
                <textarea
                  name="message"
                  class="input"
                  id="message"
                  value={data.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
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
