// let js = 'amazing';
// console.log(40 + 8+ 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let CurrentJob = 'Retailer';

// let job1 = 'programmer';
// let job2 = 'retailer';

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jason');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);


const country = "United States";
const continent = "North America";
let population = 330000000;
const isIsland = false;
const language = "English";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//if/else activity
// if(population > 33000000){
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is below average.`);
// }

console.log(language);
console.log(country);
console.log(continent);
console.log(population);


// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);

//// Old way of putting a string together
// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

//Template literal way of putting a string together
const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1992;

// lastName = "Viox";
// console.log(lastName);

// Math operators
// const now = 2037;
// const ageJason = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJason, ageSarah);

// console.log(ageJason * 2, ageJason / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jason";
// const lastName = "Viox";
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x + x * 4 = 100
// x++; // x = x + 1 = 101
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJason > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2020);

// const now = 2037;
// const ageJason = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2020);

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10,
// console.log(x, y);

// const averageAge = (ageJason + ageSarah) / 2
// console.log(ageJason, ageSarah, averageAge);

// //Coding Challenge 1
// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;
// const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
// const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);
// const markHigherBMI1 = markBMI1 > johnBMI1;
// console.log(markBMI1, johnBMI1, markHigherBMI1);

// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;
// const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
// const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markBMI2, johnBMI2, markHigherBMI2);
// console.log(markBMI1 > johnBMI1);
// console.log(markBMI2 > johnBMI2);

// const firstName = 'Jason';
// const job = 'Retailer';
// const birthYear = 1986;
// const year = 2037;

// const jason = "I'm " + firstName + ', a ' + (year - birthYear) + 'year old ' + job + '!';
// console.log(jason);

// //Template literals
// const jasonNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
// console.log(jasonNew)
// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

//if/else statements
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//coding challenge 2

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);
// const markHigherBMI1 = markBMI1 > johnBMI1;
// console.log(markBMI1, johnBMI1, markHigherBMI1);

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI is higher than John's.`);
} else {
    console.log(`John's BMI is higher than Mark's.`);
}

if (markBMI1 > johnBMI1) {
console.log (`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
console.log (`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}
// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;
// const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
// const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markBMI2, johnBMI2, markHigherBMI2);
// console.log(markBMI1 > johnBMI1);
// console.log(markBMI2 > johnBMI2);