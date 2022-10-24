import "./Textarea";

import React from "react";
import PalindromNumber from "../perfectandPalindromNumber/PalindromNumber";
import Perfect from "../perfectandPalindromNumber/Perfect";

const Textarea = ({ numberOne, numberTwo }) => {
  console.log(numberOne);
  console.log(numberTwo);

  return (
    <div className="d-flex justify-content-center gap-5">
      <div className="d-flex justify-content-center">
        <PalindromNumber numberOne={numberOne} numberTwo={numberTwo} />
      </div>

      <div className=" d-flex justify-content-center">
        <div className="map">
          <Perfect />
        </div>
      </div>
    </div>
  );
};

export default Textarea;
