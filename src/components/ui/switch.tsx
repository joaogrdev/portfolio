import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider"; // hook do seu ThemeProvider

function Switch({ className, tipo }: {className?: string, tipo: string, onClick?: () => void}) {
  const { theme, setTheme } = useTheme();

  const checked = theme === "dark";

  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
      className={cn(
        "peer relative inline-flex shrink-0 items-center rounded-full border-1 border-primary/50 px-1 transition-colors",
        "bg-border dark:bg-input/80",
        className, tipo === "mobile" ? "h-6 w-13" : "h-8 w-17"
      )}
    >
      {/* Ícone da Lua (esquerda) */}
      <Moon className={cn("absolute left-1 text-primary pointer-events-none", tipo === "mobile" ? "size-4" : "size-6")} />

      {/* Ícone do Sol (direita) */}
      <Sun  className={cn("absolute right-1 text-primary pointer-events-none", tipo === "mobile" ? "size-4" : "size-6")} />

      {/* Bolinha que desliza */}
      <span
        className={cn(
          "block rounded-full bg-primary transition-transform duration-300",
          checked ? tipo === "mobile" ? "translate-x-6" : "translate-x-8" : "translate-x-0", tipo === "mobile" ? "size-5" : "size-[26px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
