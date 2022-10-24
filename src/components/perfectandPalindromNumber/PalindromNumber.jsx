import React from 'react'

const PalindromNumber = ({numberOne ,numberTwo}) => {

  const sayi1 = Number(numberOne);
  const sayi2 = Number(numberTwo);

  // // palindrom number
  const palindromNumber = (sayi1, sayi2) => {
    console.log(sayi1, sayi2);
    var arr1 = [];
    for (let i = sayi1; i <= sayi2; i++) {
      if (String(i) === String(i).split("").reverse().join("")) {
        arr1.push(i);
      }
    }

    return arr1;
  };

  let pal = palindromNumber(sayi1, sayi2);
  console.log(pal);


  return (
    <div className="d-flex justify-content-center gap-5">
              <div className="map">
          <h5> Palindrom Number</h5>
          <div className=" show">
            {pal.map((item) => {
              console.log(item);
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
     
  )
}

export default PalindromNumber;