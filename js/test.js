// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     var a = 13;
// }
// fn();
// console.log(a);
/**
 * A:undefined 12 13
 * B:undefined undefined 12
 * C:undefined undefined 13
 * D:程序报错
 */

//=======================================================

// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     a = 13;
// }
// fn();
// console.log(a);
/**
 * A：undefined 12 13
 * B: undefined undefined 12
 * C: undefined undefined 13
 * D: 程序报错
 */

//===========================================================

// console.log(a);
// a = 12;

// function fn() {
//     console.log(a);
//     a = 13;
// }
// fn();
// console.log(a)

/**
 * A: undefined 12 13
 * B: undefined undefined 12
 * C: undefined undefined 13
 * D: 程序报错
 */

//=========================================================

// var foo = 1;

// function bar() {
//     if (!foo) {
//         var foo = 10;
//     }
//     console.log(foo);
// }
// bar();

/**
 * A: 1
 * B: 10
 * C: undefined
 * D: 程序报错
 */

//===========================================================

// var n = 10;
// function a() {
//     var n = 10;
//     function b() {
//         n++;
//         console.log(n);
//     }
//     b();
//     return b;
// }
// var c = a();
// c();
// console.log(n);

/**
 * A: 1  1  1
 * B: 11 11 0
 * C: 44 45 2
 * D: 11 12 12
 */

//========================================================

// var a = 10,
//     b = 11,
//     c = 12;
// function test(a) {
//     a = 1;
//     var b = 2;
//     c = 3;
// }
// test(10)
// console.log(a)
// console.log(b);
// console.log(c);

/**
 * A: 1  11 3
 * B: 10 11 12  
 * C: 1  2  3
 * D: 10 11 3
 * 
 */

//======================================================================

// if (!'a' in window) {
//     var a = 1;
// }
// console.log(a);

/**
 * A: 1
 * B: undefined
 * C: 报错
 * D: 以上都不对
 */

//====================================================================

// var a = 4;

// function b(x, y, a) {
//     console.log(a);
//     arguments[2] = 10;
//     console.log(a);
// }
// a = b(1, 2, 3);
// console.log(a);

/**
 * A: 3  3  4
 * B: 3 10 4
 * C: 3 10 10
 * D: 3 10 undefined
 * 
 */

//===============================================================

// var foo = 'hello';
// (function (foo) {
//     console.log(foo);
//     var foo = foo || 'world';
//     console.log(foo);
// }(foo));
// console.log(foo);

/**
 * A: hello hello hello
 * B: undefined world hello
 * C: hello world world
 * D: 以上都不正确
 */

//===================================================================

// var a = 9;

// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn();
// console.log(f(5));
// console.log(fn()(5));
// console.log(f(5));
// console.log(a);
/**
 * A: 6 6 7 2
 * B: 5 6 7 3
 * C: 5 5 6 3
 * D: 以上都不对
 * 
 */

//================================================================

// var arr = [1, 2, 3, 4];

// function fn(arr) {
//     arr[0] = 0;
//     arr = [0];
//     arr[0] = 100;
//     return arr;
// }
// var result = fn(arr);
// console.log(arr);
// console.log(result)

//==========================================================

// function fn(i) {
//     return function (n) {
//         console.log(n + (i++));
//     }
// }
// var f = fn(10);
// f(20);
// fn(20)(40);
// fn(30)(50);
// f(30);

//===============================================================

// var i = 10;

// function fn() {
//     return function (n) {
//         console.log(n + (++i));
//     }
// };
// var f = fn();
// f(20);
// fn()(20);
// fn()(30);
// f(30);

//==============================================================

// var num = 10; 
// var obj = {
//     num: 20 
// };
// obj.fn = (function (num) {
//     this.num = num * 3;
//     num++; 
//     return function (n) {
//         this.num += n;
//         num++;
//         console.log(num);
//     }
// }(obj.num));
// var fn = obj.fn;
// fn(5);
// obj.fn(10);
// console.log(num, obj.num);

//=======================================================================

// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// var f1 = new Fn();
// var f2 = new Fn();
// console.log(f1.getX === f2.getX); //
// console.log(f1.getY === f2.getY); //
// console.log(f1.__proto__.getY === Fn.prototype.getY); //
// console.log(f1.__proto__.getX === f2.getX); //
// console.log(f1.getX === Fn.prototype.getX); //
// console.log(f1.constructor); //
// console.log(Fn.prototype.__proto__.constructor); //
// f1.getX(); //
// f1.__proto__.getX(); //
// f2.getY(); //
// Fn.prototype.getY(); //

//================================================================================================================

/**
 * 一下代码的功能是要实现5个input按钮循环绑定click点击事件
 * 绑定完成后点击1,2,3,4,5五个按钮分别会alert输出0,1,2,3,4五个字符（腾讯）
 * 
 * 请问如下代码是否能实现
 * 如果不能实现那么现在的效果是什么样的
 * 应该做怎样的修改才能达到我们想要的效果。并说明原理？
 */

{
    /* <div id="btnBox">
        <input type="button" value="button_1" />
        <input type="button" value="button_2" />
        <input type="button" value="button_3" />
        <input type="button" value="button_4" />
        <input type="button" value="button_5" />
    </div>

    <script type="text/javascript">
        var btnBox=document.getElementById('btnBox'),
            inputs=btnBox.getElementsByTagName('input');
        var l=inputs.length;
        for(var i=0;i<1;i++){
            inputs[i].onclick = function () {
                alert(i);
            }
        }
    </script> */
}

//===============================================================================================================

// var fullName = 'language';
// var obj = {
//     fullName: 'javascript',
//     prop: {
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

//==========================================================================

// var name = 'window';
// var Tom = {
//     name: 'Tom',
//     show: function () {
//         console.log(this.name);
//     },
//     wait: function () {
//         var fun = this.show;
//         fun();
//     }
// };
// Tom.wait();

//========================================================================

// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };

// function getName() {
//     console.log(5);
// }
// Foo.getName(); //
// getName(); //
// Foo.getName(); //
// getName(); //
// new Foo.getName(); //
// new Foo().getName(); //
// new new Foo().getName(); //

//=============================================================================

// function fun() {
//     this.a = 0;
//     this.b = function () {
//         console.log(this.a);
//     }
// }
// fun.prototype = {
//     b: function () {
//         this.a = 20;
//         console.log(this.a);
//     },
//     c: function () {
//         this.a = 30;
//         console.log(this.a);
//     }
// }
// var my_fun = new fun();
// my_fun.b();
// my_fun.c();

//==================================================================================

//如何实现数组去重

//document.parentNode 和 document.parentnode 的区别

//怎么回避多人开发函数重名的问题

//JavaScript如何实现面向对象中的继承

//你理解的闭包作用是什么，缺点是？

/**
 * 有这样一个村庄，村里的每一个丈夫都背着妻子偷情，
 * 村里的每个妻子都知道除了自己的丈夫以外的男人偷情，
 * 村里有一条规定，如果妻子知道自己的丈夫偷情必须当天处决，
 * 有一天村里的女头领说村里有一个丈夫偷情，接下来会发生什么？
 */


/**
 * 一位数组中都是数字，想实现数组从大到小排序：____;
 * 删除数组中的最后一项内容，请至少写出三中办法_____;
 * 找出数组的第n到第m项的内容____;
 * 获取当前浏览器可是区域的宽度（兼容所有的浏览器）_____
 * 把元素添加到指定的容器当中，至少写出两种____
 * 获取上一个哥哥元素节点（兼容浏览器）____
 * 获取[n-m]之间的随机整数____
 * 把字符串中的某一个字符进行转换____
 * <div id="tab" class="tabCon"></div>用js获取一个元素的对象，
 * 至少写出三种方式（不需要兼容浏览器）____
 * []==false:__   ![]==false:__
 */

// console.log(num);
// if (!'num' in window) {
//     var num = 100;
// }
// console.log(num);


