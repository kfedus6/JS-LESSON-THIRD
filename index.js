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
}

function change(user) {
   user.name = "kirill";
}

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

let enter = (x1, x2) => {
   let x = () => {

   }
   x();
}


enter(4, 2);

*/

/*
let user = {
   name: "Egor",
   display: () => {
      console.log(user.name);
   }
};

user.display();


let user_two = {};
user_two.name = "Tom";
user_two.age = 32;
user_two.display = () => {
   console.log(user_two.name);
}

user_two.display();


let user_tree = {};
user_tree["name"] = "Anton";
user_tree["age"] = 41;
user_tree.display = () => {
   console.log(user_tree.name + " " + user_tree.age);
}

user_tree.display();


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