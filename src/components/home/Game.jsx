import React from "react";
import Board from "./Board";
import xImage from "/src/assets/Select=Cross.png";
import OImage from "/src/assets/Select=Circle.png";

const calculatWiner = (squares) => {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

class Game extends React.Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    steps: 0,
    xIsNext: true,
  };

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.steps + 1);

    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculatWiner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? xImage : OImage;

    this.setState({
      history: history.concat({ squares }),
      steps: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo = (step) => {
    this.setState({
      steps: step,
      xIsNext: step % 2 === 0,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.steps];
    const winner = calculatWiner(current.squares);
    console.log("winner", winner);
    console.log("History", history);
    console.log("Current", current);
    // console.log("This", this.props.handleState);
    if (winner) {
      this.props.handleState(true);
    } else {
      this.props.handleState(false);
    }
    const moves = history.map((_, move) => {
      const desc = move ? "Go To Move #" + move : "Go To Move Start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="flex ">
        <div className="">
          Hello I am Game
          <Board onClick={this.handleClick} squares={current.squares} />
        </div>
        <div className="pl-32">
          <div className="text-5xl pb-5 flex gap-3 items-center">
            {winner ? "Winner " : "Next Player "}
            {winner ? (
              <img width={"60px"} src={winner} alt="" />
            ) : this.state.xIsNext ? (
              <img width={"60px"} src={xImage} alt="" />
            ) : (
              <img width={"60px"} src={OImage} alt="" />
            )}
          </div>

          <ol className="[&>*:first-child]:pb-2 [&>*:first-child]:text-2xl">
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
