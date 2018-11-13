"use strict";
class person {
    constructor(age) {
        this.age = age
    }
    tell() {
        console.log(`年龄是${this.age}`);
    }
}
const xiaowang = new person(30);
console.log(xiaowang.age)
console.log(xiaowang.tell())

class man extends person {
    constructor(age) {
        super(age);
        this.arr = [];
    }
    set menu(data) {
        this.arr.push(data)
    }
    get menu() {
        return this.arr
    }
    tell() {
        super.tell();
        console.log('hello')
    }
}
const newname = new man(50);
console.log(newname.age)
console.log(newname.tell())
newname.menu = '😡';
console.log(newname.menu)