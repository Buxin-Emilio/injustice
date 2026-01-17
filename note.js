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
_____________________
// 一个好的做法是在运算符（= + - * /）周围加上空格,便于阅读