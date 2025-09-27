import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

export function ToggleThemeButton({ tipo }: { tipo: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={cn(
        tipo === "mobile"
          ? "tablet:hidden"
          : "hidden tablet:flex items-center space-x-2"
      )}
    >
      {tipo === "mobile" ? (
        theme === "light" ? (
          <div className="flex items-center p-1 border border-primary rounded-sm text-primary">
            <Moon size={20} onClick={toggleTheme} />
          </div>
        ) : (
          <div className="flex items-center p-1 border border-primary rounded-sm">
            <Sun size={20} onClick={toggleTheme} />
          </div>
        )
      ) : (
        <>
          <Moon size={20} />
          <Switch id="airplane-mode" onClick={toggleTheme} />
          <Sun size={20} />
        </>
      )}
    </div>
  );
}
