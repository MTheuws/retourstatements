//controleren of een getal groot is
const getalIsGroter = function (getal) {
if (getal > 100) {
    return "waar";
} else {
    return "niet waar";
}
};

console.log(getalIsGroter(110));
console.log(getalIsGroter(40));
console.log(getalIsGroter(1000));

//uitmijter bij een club
const uitsmijterReactie = function(maxBezoekersAantal, huidigeBezoekersAantal, leeftijdBezoeker){

if (leeftijdBezoeker < 18) return "dit is een club voor volwassenen";
if (huidigeBezoekersAantal >= maxBezoekersAantal) return "het is nu te druk, kom later terug";
return "kom binnen";
};

console.log(uitsmijterReactie(100, 85, 17));
console.log(uitsmijterReactie(100, 115, 20));
console.log(uitsmijterReactie(100, 85, 20));

// het gemiddelde berekenen
const berekenGemiddelde = function(number1, number2, number3, number4, number5){
    const sum = number1 + number2 + number3 + number4 + number5;
    const average = sum / 5;
    return average;
    };

    console.log(berekenGemiddelde(2, 6, 4, 3, 5));
    console.log(berekenGemiddelde(12, 16, 14, 3, 5));
