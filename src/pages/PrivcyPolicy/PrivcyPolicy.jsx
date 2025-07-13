import React from "react";
import "./policy.scss";
import { t } from "i18next";

function PrivcyPolicy() {
  const { lang } = localStorage;

  const privacyData = {
    en: {
      heading: "At Poswize,",
      desc: "Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information.",
      q1: "Information We Collect",
      f1_1: "Personal Information: Name, email address, contact details, and profile information.",
      f1_2: "Content Data: Posts, stories, reels, and interaction data.",
      f1_3: "Usage Data: Device type, IP address, app usage behavior, and crash reports.",
      f1_4: "Analytics: Performance metrics and engagement data.",
      f1_5: "Rewards Activity: Information about reward points and redemption.",
      q2: "How We Use Your Information",
      f2_1: "To personalize your experience.",
      f2_2: "To provide social media sharing capabilities.",
      f2_3: "To analyze content performance.",
      f2_4: "To offer rewards and promotions.",
      f2_5: "To improve app functionality and user support.",
      q3: "Information Sharing",
      f3_1: "We do not sell your data. We may share information with:",
      f3_2: "Trusted third-party services (such as cloud storage and analytics tools).",
      f3_3: "Social media platforms you connect to.",
      f3_4: "Legal authorities if required by law.",
      q4: "Data Security",
      a4: "We use encryption and secure infrastructure to protect your information. However, no method of transmission over the internet is 100% secure.",
      q5: "Your Rights",
      f5_1: "Request access to or correction of your personal data.",
      f5_2: "Delete your account and associated data.",
      f5_3: "Unsubscribe from marketing communications.",
      q6: "Children's Privacy",
      a6: "Our services are not intended for users under 13 years old. We do not knowingly collect data from children.",
      q7: "Cookies and Tracking",
      a7: "We use cookies and similar tracking technologies to enhance your experience and measure performance.",
      q8: "Changes to This Policy",
      f8_1: "We may update this Privacy Policy from time to time.",
      f8_2: "You will be notified of significant changes via email or in-app notifications.",
      q9: "Contact Us",
      a9: "If you have any questions or concerns, contact us at"
    },
    ar: {
      heading: "في Poswize,",
      desc: "خصوصيتك مهمة بالنسبة لنا. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها.",
      q1: "المعلومات التي نجمعها",
      f1_1: "المعلومات الشخصية: الاسم، عنوان البريد الإلكتروني، بيانات الاتصال، ومعلومات الملف الشخصي.",
      f1_2: "بيانات المحتوى: المنشورات، القصص، الريلز، وبيانات التفاعل.",
      f1_3: "بيانات الاستخدام: نوع الجهاز، عنوان IP، سلوك استخدام التطبيق، وتقارير الأعطال.",
      f1_4: "التحليلات: مقاييس الأداء والتفاعل.",
      f1_5: "نشاط المكافآت: معلومات حول نقاط المكافآت والاسترداد.",
      q2: "كيف نستخدم معلوماتك",
      f2_1: "لتخصيص تجربتك.",
      f2_2: "لتوفير إمكانيات مشاركة على وسائل التواصل الاجتماعي.",
      f2_3: "لتحليل أداء المحتوى.",
      f2_4: "لتقديم المكافآت والعروض الترويجية.",
      f2_5: "لتحسين وظائف التطبيق ودعم المستخدمين.",
      q3: "مشاركة المعلومات",
      f3_1: "لا نقوم ببيع بياناتك. قد نشارك المعلومات مع:",
      f3_2: "خدمات طرف ثالث موثوقة (مثل التخزين السحابي وأدوات التحليل).",
      f3_3: "منصات التواصل الاجتماعي التي تتصل بها.",
      f3_4: "السلطات القانونية إذا تطلب القانون ذلك.",
      q4: "أمان البيانات",
      a4: "نستخدم التشفير وبنية تحتية آمنة لحماية معلوماتك. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪.",
      q5: "حقوقك",
      f5_1: "طلب الوصول أو تصحيح بياناتك الشخصية.",
      f5_2: "حذف حسابك والبيانات المتعلقة به.",
      f5_3: "إلغاء الاشتراك في الرسائل التسويقية.",
      q6: "خصوصية الأطفال",
      a6: "خدماتنا غير مخصصة للمستخدمين دون سن 13 عامًا. لا نجمع بيانات من الأطفال عن عمد.",
      q7: "ملفات تعريف الارتباط والتتبع",
      a7: "نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتحسين تجربتك وقياس الأداء.",
      q8: "التغييرات على هذه السياسة",
      f8_1: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر.",
      f8_2: "سيتم إبلاغك بالتغييرات المهمة عبر البريد الإلكتروني أو تنبيهات داخل التطبيق.",
      q9: "اتصل بنا",
      a9: "إذا كان لديك أي أسئلة أو استفسارات، تواصل معنا عبر"
    }
  };

  const currentData = privacyData[lang] || privacyData.en;

  return (
    <div className="policy">
      <div className="container">
        <h1>{t("Privacy & Policy")}</h1>

        <div className="intro-section">
          <h2>{currentData.heading}</h2>
          <p>{currentData.desc}</p>
        </div>

        <div className="policy-content">
          {/* Information We Collect */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q1}</h3>
            <ul>
              <li>{currentData.f1_1}</li>
              <li>{currentData.f1_2}</li>
              <li>{currentData.f1_3}</li>
              <li>{currentData.f1_4}</li>
              <li>{currentData.f1_5}</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q2}</h3>
            <ul>
              <li>{currentData.f2_1}</li>
              <li>{currentData.f2_2}</li>
              <li>{currentData.f2_3}</li>
              <li>{currentData.f2_4}</li>
              <li>{currentData.f2_5}</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q3}</h3>
            <p>{currentData.f3_1}</p>
            <ul>
              <li>{currentData.f3_2}</li>
              <li>{currentData.f3_3}</li>
              <li>{currentData.f3_4}</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q4}</h3>
            <p>{currentData.a4}</p>
          </div>

          {/* Your Rights */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q5}</h3>
            <ul>
              <li>{currentData.f5_1}</li>
              <li>{currentData.f5_2}</li>
              <li>{currentData.f5_3}</li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q6}</h3>
            <p>{currentData.a6}</p>
          </div>

          {/* Cookies and Tracking */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q7}</h3>
            <p>{currentData.a7}</p>
          </div>

          {/* Changes to This Policy */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q8}</h3>
            <ul>
              <li>{currentData.f8_1}</li>
              <li>{currentData.f8_2}</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="section" data-aos="fade-up">
            <h3>{currentData.q9}</h3>
            <p>{currentData.a9}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivcyPolicy;