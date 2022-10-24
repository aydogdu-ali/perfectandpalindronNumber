import React from "react";
import { useState } from "react";
import PalindromNumber from "../perfectandPalindromNumber/PalindromNumber";
import Perfect from "../perfectandPalindromNumber/Perfect";

import "./Button.scss";

const Button = ({ numberOne, numberTwo }) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  console.log(numberOne);
  console.log(numberTwo);

  return (
    <div>
      <div className="button">
        <button
          className="btn btn-success"
          onClick={() => setVisible(!visible)}
        >
          Palindrome Number
        </button>
        <button className="btn btn-success" onClick={() => setShow(!show)}>
          Perfect Number
        </button>
      </div>

      <div>
        {numberOne && numberTwo && show&& (
          <div>
            <Perfect numberOne={numberOne} numberTwo={numberTwo} />
          </div>
        )}
      </div>
      <div>
        {numberOne && numberTwo && visible&& (
          <div>
            <PalindromNumber numberOne={numberOne} numberTwo={numberTwo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Button;
