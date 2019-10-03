const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
const name = {
    name1: 'Hoang Nam',
    name2: 'Hoang 2',
};
const dsLop = {
    ...name,
    name3: 'Hoang 3',
    name4: 'Hoang4',
}

console.log(dsLop);
console.log(name);
console.log(array1);
console.log(array2);