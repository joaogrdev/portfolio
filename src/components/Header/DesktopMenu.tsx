import { ToggleThemeButton } from "../ThemeToggle";
import AnimatedContent from "../AnimatedContent";

const DesktopMenu = ({
  menuItems,
}: {
  menuItems: { link: string; label: string; id: string }[];
}) => {
  return (
    <div className="hidden tablet:block fixed top-0 z-50 w-full mr-[10px] bg-border/75">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.5}
        ease="power3.out"
        initialOpacity={1}
        delay={0.6}
      >
        <div className="px-10 py-5 grid grid-cols-[100px_1fr_100px] place-items-center">
          {/* <p className="font-super text-2xl bg-primary text-popover px-2 hover:scale-110 cursor-pointer flex items-center justify-center w-fit pt-1 rounded-sm transition-all duration-200">
              JG
            </p> */}
          <p
            className="font-super text-3xl border border-primary/50 px-2 hover:scale-105 cursor-pointer flex items-center justify-center w-fit pt-1 rounded-sm transition-all duration-200"
            onClick={() => {
              const target = document.getElementById("home");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            JG
          </p>
          <nav className="hidden tablet:flex w-full justify-end flex-1 ">
            {menuItems.map(({ link, label, id }) => (
              <li key={link}>
                <button
                  onClick={() => {
                    const target = document.getElementById(id);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="pb-1 px-3 laptop:px-5 pt-2 hover:bg-primary hover:text-secondary text-base font-title font-bold transition-all duration-300 rounded-md bg-transparent border-none cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </nav>
          <ToggleThemeButton />
        </div>
      </AnimatedContent>
    </div>
  );
};

export default DesktopMenu;
