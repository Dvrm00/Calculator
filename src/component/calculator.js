import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Hatalı İşlem");
    }
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button className="function clear" onClick={clear}>
          C
        </button>
        <button className="function backspace" onClick={backspace}>
          CE
        </button>
        <button className="function" name="." onClick={handleClick}>
          /
        </button>
        <button className="number" name="7" onClick={handleClick}>
          7
        </button>
        <button className="number" name="8" onClick={handleClick}>
          8
        </button>
        <button className="number" name="*" onClick={handleClick}>
          *
        </button>
        <button className="function" name="9" onClick={handleClick}>
          99
        </button>
        <button className="number" name="6" onClick={handleClick}>
          66
        </button>
        <button className="number" name="-" onClick={handleClick}>
          -
        </button>
        <button className="number" name="5" onClick={handleClick}>
          5
        </button>
        <button className="function" name="4" onClick={handleClick}>
          4
        </button>
        <button className="number" name="+" onClick={handleClick}>
          +
        </button>
        <button className="number" name="3" onClick={handleClick}>
          3
        </button>
        <button className="number" name="2" onClick={handleClick}>
          2
        </button>
        <button className="function" name="." onClick={handleClick}>
          .
        </button>
        <button className="number zero" name="1" onClick={handleClick}>
          1
        </button>
        <button className="number" name="0" onClick={handleClick}>
          0
        </button>

        <button className="function equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
