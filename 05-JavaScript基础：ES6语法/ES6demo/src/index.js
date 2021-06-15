// 函数封装：定义一个定时器，每间隔 delay 毫秒之后，执行 callback 函数
function myInterval(callback, delay = 100) {
    let timeId = setInterval(() => callback(timeId), delay);
}

myInterval((timeId) => {
    // 每间隔 500毫秒之后，向右移动 .box 元素
    // const myBox = $('.box');
    const myBox = document.getElementsByClassName('box')[0];
    const left = parseInt(window.getComputedStyle(myBox).left);
    myBox.style.left = left + 20 + 'px';
    if (left > 300) {
        clearInterval(timeId);

        // 每间隔 10 毫秒之后，将 .box 元素的宽度逐渐缩小，直到消失
        myInterval((timeId2) => {
            const width = parseInt(window.getComputedStyle(myBox).width);
            myBox.style.width = width - 1 + 'px';
            if (width <= 0) clearInterval(timeId2);
        }, 10);
    }
}, 200);