// var name = '中国';
// var age = 5000;
// name = (function (name, age) {
//     arguments[0] = '绫';
//     age = age || this.age;
//     console.log(name, age);
// }(name));
// console.log(name, age);

// var arr = [100, 200];
// ~ function (arr) {
//     arr.length--;
//     arr = [];
//     arr[arr.length] = 300;
//     alert(arr);
// }(arr);
// alert(arr);


// function fn(i) {
//     return function (n) {
//         console.log(n * (++i));
//     }
// };
// var f = fn(2);
// f(3);
// f(4);
// fn(5)(6);
// fn(7)(8);


// var num = 1;
// var obj = {
//     num: 2
// };
// obj.fn = (function (num) {
//     this.num = num * 2;
//     num++;
//     console.log(num);
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num)
// console.log(obj.num);



// function Fn(num) {
//     this.x = this.y = num;
// }
// Fn.prototype = {
//     x: 20,
//     sum: function () {
//         console.log(this.x + this.y);
//     }
// };
// var f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);


/**
 *有如下的HTML结构，需求是想要点击实现每一个按钮，
 *让body的背景显示不同的颜色，
 *下面的代码是否可以实现，原理是什么
 *如果不能实现实现又是什么原理
 *请写出你的思路（至少两种不同的解决方案）
 */

{
    /* <input type="button" />
    <input type="button" />
    <input type="button" />
    <script type="text/javascript">
        var inpList=document.getElementsByTagName('input');
        var arr=['red','green','orange'];
        for(var i=0;i<inpList.length;i++){
            var cur=inpList[i];
        cur.onmouseover=function(){
            document.body.style.backgroundColor=arr[i];
        }
    }
    </script> */
}

// console.log(num);
// if (!('num' in window)) {
//     var num = 100;
// }
// console.log(num);


// var name = '中国';
// var age = 5000;
// age = (function (name, age) {
//     name = '绫';
//     age = age || this.age;
//     this.name = arguments[0];
//     console.log(name, age);
// }(name, age));
// console.log(name, age);


// var obj = {
//     name: '绫',
//     age: 7
// };
// ~ function (obj) {
//     obj.name = '中国';
//     obj = {};
//     obj.age = 5000;
//     console.log(obj);
// }(obj);
// console.log(obj);


// var i = 2;

// function fn() {
//     i *= 2;
//     return function (n) {
//         console.log(n * (++i));
//     }
// }
// var f = fn();
// fn()(3);
// f(4);
// fn()(4);

// var num = 1;
// var obj = {
//     name: 2
// };
// obj.fu = (function (num) {
//     this.num += num;
//     num++;
//     console.log(num);
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num.obj.num);


// function Fn(num) {
//     this.x = this.y = num;
// }
// Fn.prototype = {
//     x: 20,
//     sum: function () {
//         console.log(this.x + this.y);
//     }
// };
// var f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);


// console.log(num);
// if ('num' in window) {
//     var num = 100;
// }
// console.log(num)


// var name = '中国';
// var age = 5000;
// age = (function (name, age) {
//     name = '绫';
//     arguments[1] = 7;
//     console.log(name, age);
// }(name, age));
// console.log(name, age);


// var arr = [100, 200];
// ~ function (arr) {
//     arr[arr.length] = 300;
//     arr = arr.slice(0);
//     arr[arr.length] = 500;
//     alert(arr);
// }(arr);
// alert(arr);


// function fn() {
//     var i = 5;
//     return function (n) {
//         console.log(n * (--i));
//     }
// };
// var f = fn();
// f(10);
// fn()(10);
// fn()(20);
// f(20);


// var num = 10;
// var obj = {
//     num: 20
// };
// obj.fn = (function (num) {
//     this.num += 2;
//     return function(n){
//         this.num +=n; 
//         num--;
//         console.log(num)  
//     }
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num, obj.num);


// Object.prototype.x = 100;

// function Fn() {
//     this.x = 10;
//     this.y = 20;
// }
// Fn.prototype.y = 200;
// Fn.prototype.sum = function () {
//     console.log(this.x + this.y);
// };
// var f = new Fn;
// console.log(f.sun === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);

