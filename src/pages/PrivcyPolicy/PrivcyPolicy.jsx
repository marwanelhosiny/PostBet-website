import React from "react";

function PrivacyPolicy() {
  // Language state - you can change this to 'ar' to see Arabic
  const [lang, setLang] = React.useState('en');

  // In your actual app, you can restore: const { lang } = localStorage;

  const styles = {
    policy: {
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: '20px'
    },
    languageToggle: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
      transition: 'transform 0.2s ease',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    },
    languageToggleHover: {
      transform: 'translateY(-2px)'
    },
    container: {
      maxWidth: '1200px',
      margin: '30px auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      direction: lang === 'ar' ? 'rtl' : 'ltr'
    },
    h1: {
      fontSize: '35px',
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '20px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '28px',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#3b82f6',
      fontWeight: '600'
    },
    description: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '18px',
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto 40px auto',
      lineHeight: '1.6'
    },
    merge: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '20px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    },
    allowed: {
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    allowedHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 30px rgba(59, 130, 246, 0.4)'
    },
    sectionTitle: {
      fontSize: '20px',
      textTransform: 'capitalize',
      background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
      margin: '0',
      padding: '15px 20px',
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold',
      borderBottom: '2px solid rgba(255, 255, 255, 0.1)'
    },
    itemsContainer: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    item: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    },
    itemHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    },
    topic: {
      fontSize: '18px',
      color: '#1f2937',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      marginBottom: '8px',
      fontWeight: '600'
    },
    topicMobile: {
      fontSize: '16px'
    },
    bulletPoint: {
      color: '#10b981',
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '1',
      marginTop: '2px'
    },
    info: {
      color: '#4b5563',
      textAlign: 'left',
      fontSize: '14px',
      lineHeight: '1.5',
      marginLeft: '34px'
    },
    infoMobile: {
      fontSize: '13px'
    }
  };

  // Translation function
  const t = (key) => {
    const translations = {
      "Privacy & Policy": lang === 'ar' ? "الشروط و الاحكام" : "Privacy & Policy"
    };
    return translations[key] || key;
  };

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

  // Handle hover effects
  const [hoveredSection, setHoveredSection] = React.useState(null);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [hoveredLangButton, setHoveredLangButton] = React.useState(false);

  return (
    <div style={styles.policy}>
      <button
        style={{
          ...styles.languageToggle,
          ...(hoveredLangButton ? styles.languageToggleHover : {})
        }}
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        onMouseEnter={() => setHoveredLangButton(true)}
        onMouseLeave={() => setHoveredLangButton(false)}
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </button>

      <div style={styles.container}>
        <h1 style={styles.h1}>
          Privacy & Policy
        </h1>
        <h2 style={styles.h2}>
          {currentData.heading}
        </h2>
        <p style={styles.description}>
          {currentData.desc}
        </p>

        <div style={styles.merge}>
          {currentData.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              style={{
                ...styles.allowed,
                ...(hoveredSection === sectionIndex ? styles.allowedHover : {})
              }}
              onMouseEnter={() => setHoveredSection(sectionIndex)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 style={styles.sectionTitle}>
                {section.title}
              </h3>
              <div style={styles.itemsContainer}>
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      ...styles.item,
                      ...(hoveredItem === `${sectionIndex}-${itemIndex}` ? styles.itemHover : {})
                    }}
                    onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div style={{
                      ...styles.topic,
                      ...(window.innerWidth <= 800 ? styles.topicMobile : {})
                    }}>
                      <span style={styles.bulletPoint}>*</span>
                      <span>{item.topic}</span>
                    </div>
                    <p style={{
                      ...styles.info,
                      ...(window.innerWidth <= 800 ? styles.infoMobile : {})
                    }}>
                      {item.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;