ES5.1的浏览器支持
- Opera 11.60
- Internet Explorer 9*
- Firefox 4
- Safari 5.1**
- Chrome 13

==IE9不支持严格模式，IE10才开始支持；Safari 5.1仍不支持Function.prototype.bind，现在已被Webkit所支持，手机中的浏览器多数已兼容ES 5；==

### ES 5.1的JSON格式
ES 5提供了一个全局的JSON对象，用来序列化（JSON.stringfy）和反序列化（JSON.parse）对象为JSON格式；对于老的浏览器，可以考虑使用Douglas Crockford的json.js；可以让旧的浏览器实现同样的功能。

#### JSON.parse(text[,reviver])
JSON.parse接受文本(JSON格式)并转换成一个ECMAScript值。该可选的reviver参数是带有key和value两个参数的函数，其作用结果，让过滤和转换返回值成为可能。
```
 let result = JSON.parse('{"a":1,"b":2}');
object

result.b
//"2"
```
如果我们想对数组进行其他操作我们可以使用reviver方法插入一个函数来对数组进行一些操作。如我们想确保解析的值是个整数：
```

let result = JSON.parse('{"a":"1","b":"2"}',function(key,value){
    if(typeof value == 'string'){
        return parseInt(value);
    }else{
        return value
    }
})

result.b
//2

```

#### JSON.stringfy(value[,replacer [, space]])
JSON.stringify允许使用者接受一个ECMAScript值然后转换成JSON格式的字符串。在其最简单的形式中，JSON.stringify接受一个值返回一个字符串。
```
>>> var mike = JSON.stringify({mike: "taylor"})
undefined

>> mike
'{"mike": "taylor"}'

>> typeof mike
"string"
```
如果我们需要改变值字符串化的方式，或是对我们选择的提供过滤，我们可以将其传给replacer函数。例如，我们想过滤出即将被字符串化的对象中值为13的属性：
```
var nums = {
  "first": 7,
  "second": 14,
  "third": 13
}

var luckyNums = JSON.stringify(nums, function(key, value){
  if (value == 13) {
    return undefined;
  } else {
    return value;
  }
});

>> luckyNums
'{"first": 7, "second": 14}'
```
如果replacer方法返回undefined，则键值对就不会包含在最终的JSON中。我们同样可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明作缩进的JSON字符串或字符串每个水平上的缩进空格数。如果参数是个超过10的数值。或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。
```
var luckyNums = JSON.stringify(nums, function(key, value) {
  if (value == 13) {
    return undefined;
  } else {
    return value;
  }
}, 2);

>> luckyNums
'{
  "first":7,
  "second":14
}'
```
### 数组新增操作方法
1. 两个获取索引的方法：indexOf()、lastindexOf()
2. 5个迭代方法：forEach()、map()、filter()、some()、every();
3. 2个归并方法：reduce()、reduceRight()

#### 索引方法
两个方法都接收两个参数，第一个是要查找的项，第二个参数是查找起点位置的索引，该参数可选填，如果不填或格式不正确，那么默认为0。两个方法都返回查找项在数组中的位置，如果没有找到那么则返回-1；两者的区别是一个是从前往后查，一个是从后往前查。==注：两个方法的第一个参数会与数组中的每一项采用全等对比，如果格式不正确，也会返回-1。==

#### 迭代方法
迭代方法包含some()、every()、filter()、map()和forEach()五个方法，这些方法都接收两个参数，第一个参数是函数，他接收三个参数，数组当前项的值、当前项在数组中的索引、数组对象本身。第二个参数是执行第一个函数参数的作用域对象，也就是上面说的函数中的this所指向的值。==注意：这几种方法都不会改变原数组。==

every()和some()方法有些类似，
- every()：该方法对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
- some()：该方法对数组中的每一项运行给定函数，如果该函数种有一项返回true，则返回true。下面两个例子我们可以更直观，理解这两个方法
```
var dataArray = [1,2,3,4,5,1,7]
var result = dataArray.every(function(item,index,array){
    return item > 5
})
console.log(result)
var result = dataArray.every(function(item,index,arrya){
    return item > 0 ;
})
console.log(result)

// 运行结果
false
true
```

```
var dataArray = [1,2,3,4,5,1,7]
var result = dataArray.some(function(item,index,array){
    return item > 5
})
console.log(result)

// 运行结果
true
```
###### some()
值得注意的是some()方法在数组任一项执行函数返回true之后，不在进行循环。
```
var dataArray = [1,5,2,4,6,9]
var result = dataArray.some(function(item,index,array){
    console.log(index);
    return item > 2
})
console.log('result ='+result)

// 运行结果
0
1
2
result = true
```
###### filter()
filter()：该方法对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。利用这个方法可对数组元素进行过滤筛选。
```
var dataArray = [1,7,5,7,1,3]
var result = dataArray.filter(function(item,index,array){
    return item > '3'
})
console.log(result)
var result = dataArray.filter(function(item,index,array){
    return item > 3
})
console.log(result)
[7,5,7]
[7,5,7]
```
###### grep()
从上述实例可以看出函数支持弱等于(==)，不是必须全等于( === );
在jquery中有个和filter()类似的方法grep()也用于数组元素的过滤筛选。
```
var dataArray = [1,3,7,5,7,1]
var result = $.grep(dataArray,function(item,index){
    return item > 3;
})
console.log(result)
[7,5,7]
```
==grep(array,function[,invert])方法还有一个特性，当invert缺省或是为false，和filter方法一样，正常过滤出符合条件的数组元素，当invert值为true，正好相反，他会过滤出函数返回值false的数组元素。==
```
var dataArray = [1,3,7,5,7,1]
var result = $.grep(dataArray,function(item,index){
    return item > 3;
})
console.log(result)
[1,3,1]
```
###### map()
该方法对数组中每一项运行函数，返回每个函数调用的结果组成的数组。
```
var dataArray = [1,3,7,5,7,1]
var result = dataArray.map(function(item,index,array){
    return item * 3;
})
console.log(result)
[3,9,21,15,21,3]
```
返回数组中某个属性组成的数组
```
var flightArray=[
    {
        "airway":"HU",
        "airwaysCn":"海南航空"
    },
    {
        "airway":"TH",
        "airwaysCn":"深圳航空"
    },
    {
        "airway":"MK",
        "airwaysCn":"北京航空"
    }
]
var result = flightArray.map(function(item,index,array){
    return item.airwaysCn
})
console.log(result)
["海南航空","深圳航空","北京航空"]
```