// let n = 1;
// let x = {
//     n: 2,
//     y: (function (n) {
//         n = n || 3;
//         return function (m) {
//             m = m || 4;
//             this.n += m++;
//             n += ++m;
//             console.log(n);
//         };
//     }(window.n))
// };
// let z = x.y;
// x.y(5);
// z(6);
// console.log(n, x.n);

// let n = 1,
//     obj = {
//         n: 2
//     };
// let fn = obj.fn = (function () {
//     this.n += n;
//     n *= 2;
//     return function (m) {
//         n -= 5 + (++m);
//         this.n += n--;
//         console.log(n);
//     }
// })(obj.n);
// fn(3);
// obj.fn(4);
// console.log(n, obj.n, window.n);


// let Fn = function (x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//     this.getX = function () {
//         console.log(this.x);
//     }
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// Fn.prototype = {
//     setX: function (val) {
//         this.x = val;
//     },
//     getX: function () {
//         console.log(this.x);
//     }
// };
// let f1 = new Fn;
// let f2 = new Fn(1, 2);
// console.log(f1.constructor);
// f1.setX(3);
// f1.getX();
// f1.__proto__.getX();
// f1.__proto__.setX(4);
// f2.getX();
// f2.__proto__.getX();
// f2.getY();


// let m = 20;
// let Fn = function (n, m) {
//     this.n = n;
//     this.aa = function () {
//         console.log(this.n + (++m));
//     };
// };
// Fn.prototype.bb = function () {
//     console.log(this.n + m);
// };
// let f1 = new Fn(10, 20);
// Fn.prototype = {
//     cc: function () {
//         console.log(this.n + m);
//     }
// };
// let f2 = new Fn(30);
// console.log(f1.constructor === f2.constructor);
// f1.aa();
// f1.bb();
// f1.cc();
// f2.bb();
// f2.cc();
// f2.__proto__.cc();

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//     this.moveTo = function (x, y) {
//         this.x = x;
//         this.y = y;
//         console.log(this.x + ',' + this.y);
//     }
// }
// var p1 = new Point(0, 0);
// var p2 = {
//     x: 0,
//     y: 0
// };
// p1.moveTo(1, 1); //'0,0'
// p1.moveTo.apply(p2, [10, 10]);



// let Fn = function (x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//     this.getX = function () {
//         console.log(this.x);
//     };
// };
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// let f1 = new Fn();
// Fn.prototype = {
//     getY: function () {
//         console.log(this.y);
//     },
// };
// let f2 = new Fn(1, 2);
// console.log(f1.constructor == f2.constructor);
// f1.getX();
// f1.getY();
// f1.__proto__.getX();
// f1.__proto__.getY();
// f2.getX();
// f2.getY();
// f2.__proto__.getX();
// f2.__proto__.getY();


// 写出你所熟知的ES6新语法，说出它们和ES5的区别！

// 请说出你对 “重排和重绘读写分离” 的理解！

// 写出下面代码运行的结果
// var str='abc123',
//     num=parseFloat(str);
// if(num===NaN){
//     alert(NaN);
// }else if(num===123){
//     alert(123);
// }else if(typeof num==='number'){
//     alert('number');
// }else{
//     alert('str');
// }

// 写出代码执行的结果

// var a='abc'+123+456;
// alert(a);

// var b='456'-'123';
// alert(b);

// var c=1,
//     d='1';
// var f=c>d?(c<d?c:d):(c==d?c:d);
// alert(f);

// 用户昵称规定只能是“数字、大小写字母”组成，而且不能少于2位，也不能超过20位，写个正则匹配这个需求

// 谈谈你对面向对象的理解！

// 写出代码运行结果
// var point={
//     x:10,
//     y:20,
//     moveTo:function(x,y){
//         var moveX=function(x){ this.x=x; }
//         var moveY=function(y){ this.y=y; }
//         moveX(x);
//         moveY(y);
//     }
// };
// point.moveTo(100,200);
// console.log(point.x, point.y);

