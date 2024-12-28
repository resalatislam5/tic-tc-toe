function Square({ value, borderValue, onClick }) {
  return (
    <div className={`border-2 border-[#FFAB2D] p-5 ${borderValue}`}>
      <button
        onClick={onClick}
        className="w-32 h-32 border-2 border-[#00A8A8] shadow-[#00A8A8] ring-2 ring-white shadow-inner rounded-lg flex justify-center items-center"
      >
        <img className="w-28" src={value} alt="" />
      </button>
    </div>
  );
}

export default Square;
