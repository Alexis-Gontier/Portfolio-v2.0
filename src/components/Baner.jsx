export default function Baner(props) {
  const renderChildren = (text) => {
    return Array.from({ length: 50 }, (_, i) => (
      <span
        key={i}
        className={`px-3 text-xl ${i % 2 === 0 ? 'text-[#EEEEF0]' : 'text-[#6D0094]'}`}
      >
        {text}
      </span>
    ));
  };

  return (
    <div className="bg-[#1C1524] text-[#EEEEF0] border-y-2 border-[#393A40] py-2 overflow-hidden">
      <div className="whitespace-nowrap pb-2">
        {renderChildren(props.text)}
      </div>
      <div className="whitespace-nowrap rotate-180">
        {renderChildren(props.text)}
      </div>
    </div>
  );
}
