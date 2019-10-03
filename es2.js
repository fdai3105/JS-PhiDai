class SinhVien {
    constructor () {
        this.name = 'Nguyen Teo';
    }

    printSV = () => {
        console.log(this.name);
    }
}

const sinhVien = new SinhVien();
sinhVien.printSV();
// -------------------------------------------
class Human {
    species = 'Human';
}
class Person extends Human {
    name = 'Long Tran';
    printName = () => {
        console.log(this.name);
    }
}
const person = new Person();
person.printName();