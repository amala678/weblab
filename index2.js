function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
var num1=5;
var num2=6;
var num3=7;
console.log(maxOfThree(num1,num2,num3));