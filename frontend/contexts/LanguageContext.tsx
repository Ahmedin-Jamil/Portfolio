import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ar' ? 'ar' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translations = language === 'ar' ? translationsAr : translationsEn;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translationsEn: Record<string, string> = {
  // Header
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Contact',

  // Hero Section
  'hero.subtitle': 'Backend Developer & ERP SAP End-to-End',
  'hero.title1': 'Building',
  'hero.title2': 'Modern Web',
  'hero.title3': 'Applications',
  'hero.description': 'Passionate about creating scalable web applications and enterprise solutions. Specialized in React, TypeScript, and modern full-stack development with experience in AI integration and cloud-based systems.',
  'hero.cta': 'View My Work',


  // About Section
  'about.label': 'About Me',
  'about.title1': 'Fresh Graduate',
  'about.title2': 'Ready to Build',
  'about.description1': 'I enjoy learning new technologies and building practical applications that solve real problems. My journey includes hands-on experience with modern web frameworks, database management, and exploring enterprise systems like SAP ERP.',
  'about.description2': 'During my internship at the University of the Cordilleras Office of Student Affairs, I contributed to UC AIwan+ by developing web interfaces and internal tools including mental health modules, emotion tracking, AI-driven analytics, and a 3D gamified career map. I also partnered with a local business to deliver the Baguio Pet Boarding Platform, a complete booking management system.',
  'about.skills.title': 'My Skills',
  'about.skill1.name': 'Full-Stack Development',
  'about.skill1.desc': 'Building user interfaces with React and connecting them to well-structured APIs and data layers.',
  'about.skill2.name': 'Database Management',
  'about.skill2.desc': 'Familiar with MySQL and PostgreSQL. Experience with Supabase cloud backend platform.',
  'about.skill3.name': 'SAP ERP Systems',
  'about.skill3.desc': 'Familiar with SAP ERP System Configuration and ABAP basics through training and self-study.',
  'about.skill4.name': 'UI/UX Design',
  'about.skill4.desc': 'Proficient in Figma for mobile and web UI design. Creating user-friendly interfaces.',
  'about.achievement1.title': 'Internship Success',
  'about.achievement1.desc': 'UC Office of Student Affairs',
  'about.achievement2.title': 'Formal Commendation',
  'about.achievement2.desc': 'Outstanding System Contribution',
  'about.achievement3.title': 'Team Collaboration',
  'about.achievement3.desc': 'Consensus-Building & Teamwork',
  'about.achievement4.title': 'SAP Training',
  'about.achievement4.desc': 'Cloud & S/4HANA Configuration',

  // Services Section
  'services.label': 'What I Can Help With',
  'services.title1': 'Services I',
  'services.title2': 'Offer',
  'services.description': 'I focus on building practical, user-friendly web applications and helping teams turn ideas into working software.',
  'services.service1.title': 'Web Application Development',
  'services.service1.desc': 'Building responsive web apps with React, TypeScript, and modern frameworks. Knowledgeable in JavaScript, React.js, Express.js, and HTML/CSS.',
  'services.service2.title': 'Backend & Database Design',
  'services.service2.desc': 'Familiar with MySQL and PostgreSQL database management. Experience with modern cloud-based backend platforms like Supabase.',
  'services.service3.title': 'AI Chatbot Integration',
  'services.service3.desc': 'Integrating conversational AI into web applications for customer support and user engagement using modern AI APIs.',
  'services.service4.title': 'UI/UX Design & Analysis',
  'services.service4.desc': 'Proficient in Figma for mobile and web UI design. Translating business needs into user-friendly interfaces and development plans.',

  // Portfolio Section
  'portfolio.label': 'My Learning Journey',
  'portfolio.title1': 'Projects &',
  'portfolio.title2': 'Experience',
  'portfolio.description': 'Here are projects from my internship and personal learning that showcase my growth as a developer and my ability to build functional web applications.',
  'portfolio.project1.title': 'Baguio Pet Boarding',
  'portfolio.project1.category': 'Booking Management System',
  'portfolio.project1.desc': 'Developed and delivered a full-stack pet boarding management system in partnership with a local business. Features include client booking journey, admin workflow, service selection and scheduling, booking/request tracking, and dashboard views. Built using React, TypeScript, and Supabase with integrated for customer support.',
  'portfolio.project2.title': 'UC AIwan+',
  'portfolio.project2.category': 'University Student Support Platform',
  'portfolio.project2.desc': 'Internship project at University of the Cordilleras Office of Student Affairs. Contributed to UC AIwan+ by developing web interfaces and internal tools, including mental health modules, emotion tracking, AI-driven analytics, and a 3D gamified career map feature. Supported workflow improvements across student service operations. Received formal commendation for outstanding contributions to system design and development.',

  // Contact Section
  'contact.label': 'Get In Touch',
  'contact.title1': "Let's Discuss Your",
  'contact.title2': 'Project',
  'contact.description': "Ready to bring your vision to life? Let's collaborate and create something amazing together. You can reach me directly through the contact details below.",
  'contact.info.title': 'Contact Information',
  'contact.info.description': "Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and creative challenges.",
  'contact.phone': 'Phone Number',
  'contact.email': 'Email Address',
  'contact.location': 'Location',
  'contact.timeline.title': 'Project Timeline',
  'contact.timeline.response': 'Response Time:',
  'contact.timeline.responseValue': 'Within 24 hours',
  'contact.timeline.start': 'Project Start:',
  'contact.timeline.startValue': '1-2 weeks',
  'contact.timeline.completion': 'Avg. Completion:',
  'contact.timeline.completionValue': '2-6 weeks',

  // Footer
  'footer.description': 'Full-stack developer passionate about building modern web applications and enterprise solutions.',
  'footer.quickLinks': 'Quick Links',
  'footer.connect': 'Connect',
  'footer.rights': 'All rights reserved.',
};

