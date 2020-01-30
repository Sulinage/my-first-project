const wrapCounter = function() {
    let index = 0;

    return function() {
        return ++index;
    }
}

const counter = wrapCounter();

for (let i = 0; i < 50;) {
    i = counter();
    console.log(i);
}




let number = 1;

if (number > 0) {
    console.log('hello!');
} else if (number == 5) {
    console.log('bye!');
} else {
    console.log('I want to sleep!');
}



switch (number) {
    case 10:
        console.log('hello!');
        break;
    case 5:
        console.log('bye!');
        break;
    default: 
        console.log('I want to sleep!');
        break;
}





const count = function(array, number) {
    return array.length - number;
}

let myArray = [1, 3, 5];
let myNumber = 5;

let result = count(myArray, myNumber);

console.log(result);


let str = "#";
while (str.length <= 7) {
    console.log(str + " ");
    str += "#";
}
