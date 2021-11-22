//controleren of een getal groot is
const getal = function (nummer){
if (getal > 100) {
    return "waar";
}
    return "niet waar";
};
const result = getal (20);
console.log(result);



//uitmijter bij een club
const myAge = 20;
const totalAmount = 95;
   const sum = totalAmount + 1;

if (myAge >= 18) {
    console.log("kom binnen");
} else {
    console.log("dit is een club voor volwassenen");
}

if (sum>100) {
    console.log("het is nu te druk, kom later terug");
} else {
    console.log("kom binnen");
};

// het gemiddelde berekenen
const add = function(number1, number2, number3, number4, number5){
    const sum = number1 + number2 + number3 + number4 + number5;
    const average = sum / 5;
    return average;
    };

    const result2 = add(2, 6, 4, 3, 5);
    console.log(result2);
