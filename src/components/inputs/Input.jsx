import "./Input.scss";
import Button from "../buttons/Button";

import { useState } from "react";

const Input = () => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  const handlevalue = (e) => {
    e.preventDefault();
    setNumberOne(e.target.value);
    console.log(numberOne);
   

  };


  const handlevalue1 = (e) => {
    e.preventDefault();
    console.log(numberTwo);
    setNumberTwo(e.target.value);
  
  };

 

  return (
    <div>
      <h4 className="title mt-3"> Please Enter a number between 1 and 1000</h4>
      <form className=" form " >
        <div className="sperad">
          <input
            className="form-control sperad"
            type="text"
            id="quantity"
            name="quantity"
            value={numberOne}
            onChange={handlevalue}
            min={1}
            max={1000}
          />
        </div>
        <div className="sperad">
          <input
            className="form-control "
            type="text"
            id="quantity"
            name="quantity"
            value={numberTwo}
            onChange={handlevalue1}
            min={1}
            max={1000}
          />
        </div>
      </form>
      <div>
        <Button numberOne={numberOne} numberTwo={numberTwo} />
      </div>
    </div>
  );
};

export default Input;
