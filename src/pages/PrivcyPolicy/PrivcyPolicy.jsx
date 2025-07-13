import React from "react";
import "./policy.scss";
import { t } from "i18next";

function PrivcyPolicy() {
  const { lang } = localStorage;

  const privacyData = {
    en: {
      heading: "At Poswize,",
      desc: "Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information.",
      sections: [
        {
          title: "Information We Collect",
          items: [
            {
              topic: "Personal Information:",
              info: "Name, email address, contact details, and profile information."
            },
            {
              topic: "Content Data:",
              info: "Posts, stories, reels, and interaction data."
            },
            {
              topic: "Usage Data:",
              info: "Device type, IP address, app usage behavior, and crash reports."
            },
            {
              topic: "Analytics:",
              info: "Performance metrics and engagement data."
            },
            {
              topic: "Rewards Activity:",
              info: "Information about reward points and redemption."
            }
          ]
        },
        {
          title: "How We Use Your Information",
          items: [
            {
              topic: "Personalization:",
              info: "To personalize your experience."
            },
            {
              topic: "Social Media Integration:",
              info: "To provide social media sharing capabilities."
            },
            {
              topic: "Analytics:",
              info: "To analyze content performance."
            },
            {
              topic: "Rewards System:",
              info: "To offer rewards and promotions."
            },
            {
              topic: "App Improvement:",
              info: "To improve app functionality and user support."
            }
          ]
        },
        {
          title: "Information Sharing",
          items: [
            {
              topic: "Data Sales:",
              info: "We do not sell your data. We may share information with:"
            },
            {
              topic: "Third-party Services:",
              info: "Trusted third-party services (such as cloud storage and analytics tools)."
            },
            {
              topic: "Social Platforms:",
              info: "Social media platforms you connect to."
            },
            {
              topic: "Legal Authorities:",
              info: "Legal authorities if required by law."
            }
          ]
        },
        {
          title: "Data Security",
          items: [
            {
              topic: "Protection Measures:",
              info: "We use encryption and secure infrastructure to protect your information. However, no method of transmission over the internet is 100% secure."
            }
          ]
        },
        {
          title: "Your Rights",
          items: [
            {
              topic: "Data Access:",
              info: "Request access to or correction of your personal data."
            },
            {
              topic: "Account Deletion:",
              info: "Delete your account and associated data."
            },
            {
              topic: "Marketing Communications:",
              info: "Unsubscribe from marketing communications."
            }
          ]
        },
        {
          title: "Children's Privacy",
          items: [
            {
              topic: "Age Restrictions:",
              info: "Our services are not intended for users under 13 years old. We do not knowingly collect data from children."
            }
          ]
        },
        {
          title: "Cookies and Tracking",
          items: [
            {
              topic: "Tracking Technologies:",
              info: "We use cookies and similar tracking technologies to enhance your experience and measure performance."
            }
          ]
        },
        {
          title: "Changes to This Policy",
          items: [
            {
              topic: "Policy Updates:",
              info: "We may update this Privacy Policy from time to time."
            },
            {
              topic: "Notification:",
              info: "You will be notified of significant changes via email or in-app notifications."
            }
          ]
        },
        {
          title: "Contact Us",
          items: [
            {
              topic: "Support:",
              info: "If you have any questions or concerns, contact us at"
            }
          ]
        }
      ]
    },
    ar: {
      heading: "في Poswize,",
      desc: "خصوصيتك مهمة بالنسبة لنا. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها.",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          items: [
            {
              topic: "المعلومات الشخصية:",
              info: "الاسم، عنوان البريد الإلكتروني، بيانات الاتصال، ومعلومات الملف الشخصي."
            },
            {
              topic: "بيانات المحتوى:",
              info: "المنشورات، القصص، الريلز، وبيانات التفاعل."
            },
            {
              topic: "بيانات الاستخدام:",
              info: "نوع الجهاز، عنوان IP، سلوك استخدام التطبيق، وتقارير الأعطال."
            },
            {
              topic: "التحليلات:",
              info: "مقاييس الأداء والتفاعل."
            },
            {
              topic: "نشاط المكافآت:",
              info: "معلومات حول نقاط المكافآت والاسترداد."
            }
          ]
        },
        {
          title: "كيف نستخدم معلوماتك",
          items: [
            {
              topic: "التخصيص:",
              info: "لتخصيص تجربتك."
            },
            {
              topic: "التكامل مع وسائل التواصل:",
              info: "لتوفير إمكانيات مشاركة على وسائل التواصل الاجتماعي."
            },
            {
              topic: "التحليلات:",
              info: "لتحليل أداء المحتوى."
            },
            {
              topic: "نظام المكافآت:",
              info: "لتقديم المكافآت والعروض الترويجية."
            },
            {
              topic: "تحسين التطبيق:",
              info: "لتحسين وظائف التطبيق ودعم المستخدمين."
            }
          ]
        },
        {
          title: "مشاركة المعلومات",
          items: [
            {
              topic: "بيع البيانات:",
              info: "لا نقوم ببيع بياناتك. قد نشارك المعلومات مع:"
            },
            {
              topic: "خدمات طرف ثالث:",
              info: "خدمات طرف ثالث موثوقة (مثل التخزين السحابي وأدوات التحليل)."
            },
            {
              topic: "منصات التواصل:",
              info: "منصات التواصل الاجتماعي التي تتصل بها."
            },
            {
              topic: "السلطات القانونية:",
              info: "السلطات القانونية إذا تطلب القانون ذلك."
            }
          ]
        },
        {
          title: "أمان البيانات",
          items: [
            {
              topic: "تدابير الحماية:",
              info: "نستخدم التشفير وبنية تحتية آمنة لحماية معلوماتك. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪."
            }
          ]
        },
        {
          title: "حقوقك",
          items: [
            {
              topic: "الوصول للبيانات:",
              info: "طلب الوصول أو تصحيح بياناتك الشخصية."
            },
            {
              topic: "حذف الحساب:",
              info: "حذف حسابك والبيانات المتعلقة به."
            },
            {
              topic: "الرسائل التسويقية:",
              info: "إلغاء الاشتراك في الرسائل التسويقية."
            }
          ]
        },
        {
          title: "خصوصية الأطفال",
          items: [
            {
              topic: "قيود العمر:",
              info: "خدماتنا غير مخصصة للمستخدمين دون سن 13 عامًا. لا نجمع بيانات من الأطفال عن عمد."
            }
          ]
        },
        {
          title: "ملفات تعريف الارتباط والتتبع",
          items: [
            {
              topic: "تقنيات التتبع:",
              info: "نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتحسين تجربتك وقياس الأداء."
            }
          ]
        },
        {
          title: "التغييرات على هذه السياسة",
          items: [
            {
              topic: "تحديثات السياسة:",
              info: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر."
            },
            {
              topic: "الإشعارات:",
              info: "سيتم إبلاغك بالتغييرات المهمة عبر البريد الإلكتروني أو تنبيهات داخل التطبيق."
            }
          ]
        },
        {
          title: "اتصل بنا",
          items: [
            {
              topic: "الدعم:",
              info: "إذا كان لديك أي أسئلة أو استفسارات، تواصل معنا عبر"
            }
          ]
        }
      ]
    }
  };

  const currentData = privacyData[lang] || privacyData.en;

  return (
    <div className="policy">
      <div className="container">
        <h1>{t("Privacy & Policy")}</h1>
        <h2>{currentData.heading}</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '18px' }}>
          {currentData.desc}
        </p>

        <div className="merge">
          {currentData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="allowed">
              <h3>
                <span>{section.title}</span>
              </h3>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="item" data-aos={itemIndex % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="topic">
                    <span className="allow">*</span>
                    {item.topic}
                  </div>
                  <p className="info">{item.info}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivcyPolicy;