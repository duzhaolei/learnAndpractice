"use strict";
/**
 * ES6语法中变量声明
 * 在ES6的语法中变量的作用域是块级作用域，不会出现变量提升的情况
 * let声明的变量可修改
 * const声明的变量是常量不可修改
 *  */
// class f {};
// let a = 25;
// alert(a)


// es6可以对数组和对象进行解构，在对对象解构时需要注意，解构时声明的属性名，需要与解构的对象的属性名一致；
const s = ['🍎', '🍌', '🍊']
const [one, two, three] = s
console.log(one)

function test() {
    return {
        a: 'name',
        b: 'home'
    }
}
const result = test()
const { c, d } = result; //函数对象在es6中解构时，属性名需要一一对应
console.log(c); // undefined
const { a, b } = result;
console.log(a);

// 在es6语法中一字符串拼接时可以使用 `` 这个符号进行智能拼接
const e = 'hello';
const f = 'word';
const q = `${e} ${f}`;
console.log(q.startsWith(''));
console.log(q.endsWith(''));
console.log(q.includes(''));
const w = test2 `foor ${e} ${f} bar`

function test2(str, ...values) {
    console.log(str)
    console.log(values);
}

// 数组快速拆分默认单字节拆分；
const g = '😄🙂😂😅';
const arr = Array.from(g);
const k = 'k'
console.log(arr);
const arr2 = ['🌹', '🎄', ...arr] //数组拼接时可以直接拼接
console.log(arr2);
console.log([...arr, ...arr2]);
const obj = {
    [k + 1]: 1, // 对象的属性名可以直接使用[k+1]这种方式来定义；
    g,
    arr,
    aa() {
        console.log('🐧')
    }
}
console.log(obj);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
const eat = {
    getEat() {
        return '🍖';
    }
}
const drink = {
    getDrink() {
        return '🍺';
    }
}
const sunday = Object.create(eat); // 原型链创建方法
console.log(sunday.getEat());
console.log(Object.getPrototypeOf(sunday));
Object.setPrototypeOf(sunday, drink);
console.log(Object.getPrototypeOf(sunday));
console.log(sunday.getDrink());
let moneday = {
    __proto__: eat
}
console.log(moneday.getEat());
moneday.__proto__ = drink;
console.log(moneday.getDrink());
let thurday = {
    __proto__: drink,
    getDrink() {
        return super.getDrink() + '🍷';
    }
}
console.log(thurday.getDrink());
const fn = function ss() {}
console.log(fn.name)

const arr3 = [1, 2, 3].map(index => index * 3)
console.log(arr3)

window.dd = 30;
const x = {
    dd: 40,
    p: function() {
        const qq = {
            dd: 50,
            test: () => {
                console.log(this.dd);
            }
        }
        qq.test();
    }
}
const m = {
    dd: 10,
    p: () => {
        console.log(this.dd)
    }
}
x.p();
m.p();

function newtest(a = 'default', { option = true } = {}) { // ES6中函数传值可直接在设置传值时直接定义默认值，无需在函数中再定义默认值；
    console.log('newtest--' + a);
    console.log('newtest--' + option);
}
newtest()
newtest(50, { option: 233 });

function test3(...results) { //ES6中可以使用...results来获取所有接收的函数传入的值；
    console.log(results);
}
test3(20, { option: 1111 });

let myName = function*() {
    yield '🍦';
    yield '🍞';
};
const dzl = myName();
console.log(dzl.next());
console.log(dzl.next());
console.log(dzl.next());


const arr4 = ['🍌', '🍊', '🌰'];
const oneobj = {
    a: '🍦',
    b: '🍔',
    c: '三明治'
}
for (let v of arr4) {
    console.log(v)
}
for (let i in arr4) {
    console.log(i)
}
for (let v of oneobj) {
    console.log(v) // oneobj is not iterable
}