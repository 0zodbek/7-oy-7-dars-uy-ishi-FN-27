import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Templates': 'Templates',
      'Features': 'Features',
      'Pricing': 'Pricing',
      'Resources': 'Resources',
      "Start Free Trial": "Start Free Trial",
      "Hello!": "Hello!",
      "We're always here to help.": "We're always here to help.",
      "Interested in learning more about SmartMoving?": "Interested in learning more about SmartMoving?",
      "Give us a call or send an email and one of our team members will be happy to assist you.": "Give us a call or send an email and one of our team members will be happy to assist you.",
      "CALL US": "CALL US",
      "+1 (214) 960 4130": "+1 (214) 960 4130",
      "Email Us": "Email Us",
      "hello@aiinfo.com": "hello@aiinfo.com",
      "HEADQUARTERS": "HEADQUARTERS",
      "12720 Hillcrest Road Suite 980, Dallas, TX 75230": "12720 Hillcrest Road Suite 980, Dallas, TX 75230",
      "Sign up for your free 14 day trial now!": "Sign up for your free 14 day trial now!",
      "Get Started for free": "Get Started for free",
      "Add to Cart": "Add to Cart",
      "Name": "Name",
      "Age": "Age",
      "Email": "Email",
      "Add to Cart": "Add to Cart",
      "Remove": "Remove",
    },
  },
  uz: {
    translation: {
      'Templates': 'Shablonlar',
      'Features': 'Xususiyatlar',
      'Pricing': 'Narxlar',
      'Resources': 'Resurslar',
      "Start Free Trial": "Bepul sinov muddatini boshlang",
      "Hello!": "Salom!",
      "We're always here to help.": "Biz har doim yordam berishga tayyormiz.",
      "Interested in learning more about SmartMoving?": "SmartMoving haqida ko'proq bilishni xohlaysizmi?",
      "Give us a call or send an email and one of our team members will be happy to assist you.": "Bizga qo'ng'iroq qiling yoki elektron pochta yuboring va jamoamiz a'zolaridan biri sizga yordam berishdan mamnun bo'ladi.",
      "CALL US": "Bizga qo'ng'iroq qiling",
      "+1 (214) 960 4130": "+1 (214) 960 4130",
      "Email Us": "Bizga elektron pochta yuboring",
      "hello@aiinfo.com": "hello@aiinfo.com",
      "HEADQUARTERS": "Bosh ofis",
      "12720 Hillcrest Road Suite 980, Dallas, TX 75230": "12720 Hillcrest Road Suite 980, Dallas, TX 75230",
      "Sign up for your free 14 day trial now!": "14 kunlik bepul sinov muddatiga hoziroq ro'yxatdan o'ting!",
      "Get Started for free": "Bepul boshlang",
      "Add to Cart": "Savatga qo'shish",
      "Name": "Ism",
      "Age": "Yosh",
      "Email": "Elektron pochta",
      "Remove": "O'chirish",
    },
  },
  // Add translations for other languages here (e.g., uz for Uzbek)
};

i18next
  .use(initReactI18next) // passes i18next down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // Fallback to English if translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18next;