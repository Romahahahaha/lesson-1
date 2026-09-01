// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber,secondNumber,thirdNumber) {
    // if ((firstNumber > secondNumber && firstNumber > thirdNumber) && (secondNumber > thirdNumber)) {
    //     return true;
    // } else {
    //     return false;
    // }

let largest = firstNumber;

     if (secondNumber > largest) {
        largest = secondNumber;
     } if (thirdNumber > largest) {
        largest = thirdNumber;
     }

     return largest;

}