// 分析代码写结果
// function fun(){
//     this.a=10;
//     this.b=function(){
//         alert(this.a);
//     }
// }
// fun.prototype={
//     b:function(){
//         this.a=20;
//         alert(this.a);
//     },
//     c:function(){
//         this.a=30;
//         alert(this.a)
//     }
// }
// var my_fun=new fun();
// my_fun.b();
// my_fun.c();

// 分析代码写结果
// var n=2;
// function a(){
//     var n=3;
//     function b(m){
//         alert(++n+m);
//     }
//     b(4);
//     return b;
// }
// var c=a(5);
// c(6);
// alert(n);

// 谈一下你对作用域链和原型链的理解

// 实现 一个$attr(domId, name, value)遍历id是domId的，内部属性为name且值为value的元素？

// 实现数组去重你都有哪些办法 ?

// 说出你所掌握的算法

// 写出你掌握的JS继承方式，项目中什么时候你用到了继承？

// JS中有一个insertBefore方法，目的是实现把新元素插入到指定元素之前，现在你实现一个 InsertAfter 方法，把新元素插入到指定元素之后！
// function insertAfter(newEle,originEle){
//     //=>newEle:新插入的元素
//     //=>originEle:指定的老元素
// }

// 英文字母汉字组成的字符串，用正则给英文单词前后加空格

// jQuery的原理，怎么扩展插件


// 看代码，回答问题
// for(var i = 0;i<5;i++){ 
//     setTimeout(function(){ 
//         console.log(i) 
//     },1000); 
// } 
// 这段代码输出什么？怎么才能输出01234？

// 分析代码写结果
// var a = {n:4};
// var b = a;
// b.x = a = {n: 10};
// console.log(a.x);
// console.log(b.x);


// 你了解过闭包吗？


// var fullName = 'language';
// var obj={
//    fullName:'javascript',
//    prop:{
//       getFullName:function(){
//          return this.fullName;
//       }
//    }
// };
// console.log(obj.prop.getFullName());
// var test=obj.prop.getFullName;
// console.log(test());

// let a = 3,
//     b = 4;
// function A(a) {
//     A = function (b) {
//         alert(a + (--b));
//     };
//     alert(++a);
// }
// A(5);
// A(6);


// window.val = 1;
// let json = { 
//     val: 10,
//     dbl: function () {
//         this.val *= 2;
//     }
// };
// json.dbl();
// let dbl = json.dbl;
// dbl();
// json.dbl.call(window);
// alert(window.val + json.val);



// (function () {
//     let val = 1;
//     let json = {
//         val: 10,
//         dbl: function () {
//             val *= 2;
//         }
//     };
//     json.dbl();
//     alert(json.val + val);
// })();


// let test = (function (i) {
//     return function () {
//         alert(i *= 2);
//     }
// })(2);
// test(5); 



// let n = 2,
//     fn = () => {
//         this.n *= 3;
//         n++;
//         return m=>console.log((++n)+m);
//     };
// var f = fn(4);
// f(5);
// fn(4)(5);
// f(6);
// console.log(n);

// 忽略报错阻碍代码的执行
// let Fn = function (x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//     this.getX = function () {
//         console.log(this.x);
//     }
// };
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// let f1 = new Fn;
// Fn.prototype = {
//     getY: function () {
//         console.log(this.y);
//     }
// };
// let f2 = new Fn(1, 2);
// console.log(f1.constructor===f2.constructor);
// f1.getX();
// f1.getY();
// f1.__proto__.getX();
// f1.__proto__.getY();
// f2.getX();
// f2.getY();
// f2.__proto__.getX();
// f2.__proto__.getY();


// 写出输出结果，说出原因
// let fn1=function(){alert(1)},
//     fn2=function(){alert(2)};
// fn1.call(fn2);
// fn1.call.call(fn2);

// 如下一个字符串 “54389”，要求将字符串中的阿拉伯数字替换成我们的中文大写数字”伍肆叁捌玖”，请使用正则的方式进行处理

