import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import StaggeredMenu from "@/components/StaggeredMenu";
import { useTheme } from "@/components/ThemeProvider";
import { ToggleThemeButton } from "@/components/ThemeToggle";

const Header = () => {
  const { theme } = useTheme();

  const menuLinks = [
    { text: "SOBRE", href: "#" },
    { text: "PROJETOS", href: "#" },
    { text: "HABILIDADES", href: "#" },
    { text: "CONTATO", href: "#" },
  ];

  const menuItems = [
    { label: "SOBRE", ariaLabel: "Go to home page", link: "#" },
    { label: "PROJETOS", ariaLabel: "Learn about us", link: "#" },
    { label: "HABILIDADES", ariaLabel: "View our services", link: "#" },
    { label: "CONTATO", ariaLabel: "Get in touch", link: "#" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        menuButtonColor={theme === "dark" ? "#fff" : "#000"}
        openMenuButtonColor={theme === "dark" ? "#fff" : "000"}
        changeMenuColorOnOpen={true}
        accentColor="transparent"
        background={theme === "dark" ? "#171717" : "#e7e7e7"}
        className="fixed top-0 z-50 tablet:hidden"
      />
      <div className="hidden tablet:block">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={1}
          delay={1}
        >
          <div className="px-10 py-5 grid grid-cols-[100px_1fr_100px] place-items-center">
            <p className="font-nova text-2xl bg-primary text-popover px-2 hover:scale-110 cursor-pointer flex items-center justify-center w-fit pt-1 rounded-sm transition-all duration-200">
              JG
            </p>
            <nav className="hidden tablet:flex flex-wrap justify-center flex-1">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="pb-2 px-3 laptop:px-5 pt-3 hover:bg-primary hover:text-secondary text-lg laptop:text-xl font-title font-bold transition-all duration-300 rounded-md"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </nav>
            <ToggleThemeButton tipo="desktop" />
          </div>
        </AnimatedContent>
      </div>
    </>
  );
};

export default Header;
