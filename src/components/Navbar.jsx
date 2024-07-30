import NavbarTheme from "./NavbarTheme"
import NavbarBtn from "./NavbarBtn"

export default function Navbar() {

  const LINKS = [
    {
      lien: "#about",
      text: "A Propos"
    },
    {
      lien: "#portfolio",
      text: "Portfolio"
    },
    {
      lien: "#contact",
      text: "Contact"
    },
  ]

  return (
    <nav className="z-50 fixed top-0 left-0 w-full p-4 bg-[#111113]/85 backdrop-blur-sm flex justify-around items-center border-b-2 border-[#393A40]/50 shadow-xl shadow-[#7A3FB7]/10">
      <a href="#" className="text-[#EEEEF0] text-2xl font-bold">
        alexisGontier
      </a>

      <div className="flex justify-center items-center gap-5">
        {LINKS.map((link, index) => (
          <a key={index} href={link.lien} className="text-[#B2B3BD] font-medium hover:text-[#8E4EC6] hover:translate-y-[-2px] transition duration-300 ease-out">
            {link.text}
          </a>
        ))}
        <div className="w-px h-6 bg-[#B2B3BD]"></div>
        <NavbarTheme />
        <NavbarBtn />
      </div>
    </nav>
  )
}
