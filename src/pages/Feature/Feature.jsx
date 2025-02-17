import { t } from "i18next";
import "./Feature.scss"; // استيراد ملف التنسيقات
import feature1 from "../../../src/assets/images/WhatsApp Image 2025-02-16 at 09.38.56_edab516b.jpg";
import feature2 from "../../../src/assets/images/WhatsApp Image 2025-02-16 at 09.38.56_ccb2609a.jpg";
import feature3 from "../../../src/assets/images/WhatsApp Image 2025-02-16 at 09.38.56_edab516b.jpg";

const Feature = () => {
  return (
    <div className="feature">
      <h2>{t("Features")}</h2>
      <div className="feature-container">
        <div className="feature-item">
          <img src={feature1} alt="Feature 1" />
          <p>{t("Easily publish on social media platforms with one click.")}</p>
        </div>
        <div className="feature-item">
          <img src={feature2} alt="Feature 2" />
          <p>{t("Smart tools for editing content before publishing.")}</p>
        </div>
        <div className="feature-item">
          <img src={feature3} alt="Feature 3" />
          <p>{t("AI technology to create unique content. This video was created using AI.")}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;