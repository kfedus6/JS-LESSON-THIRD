//ДЗ
/*
function acc() {
   for (let key of account) {
      console.log(key);
   }
};

let bank = function () {
   let m = { sum: 0 };
   let depositOne = { deposit: 0 };
   return {
      credit: function () {
         money = parseInt(prompt("Взять кредит на суму:"));
         m.sum += money;
         account.push(m);
      },
      add: function () {
         money = parseInt(prompt("Пополнить карточку:"));
         m.sum += money;
      },
      subtract: function () {
         money = parseInt(prompt("Снять с карточки:"));
         m.sum -= money;
      },
      dep: function () {
         initial = parseInt(prompt("денги:"));
         interest = parseInt(prompt("проценти:")) / 100;
         years = parseInt(prompt("Год:"));
         d = Math.round(initial * (1 + interest * years));
         depositOne.deposit += d;
         account.push(depositOne);
      },
      result: function () {
         console.log(m.sum)
      }
   }
}();

let account = [""];
let exit;
let menu;
do {
   menu = parseInt(prompt("1-Создать аккаунт; 2-Посмотреть аккаунт;\n 3-Взять кредит; 4-Положить депозит;\n 5-Сумма на карточен; 6-Пополнить карточку;\n 7-Снять с карточки; 8-Удалить аккаунт;\n 9-Выйти"));
   switch (menu) {
      case 1: {
         name = prompt("Имя");
         age = parseInt(prompt("Возраст"));
         account[account.length] = { Name: name, Age: age };
         break;
      }
      case 2: {
         acc();
         break;
      }
      case 3: {
         bank.credit();
         break;
      }
      case 4: {
         bank.dep();
         break;
      }
      case 5: {
         bank.result();
         break;
      }
      case 6: {
         bank.add();
         break;
      }
      case 7: {
         bank.subtract();
         break;
      }
      case 8: {
         account.splice(0, 10);
         console.log(account);
         break;
      }
      case 9: {
         exit = true;
         console.log("ви вийшли")
         break;
      }
      default: {
         console.log("error")
         break;
      }
   }
} while (!exit);
*/
/*
function change(x) {
   x *= 2;
   console.log("change in func: " + x);
}

let x = 10;

console.log(x);
change(x)
console.log(x)
*/
/*
let artem = {
   name: "artem"
};

function change(user) {
   user.name = "kirill";
};

console.log(artem.name);
change(artem.name)
console.log(artem.name);


display();

function display() {
   console.log("display");
}
*/
/*
display();

let display = function () {
   console.log("display");
}
*/


/*
let display = () => {
   console.log("hi");
}

display();
*/
/*
let add = (a) => {
   return () => {
      console.log(a * 2);
   }
}

let x = add(4);
x();
*/
/*
let enter = (x1, x2) => {
   let x = () => {
      console.log(x1 + x2);
   }
   x();
}

enter(4, 2);*/
/*
let user = {
   name: "Egor",
   display: () => {
      console.log(user.name);
   }
};

user.display();
*/
/*
let user_two = {};
user_two.name = "Tom";
user_two.age = 32;
user_two.display = () => {
   console.log(user_two.name);
}

user_two.display();
*/
/*
let user_tree = {};
user_tree["name"] = "Anton";
user_tree["age"] = 41;
user_tree.display = () => {
   console.log(user_tree.name + " " + user_tree.age);
}

user_tree.display();
*/
/*
let user_fo = {
   "name": "slavik",
   "age": 54,
   "display": () => {
      console.log(user_fo["name"]);
   }
};

user_fo.display();
*/
/*
let x = (n, a) => {
   return {
      name: n,
      age: a,
   }
}

let n = prompt("neme");
let a = parseInt(prompt("age"));
let user = x(n, a);
let age = (user) => {
   if (user.age % 2 == 0) {
      delete user.age;
   }
}

console.log(user);
age(user);
console.log(user);
*/
/*
let get = () => {
   return 14;
}

const user = { name: "egor", age: get() };
console.log(user);
*/

