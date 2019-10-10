const numbers = [1, 2, 3, 4, 5];
[num1, , num2] = numbers;
console.log(num1 + " : " + num2);

const person = {
  name: "Teo",
  age: 12
};

const { name, age } = person;
console.log(name + " - " + age);

const person2 = person;
person.name = "Ti";
person.age = 10; /* trong 1 số trường hợp const sẽ k thay đổi giá trị đc(
                    vd:const a = 10; a = 20; sẽ báo lỗi ) */
// console.log(person.name + " - " + person.age);
console.log(person);
console.log(person2);
