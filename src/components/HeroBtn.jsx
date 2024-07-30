export default function HeroBtn(props) {
  return (
    <a href="#about" className="p-1 border-2 border-[#CD9FFF]/15 rounded-full">
      <button className="text-[#EEEEF0] bg-[#CD9FFF]/15 py-3 px-8 rounded-full transition duration-300 ease-out hover:scale-95 shadow-lg">
        {props.children}
      </button>
    </a>
  );
}
