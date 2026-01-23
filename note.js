//重新来
//w3教程
//记得看完教程，去看一下示例
//在 HTML 中，JavaScript 代码必须位于 <script> 与 </script> 标签之间。可被放置与 HTML 页面的 <body> 或 <head> 部分中
// <script src="myScript.js"></script>   引用外部脚本，外部脚本不能包含 <script> 标签
//使用 innerHTML
/* <p id="demo"></p>
<script>
 document.getElementById("demo").innerHTML = 5 + 6;
</script> */
//访问元素id直接修改显示内容
//script标签里直接使用document.write(5 + 6);会显示内容，但是如果document.write(5 + 6);在html元素的内置script里面，一旦运行，就会覆盖所有html元素
//document.write() 方法仅用于测试。平时不要用

//window.alert(5 + 6);  显示弹窗后。再正常显示内容，可以省略windows，直接alert
//console.log(5 + 6);  用于再控制台那里显示，等于日记一样的log
// 一个好的做法是在运算符（= + - * /）周围加上空格,便于阅读

//js语法
//固定值称为 Literals。可变值称为 Variables
//var、let 和 const 来声明变量。
//   //为注释
//多行注释以 /* 开头，以 */ 结尾 
//数字不允许作为名称的第一个字符。名字里面的字母大小写不同，就是不同的变量名

//JavaScript 变量
//变量是存储值的容器。
//var、let 和 const 来声明变量。const声明常量，不可更改变量值
//一个let可以声明多个变量
//用var重复声明一个变量名相同的变量，值不变，
// var x = 10;
// var x;这个x 的值依然是10.
//假如var声明的重复变量有不同的值，那接下来使用变量的地方都用新的值
//用let 和 const不能重复声明相同变量
//如果你将左边的数字放在引号中，右边的数字将被视为字符串并连接。计算顺序是左到右，如果开头是数字加减，那先完成数字的加减，再和字符串相加
//块作用域里面用let声明的变量，不能在外部使用，var声明的可以在外部使用。在块内用let重新声明变量不会重新影响块外的变量，只要块位置不同，就可以重新声明
//let 和 const 具有块作用域。所以不能在相同块内重新声明，总之，同一作用域里面，除了var声明的以外，其余都不能出现同一变量名，如果const先声明，那var也不能声明同样的变量 
//var可以先赋值，后声明，let 和const必须先声明，在赋值
//const声明常量，不可重新赋值，并且变量名全部大写，可以更改常量数组和对象的属性和元素，只是更改，不能重新赋值
//const 变量必须在声明时赋值
//当你知道值不应被更改时，始终使用 const 声明一个变量

//JavaScript 运算符
//当用于字符串时，+ 运算符被称为连接运算符。


//JavaScript 函数
//可以直接使用该函数，作为变量值。

//JavaScript 对象
// 对象字面量是花括号 {} 内的名称:值对列表。
//通过两种方式访问对象属性
//objectName.propertyName
//objectName["propertyName"]
//甚至可以用这两种办法去访问对象里面的嵌套对象
//方法是作为属性值存储的函数定义。
//delete person.age; 删除属性和值
// 在循环里面的时候，必须用objectName["propertyName"]的方式
//不能向对象构造函数添加新属性，但有其他办法，加在对象构造器原型里面Person.prototype.nationality = "English";，，这.prototype就是加到对象构造器Person的原型里面，就ok了，构造器本质是方法，是函数
//不能向对象构造函数添加新方法,还是得像上面那样，添加到原型里面

