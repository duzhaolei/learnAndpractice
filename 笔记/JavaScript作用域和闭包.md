js是函数级作用域， 在内部的变量，内部都能访问，外部不能访问内部的，内部能访问外部的；
```
test() // undefind
var j = 100;
function test(){
    console.log(j)
}
test() // 100
```
```
var j = 100;
~function test(){
    console.log(j)
}();
// 100
```
'~'的作用是将他后面的函数转换为一个表达式执行
```
var j = 100
function test(){
    alert(j)
    var j;
}
test() // undefind
```
```
var j = 100
function test(){
    var j;
    alert(j)
    j = 10
}
test() // undefind
```
```
var j = 100
function test(){
    var j;
    j = 10
    alert(j)
}
test() // 10
```
闭包，即拿到本不该属于自己的东西

