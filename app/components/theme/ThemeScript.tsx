import { STORAGE_KEY } from "./ThemeProvider";

/**
 * Runs before first paint so the correct theme is already on <html> and the
 * page never flashes the wrong background.
 */
const script = `
(function(){
  try {
    var t = localStorage.getItem(${JSON.stringify(STORAGE_KEY)}) || "system";
    var dark = t === "dark" || (t !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
