import DesktopMenu from "@/components/Header/DesktopMenu";
import StaggeredMenu from "@/components/StaggeredMenu";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const { theme } = useTheme();

  const menuItems = [
    { label: "PROJETOS", link: "#", ariaLabel: "Projetos", id: "projects" },
    { label: "SOBRE MIM", link: "#", ariaLabel: "Sobre", id: "about" },
    { label: "CONTATOS", link: "#", ariaLabel: "Contatos", id: "contact" },
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
        displaySocials={false}
        menuButtonColor={theme === "dark" ? "#fff" : "#000"}
        openMenuButtonColor={theme === "dark" ? "#fff" : "000"}
        changeMenuColorOnOpen={true}
        accentColor="transparent"
        background={theme === "dark" ? "#171717cc" : "#e7e7e7cc"}
        className="z-30 fixed top-0 tablet:hidden"
      />
      <DesktopMenu menuItems={menuItems} />
    </>
  );
};

export default Header;
