import Square from "./Square";

function Board({onClick, squares}) {
  console.log(squares);
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <Square value={squares[1]} onClick={() =>onClick(1)} borderValue={"border-t-0 border-l-0 border-r-0"} />
        <Square value={squares[2]} onClick={() =>onClick(2)} borderValue={"border-t-0 border-r-0"} />
        <Square value={squares[3]} onClick={() =>onClick(3)} borderValue={"border-t-0 border-r-0"} />

        <Square value={squares[4]} onClick={() =>onClick(4)} borderValue={"border-t-0 border-l-0 border-r-0"} />
        <Square value={squares[5]} onClick={() =>onClick(5)} borderValue={"border-t-0 border-r-0"} />
        <Square value={squares[6]} onClick={() =>onClick(6)} borderValue={"border-t-0 border-r-0"} />

        <Square
          value={squares[7]} onClick={() =>onClick(7)}
          borderValue={"border-t-0 border-l-0 border-r-0 border-b-0"}
        />
        <Square value={squares[8]} onClick={() =>onClick(8)} borderValue={"border-t-0 border-r-0 border-b-0"} />
        <Square value={squares[9]} onClick={() =>onClick(9)} borderValue={"border-t-0 border-r-0 border-b-0"} />
      </div>
    </div>
  );
}

export default Board;
