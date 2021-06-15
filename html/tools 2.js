/**
 * Created by smyhvae on 2018/02/03.
 */
//函数封装（简单封装，实际工作使用）
function scroll() {
    return { //此函数的返回值是对象
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
    }
}

//函数封装：获取屏幕可视区域的宽高
function client() {

    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    
}

function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}