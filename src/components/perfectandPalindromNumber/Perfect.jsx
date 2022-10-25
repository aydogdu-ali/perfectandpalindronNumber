

import Return from "../return/Return";

const Perfect = ({numberOne ,numberTwo}) => {
  const sayi1 = Number(numberOne);
  const sayi2 = Number(numberTwo);


//perfect Number Fonsiyonu

const perfecNumber = (sayi1, sayi2) => {
  console.log(sayi1, sayi2);
  var arr = [];
  for (let i = sayi1; i <= sayi2; i++) {
    let toplam = 0;
    for (let j = 1; j < i; j++) {
      if (!(i % j)) {
        toplam += j;
      }
    }

    if (toplam === i) {
      arr.push(i);
    }
  }
 
  return arr;
};

let per = perfecNumber(sayi1, sayi2);
console.log(per);

if(per.length===0){
 return  <Return/>;
}
else { 
  return (
  <div className=" d-flex justify-content-center">
      <div  className="map">
      <h5> Perfect Number</h5>
        <div className="show">
          {per.map((item) => {
           console.log(item);
            return ( <p>{item} </p>  );
            
          })}
         
        </div>
      </div>
    </div>
)}
  
}

export default Perfect