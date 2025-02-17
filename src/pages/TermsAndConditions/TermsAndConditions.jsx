import { t } from "i18next";
import "./TermsAndConditions.scss"; // Import the corresponding Sass file

const TermsAndConditions = () => {
  // تأكد من ترجمة الـ array بشكل صحيح
  const prohibitedBehavior = t("termsAndConditions.useOfWebsite.prohibitedBehavior", { returnObjects: true });
  const prohibitedActions = t("termsAndConditions.intellectualPropertyRights.prohibitedActions", { returnObjects: true });

  // تأكد من أن prohibitedBehavior و prohibitedActions هما arrays قبل استخدام map
  if (!Array.isArray(prohibitedBehavior) || !Array.isArray(prohibitedActions)) {
    console.error("prohibitedBehavior or prohibitedActions is not an array:", prohibitedBehavior, prohibitedActions);
    return null; // أو عرض رسالة خطأ مناسبة
  }

  return (
    <div className="terms-and-conditions">
      <h1>{t("termsAndConditions.title")}</h1>
      <p>{t("termsAndConditions.welcome")}</p>

      <h2>{t("termsAndConditions.acceptanceOfTerms.title")}</h2>
      <p>{t("termsAndConditions.acceptanceOfTerms.content")}</p>

      <h2>{t("termsAndConditions.useOfWebsite.title")}</h2>
      <p>{t("termsAndConditions.useOfWebsite.content")}</p>
      <ul>
        {prohibitedBehavior.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t("termsAndConditions.intellectualPropertyRights.title")}</h2>
      <p>{t("termsAndConditions.intellectualPropertyRights.content")}</p>
      <ul>
        {prohibitedActions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t("termsAndConditions.accountRegistration.title")}</h2>
      <p>{t("termsAndConditions.accountRegistration.content")}</p>

      <h2>{t("termsAndConditions.boulevardETradingServices.title")}</h2>
      <p>{t("termsAndConditions.boulevardETradingServices.content")}</p>
      <p>{t("termsAndConditions.boulevardETradingServices.responsibility")}</p>
      <p>{t("termsAndConditions.boulevardETradingServices.disclaimer")}</p>

      <h2>{t("termsAndConditions.paymentsAndTransactions.title")}</h2>
      <p>{t("termsAndConditions.paymentsAndTransactions.content")}</p>
      <p>{t("termsAndConditions.paymentsAndTransactions.withdrawalRequests")}</p>
      <p>{t("termsAndConditions.paymentsAndTransactions.fraudPolicy")}</p>

      <h2>{t("termsAndConditions.limitationOfLiability.title")}</h2>
      <p>{t("termsAndConditions.limitationOfLiability.content")}</p>
      <p>{t("termsAndConditions.limitationOfLiability.disclaimer")}</p>
      <p>{t("termsAndConditions.limitationOfLiability.reliance")}</p>

      <h2>{t("termsAndConditions.terminationOfUse.title")}</h2>
      <p>{t("termsAndConditions.terminationOfUse.content")}</p>

      <h2>{t("termsAndConditions.privacyPolicy.title")}</h2>
      <p>{t("termsAndConditions.privacyPolicy.content")}</p>

      <h2>{t("termsAndConditions.changesToTerms.title")}</h2>
      <p>{t("termsAndConditions.changesToTerms.content")}</p>

      <h2>{t("termsAndConditions.governingLaw.title")}</h2>
      <p>{t("termsAndConditions.governingLaw.content")}</p>
    </div>
  );
};

export default TermsAndConditions;