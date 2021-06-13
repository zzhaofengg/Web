"use strict";

var fn = function fn() {
   //当不确定方法的参数时，可以使用剩余参数
   console.log(arguments.length <= 0 ? undefined : arguments[0]);
   console.log(arguments.length <= 1 ? undefined : arguments[1]);
   console.log(arguments.length <= 2 ? undefined : arguments[2]);
   console.log(arguments.length <= 3 ? undefined : arguments[3]);
};

fn(1, 2);
fn(1, 2, 3); //方法的定义中了四个参数，但调用函数时只使用了三个参数，ES6 中并不会报错。