###### forEach()
该方法对数组中每一项运行给定函数。这个方法没有返回值。该方法和for循环没有太大差别。jquery()也提供了相应的方法each()方法。

#### 归并方法
归并方法又称为累加方法，reduce()和reduceRight()两个方法，这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。

参数

###### 描述
reduce()为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

###### 参数
- callback 执行数组中每个值的函数，包含四个参数
- previousValue 上一次调用回调返回的值，或者是提供的初始值（initialValue）
- currentValue 数组中当前被处理的元素
- index 当前元素在数组中的索引
- array 调用 reduce 的数组
- initialValue 作为第一次调用 callback 的第一个参数。



回调函数第一次执行时，previousValue 和 currentValue 可以是一个值，如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。

如果数组为空并且没有提供initialValue， 会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。


```
    var dataArray = [1,3,7,5,7,1]
    var result = dataArray.reduce(function(previousValue, currentValue,index,array){
        console.log(previousValue);
        // console.log(currentValue);
        return previousValue + currentValue;
    })
    console.log("result="+result)
    <!--运行结果-->
    1
    4
    11
    16
    23
    result=24
    <!--打印cur-->
    3
    7
    5
    7
    1
    
```

```
 var dataArray = [1,3,7,5,7,1]
    var result = dataArray.reduce(function(previousValue, currentValue,index,array){
        console.log(previousValue);
        // console.log(currentValue);
        return previousValue + currentValue;
    },2)
    console.log("result="+result)
      <!--运行结果-->
    2
    3
    6
    13
    18
    25
    result=26
```
二维数组转一维
```
var mattix = [[1,3],[6,7],[8,9]]
var flatten = mattix.reduce(function(previousValue, currentValue,index,array){
        console.log(previousValue);
        // console.log(currentValue);
        return previousValue + currentValue;
    })
    console.log(flatten)
    <!--运行结果-->
    [1,3,6,7,8,9]
```
reduceRight()和reduce()一样，操作方向是从右向左


### 添加对象
##### Object.assign() 
该方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign(object1,{c: 4, d: 5});

console.log(object2.c, object2.d);
// 4 5,
const object2 = Object.assign({c: 4, d: 5} ,object1);

console.log(object2.c, object2.d);
// 3 5
```
注：如果复制对象，属性名有重叠，属性值等于最后一个拥有该属性的属性值，即后一个相同属性名的属性的值，会覆盖前一个该属性名的值。

##### Object.create()
此方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
```
Object.create(proto,[propertiesObject])
```
##### proto
新创建对象的原型对象。
##### propertiesObject
可选。如果没有指定为undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。==如果propertiesObject参数不是 null 或一个对象，则抛出一个 TypeError 异常==

```
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
<!--My name is Matthew. Am I human? true-->
```
Object.create()可以用来实现类式继承
```
  // Shape - 父类(superclass)
  function Shape() {
    this.x = 0;
    this.y = 0;
  }

  // 父类的方法
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };

  // Rectangle - 子类(subclass)
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }

  // 子类续承父类
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  <!--constructor的值一般是对象本身，在继承是如果不重新指定constructor，constructor会指向继承的对象上，所以为了方便使用避免出现意外情况，还是重新指定好。-->

  var rect = new Rectangle();
  // console.log(rect.constructor)
  console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
  rect.move(1, 1); // Outputs, 'Shape moved.'
```
##### Object.defineProperties()
该方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。在新建数据库时使用较多，用来指定对象的属性。[具体查看MDN说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
##### Object.defineProperty()
Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
##### Object.entries()
**Object.entries()**-方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于**for-in**循环也枚举原型链中的属性）。
```
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1));
// expected output: Array [["baz", 42],['baz',42]]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]
```
##### Object.freeze()
**Object.freeze()** 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。
##### Object.keys()
**Object.keys()** 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用**for...in**循环遍历该对象时返回的顺序一致。
```
const obj = {'first':'第一','second':'第二','third':'第三'}
    const arr = Object.keys(obj)
    console.log(Object.keys(obj)) //array ["first", "second", "third"] 
    for (let i = 0;i<arr.length;i++){
      console.log(obj[arr[i]])
    }
    // output: 第一 第二 第三
```

[具体ECMAScript 5.1新增语法查看官网说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

##### Function.prototype.bind()
bind()方法创建一个新的函数， 当这个新函数被调用时其this置为提供的值，其参数列表前几项置为创建时指定的参数序列。==call()和apply()同样具有改变this的作用，而这两个方法一经绑定立即执行==bind()在绑定后，只有在调用时才会执行；
```
    function theThis() {
      console.log(this.location)
    }
    function changelocation(locat){
      this.location = locat
    }
    const newthis = new changelocation('my location');
    theThis.call(newthis) // my location
    theThis.apply(newthis) // my location
    const thelocation = theThis.bind(newthis)
    thelocation() // my location
```