#### 数据类型
###### 值类型
1. Boolean
2. Number
3. String
4. null
5. undefined
6. Symbol
###### Object 对象类型
1. Array
2. RegExp
3. Date
4. Math
5. Function

可以是使用typeof来判断数据类型，操作符返回一个字符串，但并非所有结果都符合预期；
#### 函数
函数即一个可以被外部代码调用（或者函数本身递归调用）的子程序；
###### 定义函数； 
1. 函数声明
2. 函数表达式
3. Function构造函数
4. 箭头函数
```
function fn(){} //声明函数

var fn = function(){} //函数表达式

var fn = new Function(arg1,arg2,...,argN,funcBody) //Function构造函数

var fn = (param)=>{} //箭头函数
```
##### arguments
1. arguments：一个包含了传递给当前执行函数参数的类似于数组的对象；
2. arguments.length：传给函数的参数的数量
```
function foo(){
    return arguments;
}

foo(1,2,3); 
// Arguments[3];
// {'0':1,'1':2,'2':3}
```

##### rest
相当于对arguments的优化
```
function foo(...args){
    return ...args;
}
foo(1,2,3);
// Array[3];
// [1,2,3]
```

#### 构造函数
构造函数和普通函数有区别，使用new关键字调用就是构造函数，使用构造函数可以实例化一个对象；默认返回类的实例即对象实例；

构造函数返回值：
1. 没有返回值
2. 简单数据类型
3. 对象类型

**1和2均返回的是类的实例，即对象实例；3返回的是实际的对象类型；**
#### prototype
1. 每个函数都有一个prototype的对象属性，对象内有一个constructor属性，默认指向函数本身；
2. 每个对象都有一个 _proto_ 的属性，属性指向其父类型的prototype


#### 作用域
- 作用域由大到小
1. 程序级
2. 文件级
3. 函数级
4. 块级
- JavaScript作用域
1. 全局作用域
2. 函数作用域
3. 块级作用域(ES6)
###### 变量与函数声明提前
在变量与函数同时存在时，先声明函数，若有该函数的调用则先调用该函数，而后在开始声明变量；
```
var test = 'aaa'
function foo(){
    alert(test);// undefinded
    var test = 'bbb';
    alert(test);// bbb
}
foo();
alert(test); // aaa
```
上面代码的执行顺序是：
1. 声明函数foo
2. 调用函数foo
3. 声明变量
4. alert(test)
5. test变量赋值为bbb
6. alert(test);

##### call和apply的区别
call和apply唯一的区别是传递参数的方式不同；
```
fn.call(context,arg1,arg2,...,argn);
fn.apply(context,[arg1,arg2,...,argn]);
```
call、apply、bind三者都可以改变被调用函数中this指向的对象。
call的this指向传入的第一个参数context，如果传入为null、undefinded那么this指向Window； 
- 闭包会存储父作用域的变量值
- 所有声明的匿名函数都是一个新的函数;

##### JS模块化(只是一个概念/规范)
- commonjs：运用场景node.js
- AMD：Asynchronous Module Definition--异步模块定义，前端运用，实例requirejs，AMD是在requirejs推广过程中出现的概念
- CMD：通用模块定义，前端运用，实例seajs，CMD是seajs推广过程中出现的概念

把js文件用script标签引入会影响页面额响应
AMDjs封装在调用执行的时候不会影响页面的响应，是代码看起来更简洁，管理模块化之间的依赖性，便于代码的编写和维护require()用于加载模块