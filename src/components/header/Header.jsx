import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <h1 className="header_title">Palindromic and Perfect Numbers Lists</h1>
      <div className="header">
        <div className="header palindromic">
          <div>
            <h3>What is the palindromic numbers?</h3>
            <p>
              A palindromic number is a number (such as 16461) that remains the
              same when its digits are reversed. The term palindromic is derived
              from palindrome, which refers to a word whose spelling is
              unchanged when its letters are reversed. Some palindromic numbers
              are: 11, 22, 33, 44, 55, 66, 99, 101, 111, 121, 131, 181, 191, 202
            </p>
          </div>
        </div>

        <div className="header perfect">
          <div>
            <h3>What is perfect numbers?</h3>
            <p>
              In number theory, a perfect number is a positive integer that is
              equal to the sum of its positive divisors, excluding the number
              itself. For instance, 6 is a perfect number because has divisors
              1, 2 and 3, and 1 + 2 + 3 = 6, AND 28 is a perfect number because
              (1 + 2 + 4 + 7 + 14) = 28
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
