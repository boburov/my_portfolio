import { StaticImageData } from "next/image";

import sevenedu from "../assets/sevenedu.png";
import primeprint from "../assets/primeprint.png";
import sevenedu_app from "../assets/sevenedu_mobile.png";
import dexfilm from "../assets/dexfilm.png";
import bayyina_admin from "../assets/bayyina_admin.png";
import bayyina_student from "../assets/bayyina_student.png";
import bayyina_teacher from "../assets/bayyina_teacher.png";
import intela from "../assets/intela_help.png";
import intela_main from "../assets/intela.png";

export type Loyiha = {
  id: number;
  slug: string;
  img: StaticImageData;
  images: StaticImageData[];
  projectName: string;
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  duration: string;
  year: string;
  status: "Live" | "In Development" | "Completed" | "Personal";
  features: string[];
  challenges: string[];
  results: { label: string; value: string }[];
  usingLanguage: string[];
  type: "project";
  gitHb: string;
  netlify: string;
};

export const loyihalar: Loyiha[] = [
  {
    id: 0,
    slug: "sevenedu",
    img: sevenedu,
    images: [sevenedu],
    projectName: "Sevenedu",
    tagline: "Online ta'lim platformasi — 1.3k+ foydalanuvchi, 1mlrd+ aylanma",
    description:
      "Sevenedu — talim platforma bo'lib ushbu loyiha ustida 1yildan beri ishlab kelamiz hozirgacha 1mlrd 64mln foyda olib keldim va platformada 1.3k foydalanuvchi mavjud 1k active foydalanuvchi mavjud.",
    longDescription:
      "Sevenedu — O'zbekistondagi onlayn ta'lim platformasi. Foydalanuvchilar kurslarga yozilishi, video darslarni ko'rishi, testlardan o'tishi va sertifikatlar olishi mumkin. Men loyihaning frontend va backend qismini to'liq ishlab chiqdim: autentifikatsiya, to'lov tizimi, kurs boshqaruvi, video streaming va admin panel. Platforma 1 yildan beri ishlab kelmoqda va katta foyda olib keldi.",
    role: "Fullstack Developer (Lead)",
    duration: "1+ yil",
    year: "2025 — hozirgacha",
    status: "Live",
    features: [
      "Foydalanuvchilarni autentifikatsiya qilish (JWT + refresh token)",
      "Kurs va modul boshqaruvi (admin panel)",
      "Video streaming va saqlash (AWS S3)",
      "Click va Payme orqali to'lov integratsiyasi",
      "Test/quiz tizimi va avtomatik baholash",
      "Real-time bildirishnomalar (Redis pub/sub)",
      "Responsiv UI — telefon, planshet va kompyuter uchun",
    ],
    challenges: [
      "Katta hajmdagi video fayllarni samarali yetkazib berish — AWS S3 + CDN orqali hal qilindi biroq bu bizni oylik harajatni 100$ dan 500$ gacha ko'tardi men ushbu muammoni hal qilish maqsadida videolarni boshqa arzonroq serverga o'tkazdim va bu orqali kompnaiyani 1 oylik server xarajatini 0ga tushurdim va shu bilan birga foydalanuvchilarga ham tezroq video yetkazib berilmoqda",
      "1k+ aktiv foydalanuvchi yukini ko'tarish uchun Redis caching qilindi",
    ],
    results: [
      { label: "Foydalanuvchilar", value: "1.3k+" },
      { label: "Aktiv foydalanuvchilar", value: "1k+" },
      { label: "Aylanma", value: "1+ mlrd so'm" },
      { label: "Ishlab chiqilgan", value: "1 yil" },
    ],
    usingLanguage: ["nextjs", "nestjs", "tailwind", "redis", "postgres", "aws"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://sevenedu.org",
  },
  {
    id: 1,
    slug: "primeprint",
    img: primeprint,
    images: [primeprint],
    projectName: "PrimePrint",
    tagline: "Kitob chop etish uchun mini kalkulyator va landing",
    description:
      "Primeprint — kitob chiqarib beruvchi service uchun mini calculyator vazifasini bajaruvchi telegram botga bog'langan lading calkulyator.",
    longDescription:
      "PrimePrint — kitob chop etish xizmati uchun landing page va onlayn kalkulyator. Foydalanuvchi sahifalar soni, format va qog'oz turini tanlagandan keyin narxni avtomatik hisoblab beradi va buyurtmani Telegram bot orqali xizmat egasiga yuboradi. Mijozlar uchun buyurtma berishni soddalashtirdik.",
    role: "Frontend Developer",
    duration: "2 hafta",
    year: "2024",
    status: "Live",
    features: [
      "Real-time narx kalkulyatori",
      "Telegram bot orqali buyurtmalarni qabul qilish",
      "Responsiv dizayn",
      "SEO uchun optimallashtirilgan",
    ],
    challenges: [
      "Kalkulyator formulasini biznes egasiga moslab tuzish",
      "Telegram bot bilan ishonchli aloqa — error handling qo'shildi",
    ],
    results: [
      { label: "Ishlab chiqildi", value: "2 hafta" },
      { label: "Status", value: "Live" },
    ],
    usingLanguage: ["nextjs", "tailwind", "telegram-bot"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://prime-print.uz",
  },
  {
    id: 2,
    slug: "sevenedu-mobile",
    img: sevenedu_app,
    images: [sevenedu_app],
    projectName: "Sevenedu Mobile App",
    tagline: "Sevenedu platformasining Flutter mobil ilovasi",
    description:
      "Sevenedu platformasining mobil ilovasi, foydalanuvchilarga o'qish va o'qitish jarayonini yanada qulaylashtirish uchun ishlab chiqilgan.",
    longDescription:
      "Sevenedu mobil ilovasi — platformaning mobil versiyasi. Flutter yordamida iOS va Android uchun bir kodbazadan ishlab chiqildi. Foydalanuvchilar kurslarga yozilishi, video darslarni telefon orqali ko'rishi, offline saqlash va o'qituvchilar bilan muloqot qilishi mumkin.",
    role: "Mobile Developer",
    duration: "3 oy",
    year: "2025",
    status: "In Development",
    features: [
      "iOS va Android uchun bir kodbaza (Flutter)",
      "Video darslar — streaming va offline saqlash",
      "Push bildirishnomalar (FCM)",
      "Backend bilan REST API integratsiyasi",
      "Tez ishga tushish (splash + cache)",
    ],
    challenges: [
      "Video offline saqlash uchun DRM va lokal storage strategiyasi",
      "iOS va Android UI nuanslarini bir kodbazada saqlash",
    ],
    results: [
      { label: "Platforma", value: "iOS + Android" },
      { label: "Status", value: "Ishlab chiqilmoqda" },
    ],
    usingLanguage: ["flutter", "dart"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "",
  },
  {
    id: 3,
    slug: "dexfilm-bot",
    img: dexfilm,
    images: [dexfilm],
    projectName: "DexFilm Kino Bot",
    tagline: "2k+ foydalanuvchili bepul kino Telegram boti",
    description:
      "DexFilm kino bot bo'lib hozirda 2k foydalanuvchiga kinolarni tekin ko'rish imkoniyatini beradi.",
    longDescription:
      "DexFilm — Telegram bot orqali kino tomosha qilish xizmati. Foydalanuvchi kino nomini yozadi yoki kategoriyadan tanlaydi va bot to'g'ridan-to'g'ri video yuboradi. Backend Node.js da yozilgan, ma'lumotlar JSON file da saqlanadi (lightweight DB sifatida). Hozirda 2 mingdan ortiq aktiv foydalanuvchi mavjud.",
    role: "Backend Developer",
    duration: "2 kun",
    year: "2024",
    status: "Live",
    features: [
      "Kino qidirish va kategoriyalar bo'yicha filtrlash",
      "Channel obunasiga asoslangan kirish nazorati",
      "Admin panel — yangi kino qo'shish",
      "Statistika va foydalanuvchi monitoringi",
    ],
    challenges: [
      "JSON file ni concurrent yozishda race condition — file-lock joriy qilindi",
      "Yirik fayllarni Telegramda yuborish chegarasi — caching strategiyasi",
    ],
    results: [
      { label: "Foydalanuvchilar", value: "2k+" },
      { label: "Status", value: "Live" },
    ],
    usingLanguage: ["nodejs", "telegraf", "json-db"],
    type: "project",
    gitHb: "https://github.com/boburov/kino_bot",
    netlify: "https://t.me/DEX_Filmbot",
  },
  {
    id: 4,
    slug: "bayyina-erp",
    img: bayyina_admin,
    images: [bayyina_admin, bayyina_teacher, bayyina_student],
    projectName: "Bayyina ERP",
    tagline: "O'quv markaz uchun to'liq ERP — admin, o'qituvchi va o'quvchi panellari",
    description:
      "O'quv markaz uchun to'liq ERP tizim — moliya, davomat, o'qituvchilar, o'quvchilar va guruhlarni boshqarish. Admin, o'qituvchi va o'quvchi panellari mavjud.",
    longDescription:
      "Bayyina ERP — o'quv markazlarini boshqarish uchun mo'ljallangan to'liq korporativ tizim. Uch xil rol — admin, o'qituvchi va o'quvchi — har biri uchun alohida panel ishlab chiqilgan. Tizim moliya, davomat, guruhlar, dars jadvallari va o'quv natijalarini kuzatishni qamrab oladi.",
    role: "Fullstack Developer",
    duration: "1 oy",
    year: "2026",
    status: "Completed",
    features: [
      "Admin panel — moliya, hisobotlar, foydalanuvchilar boshqaruvi",
      "O'qituvchi paneli — guruhlar, davomat, baholar",
      "O'quvchi paneli — jadval, davomat tarixi, to'lovlar",
      "Role-based access control (RBAC)",
      "PostgreSQL + Prisma ORM",
      "Docker bilan deploy",
    ],
    challenges: [
      "Uch xil rol uchun bitta backend da xavfsiz API loyihalash",
      "Davomat tizimi — real vaqtda yangilanish va arxiv",
      "Moliya hisobotlari — katta hajmdagi ma'lumotlarni samarali agregatsiya qilish",
    ],
    results: [
      { label: "Rollar", value: "3 (Admin, Teacher, Student)" },
      { label: "Ishlab chiqildi", value: "4 oy" },
      { label: "Status", value: "Topshirildi" },
    ],
    usingLanguage: ["nextjs", "nestjs", "postgresql", "tailwind", "docker", "prisma"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "",
  },
  {
    id: 5,
    slug: "intela-music",
    img: intela,
    images: [intela, intela_main],
    projectName: "Intela Music Player",
    tagline: "YouTube-dan musiqalarni saqlab eshitadigan pet project",
    description:
      "O'zim uchun pet project — YouTube'dagi yoqgan musiqalarni saqlab borish va istalgan joydan istalgan marta eshitish imkoniyati.",
    longDescription:
      "Intela — shaxsiy musiqa pleyer. YouTube'dan yoqgan treklarni saqlab, ularni bir joyda kolleksiya sifatida tinglash uchun yaratilgan pet project. Player UI, playlist boshqaruvi va offline mode mavjud. O'zim uchun foydalanaman, ammo har kim ishlatishi mumkin.",
    role: "Frontend Developer (Solo)",
    duration: "1 soat",
    year: "2026",
    status: "Personal",
    features: [
      "YouTube link qo'shish va playlist yaratish",
      "Shaffof player UI",
      "Browser storage'da kolleksiya saqlash",
      "Tezkor qidiruv va filtrlash",
    ],
    challenges: [
      "YouTube embed API cheklovlari bilan ishlash",
      "LocalStorage limitidan kelib chiqib data strukturasini ixchamlashtirish",
    ],
    results: [
      { label: "Status", value: "Personal / Open use" },
      { label: "Ishlab chiqildi", value: "1 hafta" },
    ],
    usingLanguage: ["nextjs", "tailwind", "youtube-api"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://intela-snowy.vercel.app/",
  },
];

export const getLoyihaBySlug = (slug: string): Loyiha | undefined =>
  loyihalar.find((l) => l.slug === slug);
