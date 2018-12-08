## ES6中变量声明和作用域
**在使用ES6语法时需要开启严格模式即在js文件开头加上--"use strict";**

在ES6语法中不再有变量提升的情况,所有变量的作用域是块级作用域;
#### const和let的区别
- const声明的变量是常量，一经声明变无法修改；
- let声明的变量可修改；
#### 解构
- 数组的解构
```
"use strict";
const s = ['🍎', '🍌', '🍊']
const [one, two, three] = s
console.log(one) //🍎
```
- 对象的解构
```
"use strict";
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
console.log(a); // name
```
#### 字符串的拼接
在es6语法中字符串的拼接不在使用相加的方式进行拼接而是使用 `` 这个符号直接在内进行拼接
```
"use strict";
const e = 'hello';
const f = 'word';
const q = `${e} ${f}`;
console.log(p); // hello word;

console.log(q.startsWith('')); // 判断字符串是否以某个字符开始
console.log(q.endsWith('')); // 判断字符串是否以某个字符结束
console.log(q.includes('')); // 判断字符串是否以某个字符结束

//需要函数处理的字符串
function test2(str, ...values) {
    console.log(str)
    console.log(values);
}

const w = test2 `foor ${e} ${f} bar` 
// ['foor ',' ',' bar']
// ['hello','word']
``` 

#### 数组拆分

```
"use strict";
const g = '😄🙂😂😅';
const arr = Array.from(g);//拆分方式默认单字节拆分
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
```

#### 原型链

```
"use strict";
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
const sunday = Object.create(eat); // 原型链上添加方法
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
```
- es6中函数传值

```
"use strict";
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
```
- 数组的两种遍历方法
```
"use strict";
const arr4 = ['🍌', '🍊', '🌰'];
const oneobj = {
    a: '🍦',
    b: '🍔',
    c: '三明治'
}
for (let v of arr4) {
    console.log(v) //数组的每个值
}
for (let i in arr4) {
    console.log(i) //遍历的下标
}
```

#### ES6中的类与类的继承
```
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
console.log(xiaowang.age) // 30
console.log(xiaowang.tell()) // 年龄是30

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
console.log(newname.age) // 50
console.log(newname.tell()) // 年龄是50  hello
newname.menu = '😡';
console.log(newname.menu) // 😡;
```

#### 数组操作
ES6中新增了新的数据结构Set，它类似于数组，但是成员都是唯一的，没有重复的值；而Set本身是一个构造函数，可以用来生成Set数据结构；

##### set实例的属性和方法
1. **属性**
- Set.prototype.constructor：构造函数，默认就是Set函数。
- Set.prototype.size：返回Set实例的成员总数。
2. **方法**
- add(value)：添加某个值，返回set结构本身；
- delete(value)：删除某个值，返回布尔值，表示删除是否成功；
- has(value)：返回一个布尔值，表示该值是否为Set的成员；
- clear()：清除所有成员，没有返回值。

```
let foodArr = new Set('🍞🍔🍦🌭'); // set()的变量中每个元素唯一，不可重复
foodArr.add('🍎')
foodArr.add('🍎');//相同的重复添加不生效
foodArr.delete('🍞');//删除数组中的某个元素
console.log(foodArr)
// 可以array.has()函数来判断数组中是否有某个函数；
console.log(foodArr.has('🍎')); //true
console.log(foodArr.has('🍊')); //false
```
通过set新建的数据结构，虽然与数组类似，但是在获取数据长度时不能用length，需要用size来获取长度；

利用set实例中的成员唯一性，可用来对数组进行快速去重；
```
//数组快速去重；
const numArr = [2, 4, 54, 33, 98, 11, 2, 4];
const newResult = [...new Set(numArr)]
console.log(newResult);
```

#### Generator函数
Generator函数是ES6提供的一中异步编程解决方法；语法上Generator函数是一个状态机，封装了多个内部状态；执行Generator函数还是一个遍历器对象生成函数，返回的遍历器对象，可以依次遍历Generator函数内部的每个状态；

形式上Generator函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有个星号；二是，函数体内部使用yield表达式，定义不同的状态（yield在英语里的意思是“产出”）;
```
function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}
var hw = helloWorldGenerator()
```
Generator函数的调用与普通函数的调用方式一样都是在函数名后边加一个圆括号,不同的是Generator函数调用后并不立即执行,同时返回的也不是函数运行结果,而是一个指向内部状态的指针对象;

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行;
```
console.log(hw.next());// { value: 'hello', done: false }
console.log(hw.next());// { value: 'world', done: false }
console.log(hw.next());// { value: 'ending', done: true }
console.log(hw.next());// { value: undefined, done: true }
```
done的值用来表示遍历状态,如果weifalse表示遍历未完成,还可以继续执行,如果为true表示遍历完成;
###### yield
1. Generator函数内也可以不使用yield这样Generator函数就变成了一个普通的暂缓函数,在next()调用时在执行;
2. yield只能用在Generator函数中,用在其他地方会报错;
3. yield与return一样都会返回紧跟在语句后面的那个表达式.区别在于每次遇到yield函数都会暂停执行,下一次在从该位置继续执行,而return语句不具备位置记忆功能,同时一个函数里,只能执行一次return语句,但是可以执行多个yield表单式(Generator函数中);
4. yield表达式如果用在另一个表达式之中，必须放在圆括号里面;yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
```
function* demo() {
  console.log('Hello' + yield); // SyntaxError
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}
```
###### next方法的参数
yield表达式本身没有返回值,或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
```
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
```
上面代码先定义了一个可以无限运行的 Generator 函数f，如果next方法没有参数，每次运行到yield表达式，变量reset的值总是undefined。当next方法带一个参数true时，变量reset就被重置为这个参数（即true），因此i会等于-1，下一轮循环就会从-1开始递增。

这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
```
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```