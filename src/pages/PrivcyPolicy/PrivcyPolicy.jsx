import React from "react";
import "./policy.scss";
import { t } from "i18next";

function PrivcyPolicy() {
  return (
    <div className="policy">
      <div className="container">
        <h1>{t("Privacy & Policy")}</h1>
        <h2>{t("As a user of the Site")}</h2>
        <div className="merge">
          <div className="allowed">
            <h3>
              <span>{t("you agree to :")}</span>
            </h3>
            <div className="item" data-aos="fade-right">
              <div className="topic">
                {" "}
                <span className="allow">*</span>{" "}
                {t("Creating and Sharing Content :")}
              </div>
              <p className="info">
                {t(
                  "Users are allowed to create and share posts across their integrated social media platforms using Postly."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="topic">
                <span className="allow">*</span>
                {t("Integrating Multiple Social Media Accounts :")}
              </div>
              <p className="info">
                {t(
                  "Users can link multiple social media accounts to manage their online presence effectively."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="topic">
                <span className="allow">*</span>
                {t("Engaging with the Community :")}
              </div>

              <p className="info">
                {t(
                  "Users are encouraged to engage with their audience and respond to comments and messages on their posts."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="topic">
                <span className="allow">*</span>
                {t("Using Analytics Tools :")}
              </div>
              <p className="info">
                {t(
                  "Users can access and utilize analytics tools provided by Postly to track the performance of their posts and engagement metrics."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="topic">
                <span className="allow">*</span>
                {t("Updating Account Information :")}
              </div>
              <p className="info">
                {t(
                  "Users can update their account details and preferences at any time to ensure they receive the best service"
                )}
              </p>
            </div>
          </div>
          <div className="allowed">
            <h3>
              <span>{t("you agree not to :")}</span>{" "}
            </h3>
            <div className="item" data-aos="fade-left">
              <div className="topic">
                <span className="not">*</span>
                {t("Posting Inappropriate Content :")}
              </div>
              <p className="info">
                {t(
                  "Users are prohibited from sharing any content that is offensive, abusive, defamatory, or violates the rights of others."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="topic">
                <span className="not">*</span>
                {t("Spamming or Excessive Self-Promotion :")}
              </div>
              <p className="info">
                {t(
                  "Users must refrain from spamming other users or excessively promoting their products/services without consent"
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="topic">
                <span className="not">*</span>
                {t("Impersonating Others :")}
              </div>
              <p className="info">
                {t(
                  "Users are not allowed to create accounts that impersonate other individuals or organizations."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="topic">
                <span className="not">*</span>
                {t("Unauthorized Use of Intellectual Property :")}
              </div>
              <p className="info">
                {t(
                  "Users must respect the intellectual property rights of others and refrain from posting copyrighted materials without permission."
                )}
              </p>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="topic">
                <span className="not">*</span>
                {t("Circumventing Security Measures :")}
              </div>
              <p className="info">
                {t(
                  "Users are prohibited from attempting to bypass any security measures in place on the Postly platform."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivcyPolicy;