// 在javascript对象上定义一个repeatify函数, 这个函数接受一个整数参数, 来明确子字符串需要重复几次, 这个函数要求字符串重复指定的次数, 比如: ’abc’.repeatify(3);//”abcabcabc”

// var str = 'hello<img src="haha.png" alt="哈哈"/>world'; 正确匹配输出’hello[哈哈]world’

// 一个url 后面好多key - value 如localhost ? key = val & key2=val2 & key3=val3 封装一个函数 getParam(‘key’) 通过key获得相应等号后面的值.

// call、apply、bind的区别

// 有两个升序数组，然后将他们合为 一个数组并进行升序排序？

// 瀑布流的实现原理

// 图片延迟加载怎么实现


// 写出完整的验证函数
// 1)长度不能小于6位
// 2)首字母必须是字母
// 3)合法字符只能是数字、字母、下划线

// 使用jquery实现点击按钮弹出一个对话框（对话框在整个页面正中间，并且最初页面中没有任何的HTML标签）？

// 怎么避免全局变量的污染？

// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };
// function getName() {
//     console.log(5);
// }
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();


// 在函数式编程当中有一个很重要的概念就是函数组合，实际上就是把处理数据的函数像管道一样连接起来，然后让数据穿过管道得到最终的结果。例如：
// const add1 = (x) => x + 1;
// const mul3 = (x) => x * 3;
// const div2 = (x) => x / 2;
// div2(mul3(add1(add1(0)))) //=>3
// 而这样的写法可读性明显太差了。我们可以构建一个 compose 函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后 compose 返回的也是一个函数，达到以下的效果：
// const operate = compose(div2, mul3, add1, add1)
// operate(0) //=>相当于div2(mul3(add1(add1(0)))) 
// operate(2) //=>相当于div2(mul3(add1(add1(2))))

// 简而言之：compose 可以把类似于 f(g(h(x))) 这种写法简化成 compose(f, g, h)(x) 。请你完成 compose 函数的编写。

// 额外挑战：你能通过 1~2 行代码实现 compose 吗。

// 点击每一个li可以创建出对应的对象（可以不兼容低版本浏览器）
// [结构]
// <ul>
//   <li><a href='http://xxx'>xxx</a></li>
//   <li><a href='http://sss'>sss</a></li>
// </ul>

// 点击第一个LI创建对象：
// {
//    index:1,
//    name:'xxx',
//    link:'http://xxx'
// }
// 同样点击第二个LI创建对象
// {
//    index:2,
//    name:'sss,
//    link:'http://sss'
// }
// ...

// 分析此函数的作用，补全1/2处的代码
//代码
//代码
// function fn(str) {
//     this.str = str;
// };
// fn.prototype.format = function () {
//     var arg = __1__;
//     return this.str.replace(__2__, function (a, b) {
//         return arg[b] || '';
//     });
// };
// window.fn = fn;
// })(window);

// (function () {
//     var t = new fn('<p><a> href="{0}">{1}</a><span>{2}</span></p>');
//     console.log(t.format('http://www.alibaba.con', 'Alibaba', 'welcome'));
// })();

//获取数据中的最大值
//编写一个函数，把一个列表中的每一项反序
// 1.<ul id='target'>
// 2.    <li>1</li>
// 3.    <li>2</li>
// 4.    <li>3</li>
// 5.    <li>4</li>
// 6.    <li>5</li>
// 7.</ul>

// 编写一个函数实现数组扁平化
// let ary = [1,[2,[3,[4,5]]],6];  //=>[1,2,3,4,5,6]

// 网页中实现一个计算，计算当年还剩多少时间的倒数计时程序，要求网页上显示 “xxxx年还剩xx天xx时xx分xx秒”；（获取当前时间采用new Data()即可）

// offsetHeight / clientHeight / scrollHeight的区别

// 获取字符串中出现次数最多的字符及出现的次数

// 完成如图所示的文字横向无缝衔接滚动的“跑马灯”效果