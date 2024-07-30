import { FiMoon } from "react-icons/fi";

export default function NavbarTheme() {
  return (
    <button className="bg-[#A64CFB]/20 text-[#B2B3BD] text-sm py-2 px-3 border-2 border-[#51356D] rounded flex items-center gap-2 hover:bg-[#A64CFB]/30">
      <FiMoon />
      darkMode
    </button>
  )
}
