import { useTheme } from "./ThemeProvider";
import { Switch } from "./ui/switch";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
<>
    <Switch id="airplane-mode" tipo="desktop" className={"hidden tablet:block"} onClick={toggleTheme} />
    <Switch id="airplane-mode" tipo="mobile" className={"tablet:hidden"} onClick={toggleTheme} /></>
  );
}
