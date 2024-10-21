"use strict";
// Create a function for the estimate cost button
function estimateCost() {
  let tollTag = document.getElementById("tollTag");
  let gps = document.getElementById("gps");
  let roadside = document.getElementById("roadside");

  let numberOfDaysInput = document.getElementById("NumberofDaysInput");
  const basicCarRental = document.getElementById("basicCarRental");
  const optionField = document.getElementById("Options");
  const under25Surcharge = document.getElementById("under25Surcharge");
  const totalDue = document.getElementById("TotalDue");

  let Under25Yes = document.getElementById("Under25Yes");

  let days = Number("NumberOfDaysInput.value");

  const baseRate = 29.99;
  const tollRate = 3.95;
  const gpsRate = 2.95;
  const roadsideRate = 2.95;
  let under25Surchargeamt = 1.3;

  let rentalAmount = baseRate * days;
  let optionAmount = 0;
  let under25Age = 0;

  if (tollTag.checked) {
    let sum = tollRate * days;
    optionAmount = optionAmount + sum;
  }

  if (gps.checked) {
    let sum = gpsRate * days;
    optionAmount = optionAmount + sum;
    // console.log(sum)
    // amountDue.value = sum;
  }

  if (roadside.checked) {
    let sum = roadsideRate * days;
    optionAmount = optionAmount + sum;
  }


  if(Under25Yes.checked){
    let under25Amount = baseRate * under25Surchargeamt;
    under25Age = under25Amount;
   
  }


  let totalAmount = rentalAmount + optionAmount + under25Age

 totalDue.value = Number(totalAmount.toFixed(2)); //Shows the total amount on the amountDue field called on line 54 in HTML & line 20 in JavaScript(JS)
  console.log(totalDue);
  
  basicCarRental.value = rentalAmount.toFixed(2); //Shows baseRate times the days in the input basePay field/
  console.log(basicCarRental);

  optionField.value = Number(optionAmount.toFixed(2)); //Show the options checked amount total in the options field on line 47 in HTML and line 22 in JavaScript(JS)
  console.log(optionField);

  under25Surcharge.value = Number(under25Age.toFixed(2));
  console.log(under25Surcharge);


}
