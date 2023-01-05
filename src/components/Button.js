import React, { useState } from "react";

export default function Button(props) {
  const handleClick = (type, value) => {
    var outputPrevious = document.querySelector(".output__previous");
    var outputCurrent = document.querySelector(".output__current");

    var entry = 0;
    switch (type) {
      case "number": {
        entry = value;
        outputCurrent.textContent = entry;

        break;
      }
      case "operation": {
        outputPrevious.textContent = `${outputCurrent.textContent} ${value}`;
        break;
      }
      case "function": {
        if (value === "=") {
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <button
      className={props.cell === 1 ? "cell" : `cell-${props.cell}`}
      data-type={props.type}
      onClick={() => handleClick(props.type, props.value)}>
      {props.value}
    </button>
  );
}