//ДЗ
/*
let infoCar = (propPrice, propMotor, propYear) => {
   return {
      price: propPrice,
      motor: propMotor,
      year: propYear,
   }
}
let car = infoCar(parseInt(prompt("цина автомобиля в євро:")), parseFloat(prompt("Об'єм двигуна в см3:")), parseInt(prompt("год автомобиля")));

let pensionFund = (sumFund) => {
   if (car.price <= 12500) {
      sumFund = car.price * 0.03;
      car["Пенсійний фонд"] = sumFund;
   } else if (12500 >= car.price <= 22000) {
      sumFund = car.price * 0.04;
      car["Пенсійний фонд"] = sumFund;
   } else if (car.price >= 22000) {
      sumFund = car.price * 0.05
      car["Пенсійний фонд"] = sumFund;
   } else {
      console.log("error");
   }
}

let excise = (sumExcise) => {
   if (car.motor <= 3.0) {
      sumExcise = 50 * car.motor * (2021 - car.year);
      car["Акциз"] = sumExcise;
   } else if (car.motor >= 3.0) {
      sumExcise = 100 * car.motor * (2021 - car.year);
      car["Акциз"] = sumExcise;
   } else {
      console.log("error");
   }
}

let toll = (sumToll) => {
   sumToll = car.price * 0.1;
   car["Мито"] = sumToll;
}

let tax = (sumTax) => {
   sumTax = car.price + car["Акциз"] + car["Мито"];
   sumTax *= 0.2;
   car["ПДВ"] = sumTax;
}

let priceCar = (result) => {
   result = car["Акциз"] + car["Мито"] + car["ПДВ"] + car["Пенсійний фонд"];
   car["Сума розтаможки авто"] = result;
}

let priceTwo = (resultTwo) => {
   resultTwo = car.price + car["Сума розтаможки авто"];
   car["Ціна з розмитненням"] = resultTwo;
}

let listCar = () => {
   for (let key in car) {
      console.log(`${key}: ${car[key]}`);
   }
}
pensionFund();
excise();
toll();
tax();
priceCar();
priceTwo();
listCar();
console.log(car);


console.log("1 - добавить авто")
console.log("2 - посмотреть стоимость расстаможки")
console.log("3 - выйти")
let exit = false;
while (!exit) {
   let menu = parseInt(prompt("Enter: "))
   switch (menu) {
      case 1: {
         console.log(1);
         break;
      }
      case 2: {
         console.log(2);
         break;
      }
      case 3: {
         console.log(3);
         exit = true;
         break;
      }
   }
}

*/

/*
let func = () => {
   return false;
}

const user = { name: "egor", age: 12 };
console.log(user);
user.name = "kirill";
user.age = 21;
user.is_marry = func();

console.log(user);
*/


//majority

/*

let num = parseInt(prompt())

let is_majority = (num) => {
   if (num < 18 && num > 0) {
      return false;
   } else if (num >= 18 && num > 0) {
      return true;
   }
   else {
      num = parseInt(prompt());
      is_majority(num);
   }

}
let user = { name: "kolya", };
user.majority = is_majority(num);
console.log(user);

*/

//is_majoryty(18) // true
//is_majoryty(16) // false

/*
const userData = [["name", "Kirill"], ["age", 32], ["student", false], ["display", () => {
   console.log("hello");
}]];

const user = Object.fromEntries(userData);
console.log(user.display());
*/

/*
let user = {
   name: "egor",
   age: 21
}

for (let key in user) {
   console.log(key);
}
*/

const country = {
   name: "Ukraine",
   language: "Украинский",
   capital: {
      name: "Киев",
      population: 1000000,
      year: 1200,
   },
   cities: [
      { name: "Львов", population: 1200000 },
      { name: "Днепр", population: 900000 },
      { name: "Карпаты", population: 1100000 },
   ]
}


console.log(country.capital.name);
console.log(country.capital["population"]);
console.log(country["cities"][1]["name"]);

for (let key of country.cities) {
   document.write(`<div>${key.name}:${key.population}</div>`);
}

/*
for (let i = 0; i < country.cities.length; i++) {
   console.log(country.cities[i].name);
}
*/