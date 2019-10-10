const numbers = [1, 2, 3, 4, 5, 6, 6];
const num1s = numbers.map(n => {
  return n * 2;
});

const num2s = numbers.filter(
  n => n === 3
);                              /* ==== : so sánh dữ liệu 
                                            và kiểu dữ liệu */
const locSanPham= (...dssanpham) => {
    return dssanpham.filter(n => n % 2 == 0);
}

console.log(locSanPham(1,3,5,1,5,2,1));
console.log(locSanPham(3,1,4,5,6,7,4,2,3,5,2,6,5,6,7,7,6,5,423,2));
// console.log(num2s);
// console.log(numbers);
// console.log(num1s);
