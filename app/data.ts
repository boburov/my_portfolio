import sevenedu from "../assets/sevenedu.png"
import primeprint from "../assets/primeprint.png"
import sevenedu_app from "../assets/sevenedu_mobile.png"
import dexfilm from "../assets/dexfilm.png"
import bayyina_admin from "../assets/bayyina_admin.png"
import bayyina_student from "../assets/bayyina_student.png"
import bayyina_teacher from "../assets/bayyina_teacher.png"


export const loyihalar = [
  {
    id: 0,
    img: sevenedu,
    projectName: "sevenedu",
    description:
      "Sevenedu — course platform which inculdes 1k users.",
    usingLanguage: ["nextjs", "nestjs", "tailwind", "redis"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://sevenedu.org",
  },
  {
    id: 1,
    img: primeprint,
    projectName: "primeprint",
    description:
      "Primeprint — book printer company website.",
    usingLanguage: ["nextjs", "tailwind"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://prime-print.uz",
  },
  {
    id: 2,
    img: sevenedu_app,
    projectName: "Sevenedu Mobile APP",
    description:
      "Ushbu loyihamiz sevenedu platfomasi uchun mobile versiaysi hisoblanadi.",
    usingLanguage: ["nextjs", "tailwind"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: ""
  },
  {
    id: 3,
    img: dexfilm,
    projectName: "DexFilm Kino Bot",
    description:
      "DexFilm kino bot bo'lin hozirda 2k foydalanuvchiga kinolarni tekin korish imkoniyatini beradi",
    usingLanguage: ["json as db", "nodejs"],
    type: "project",
    gitHb: "https://github.com/boburov/kino_bot",
    netlify: "https://t.me/DEX_Filmbot"
  },
  {
    id: 4,
    img: bayyina_admin,
    images: [bayyina_admin, bayyina_teacher, bayyina_student],
    projectName: "Bayyina ERP",
    description:
      "O'quv markaz uchun to'liq ERP tizim — moliya, davomat, o'qituvchilar, o'quvchilar va guruhlarni boshqarish. Admin, o'qituvchi va o'quvchi panellari mavjud.",
    usingLanguage: ["nextjs", "nestjs", "postgresql", "tailwind", "docker"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: ""
  }


];