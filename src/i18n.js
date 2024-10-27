import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/locales/locales-en.json';
import th from '../src/locales/locales-th.json';

// ตรวจสอบค่าภาษาใน localStorage หรือใช้ 'en' เป็นค่าเริ่มต้นถ้ายังไม่มีการเลือกภาษา
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            th: { translation: th },
        },
        lng: savedLanguage, // ใช้ค่าภาษาที่เก็บไว้ใน localStorage
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

// ฟังก์ชันเพื่ออัปเดตภาษาและบันทึกลง localStorage
export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
};

export default i18n;
