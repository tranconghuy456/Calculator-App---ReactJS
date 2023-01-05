import "./App.css";
import Button from "./components/Button";

function App() {
  const buttons = [
    {
      value: "%",
      type: "operation",
      cell: 1,
    },
    {
      value: "CE",
      type: "function",
      cell: 1,
    },
    {
      value: "C",
      type: "function",
      cell: 1,
    },
    {
      value: "DEL",
      type: "function",
      cell: 1,
    },
    {
      value: "1/x",
      type: "operation",
      cell: 1,
    },
    {
      value: "sqr(2)",
      type: "operation",
      cell: 1,
    },
    {
      value: "sqrt(2)",
      type: "operation",
      cell: 1,
    },
    {
      value: "/",
      type: "operation",
      cell: 1,
    },

    // ROW 3
    {
      value: "7",
      type: "number",
      cell: 1,
    },
    {
      value: "8",
      type: "number",
      cell: 1,
    },
    {
      value: "9",
      type: "number",
      cell: 1,
    },
    {
      value: "x",
      type: "operation",
      cell: 1,
    },

    // ROW 4
    {
      value: "4",
      type: "number",
      cell: 1,
    },
    {
      value: "5",
      type: "number",
      cell: 1,
    },
    {
      value: "6",
      type: "number",
      cell: 1,
    },
    {
      value: "-",
      type: "operation",
      cell: 1,
    },

    // ROW 5
    {
      value: "1",
      type: "number",
      cell: 1,
    },
    {
      value: "2",
      type: "number",
      cell: 1,
    },
    {
      value: "3",
      type: "number",
      cell: 1,
    },
    {
      value: "+",
      type: "operation",
      cell: 1,
    },

    // ROW 6
    {
      value: "+/_",
      type: "function",
      cell: 1,
    },
    {
      value: "0",
      type: "number",
      cell: 1,
    },
    {
      value: ",",
      type: "function",
      cell: 1,
    },
    {
      value: "=",
      type: "function",
      cell: 1,
    },
  ];

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="output__previous"></div>
          <div className="output__current">0</div>
        </div>
        {/* <button className="cell">&#37;</button>
        <button className="cell">CE</button>
        <button className="cell">C</button>
        <button className="cell">DEL</button>
        <button className="cell">1/x</button>
        <button className="cell">
          x<sup>2</sup>
        </button>
        <button className="cell">&#8730;</button>
        <button className="cell">&#247;</button>
        <button className="cell">7</button>
        <button className="cell">8</button>
        <button className="cell">9</button>
        <button className="cell">&#215;</button>
        <button className="cell">4</button>
        <button className="cell">5</button>
        <button className="cell">6</button>
        <button className="cell">&#8722;</button>
        <button className="cell">1</button>
        <button className="cell">2</button>
        <button className="cell">3</button>

        <button className="cell">&#43;</button>

        <button className="cell">+/_</button>
        <button className="cell">0</button>
        <button className="cell">,</button>
        <button className="cell">&#61;</button> */}
        {buttons.map((button) => {
          return (
            <Button
              cell={button.cell}
              type={button.type}
              value={button.value}
              key={(Math.random() + 1).toString(36).substring(7)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
