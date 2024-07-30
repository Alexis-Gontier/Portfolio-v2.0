export default function HeroRecherche(props) {
  return (
    <>
      {props.isVisible ? (
          <div className="flex items-center gap-2">
          <div className="border-2 border-[#37744E] rounded-full p-[2px]">
            <div className="w-3 h-3 bg-[#37744E] rounded-full"></div>
          </div>
          <p className="text-[#37744E] text-lg font-semibold">
            {props.children}
          </p>
        </div>
      ) : null}
    </>
)}