const translationsAr: Record<string, string> = {
  // Header
  'nav.home': 'الرئيسية',
  'nav.about': 'عني',
  'nav.services': 'الخدمات',
  'nav.portfolio': 'الأعمال',
  'nav.contact': 'التواصل',

  // Hero Section
  'hero.subtitle': 'مطور Full-stack ومتخصص في أنظمة SAP ERP متكاملة',
  'hero.title1': 'بناء',
  'hero.title2': 'تطبيقات ويب',
  'hero.title3': 'حديثة',
  'hero.description': 'شغوف ببناء تطبيقات ويب قابلة للتوسع وحلول مؤسسية. متخصص في React وTypeScript وتطوير الويب الحديث مع خبرة في دمج الذكاء الاصطناعي والأنظمة السحابية.',
  'hero.cta': 'شاهد أعمالي',
  'hero.badge1': 'متحمس لـ SAP',
  'hero.badge2': 'مطور ويب متكامل',

  // About Section
  'about.label': 'عني',
  'about.title1': 'خريج جديد',
  'about.title2': 'جاهز للبناء',
  'about.description1': 'أستمتع بتعلم التقنيات الجديدة وبناء تطبيقات عملية تحل المشاكل الحقيقية. تشمل رحلتي خبرة عملية مع أطر عمل الويب الحديثة وإدارة قواعد البيانات واستكشاف أنظمة المؤسسات مثل SAP ERP.',
  'about.description2': 'خلال تدريبي في مكتب شؤون الطلاب بجامعة كورديليراس، ساهمت في UC AIwan+ من خلال تطوير واجهات الويب والأدوات الداخلية بما في ذلك وحدات الصحة النفسية وتتبع المشاعر والتحليلات المدعومة بالذكاء الاصطناعي وخريطة مهنية ثلاثية الأبعاد. كما شاركت مع شركة محلية لتقديم منصة Baguio Pet Boarding، وهو نظام إدارة حجوزات كامل.',
  'about.skills.title': 'مهاراتي',
  'about.skill1.name': 'تطوير الويب المتكامل',
  'about.skill1.desc': 'بناء واجهات المستخدم باستخدام React وربطها بواجهات برمجية وطبقات بيانات منظمة.',
  'about.skill2.name': 'إدارة قواعد البيانات',
  'about.skill2.desc': 'ملم بـ MySQL و PostgreSQL. خبرة في منصة Supabase السحابية.',
  'about.skill3.name': 'أنظمة SAP ERP',
  'about.skill3.desc': 'ملم بتكوين نظام SAP ERP وأساسيات ABAP من خلال التدريب والدراسة الذاتية.',
  'about.skill4.name': 'تصميم واجهات المستخدم',
  'about.skill4.desc': 'متمكن من Figma لتصميم واجهات الهاتف والويب. إنشاء واجهات سهلة الاستخدام.',
  'about.achievement1.title': 'نجاح التدريب',
  'about.achievement1.desc': 'مكتب شؤون الطلاب بجامعة UC',
  'about.achievement2.title': 'شهادة تقدير رسمية',
  'about.achievement2.desc': 'مساهمة متميزة في النظام',
  'about.achievement3.title': 'العمل الجماعي',
  'about.achievement3.desc': 'بناء التوافق والعمل الجماعي',
  'about.achievement4.title': 'تدريب SAP',
  'about.achievement4.desc': 'تكوين السحابة و S/4HANA',

  // Services Section
  'services.label': 'كيف يمكنني المساعدة',
  'services.title1': 'الخدمات التي',
  'services.title2': 'أقدمها',
  'services.description': 'أركز على بناء تطبيقات ويب عملية وسهلة الاستخدام ومساعدة الفرق على تحويل الأفكار إلى برامج عاملة.',
  'services.service1.title': 'تطوير تطبيقات الويب',
  'services.service1.desc': 'بناء تطبيقات ويب متجاوبة باستخدام React و TypeScript وأطر العمل الحديثة. ملم بـ JavaScript و React.js و Express.js و HTML/CSS.',
  'services.service2.title': 'تصميم الخلفية وقواعد البيانات',
  'services.service2.desc': 'ملم بإدارة قواعد بيانات MySQL و PostgreSQL. خبرة في منصات الخلفية السحابية الحديثة مثل Supabase.',
  'services.service3.title': 'دمج روبوتات المحادثة الذكية',
  'services.service3.desc': 'دمج الذكاء الاصطناعي التحاوري في تطبيقات الويب لدعم العملاء والتفاعل مع المستخدمين باستخدام واجهات برمجية حديثة.',
  'services.service4.title': 'تصميم وتحليل واجهات المستخدم',
  'services.service4.desc': 'متمكن من Figma لتصميم واجهات الهاتف والويب. ترجمة احتياجات العمل إلى واجهات سهلة الاستخدام وخطط تطوير.',

  // Portfolio Section
  'portfolio.label': 'رحلة التعلم',
  'portfolio.title1': 'المشاريع',
  'portfolio.title2': 'والخبرة',
  'portfolio.description': 'هذه مشاريع من تدريبي وتعلمي الشخصي تعرض نموي كمطور وقدرتي على بناء تطبيقات ويب عملية.',
  'portfolio.project1.title': 'Baguio Pet Boarding',
  'portfolio.project1.category': 'نظام إدارة الحجوزات',
  'portfolio.project1.desc': '  نظام إدارة حجوزات متكامل لرعاية الحيوانات الأليفة بالشراكة مع شركة محلية. يتضمن رحلة حجز العميل وسير عمل الإدارة واختيار الخدمات والجدولة وتتبع الحجوزات ولوحات المعلومات. تم البناء باستخدام React و TypeScript و Supabase    .',
  'portfolio.project2.title': 'UC AIwan+',
  'portfolio.project2.category': 'منصة دعم طلاب الجامعة',
  'portfolio.project2.desc': 'مشروع تدريب في مكتب شؤون الطلاب بجامعة كورديليراس. ساهمت في UC AIwan+ من خلال تطوير واجهات الويب والأدوات الداخلية، بما في ذلك وحدات الصحة النفسية وتتبع المشاعر والتحليلات المدعومة بالذكاء الاصطناعي وميزة خريطة مهنية ثلاثية الأبعاد. دعمت تحسينات سير العمل عبر عمليات خدمة الطلاب. حصلت على شهادة تقدير رسمية للمساهمات المتميزة في تصميم وتطوير النظام.',

  // Contact Section
  'contact.label': 'تواصل معي',
  'contact.title1': 'لنناقش',
  'contact.title2': 'مشروعك',
  'contact.description': 'مستعد لتحويل رؤيتك إلى واقع؟ دعنا نتعاون ونصنع شيئًا رائعًا معًا. يمكنك التواصل معي مباشرة من خلال تفاصيل الاتصال أدناه.',
  'contact.info.title': 'معلومات الاتصال',
  'contact.info.description': 'لا تتردد في التواصل عبر أي من هذه القنوات. أنا دائمًا متحمس لمناقشة الفرص الجديدة والتحديات الإبداعية.',
  'contact.phone': 'رقم الهاتف',
  'contact.email': 'البريد الإلكتروني',
  'contact.location': 'الموقع',
  'contact.timeline.title': 'الجدول الزمني للمشروع',
  'contact.timeline.response': 'وقت الرد:',
  'contact.timeline.responseValue': 'خلال 24 ساعة',
  'contact.timeline.start': 'بدء المشروع:',
  'contact.timeline.startValue': '1-2 أسبوع',
  'contact.timeline.completion': 'متوسط الإنجاز:',
  'contact.timeline.completionValue': '2-6 أسابيع',

  // Footer
  'footer.description': 'مطور ويب متكامل شغوف ببناء تطبيقات ويب حديثة وحلول مؤسسية.',
  'footer.quickLinks': 'روابط سريعة',
  'footer.connect': 'تواصل',
  'footer.rights': 'جميع الحقوق محفوظة.',
};
