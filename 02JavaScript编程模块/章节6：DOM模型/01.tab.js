//当鼠标悬停在导航链接上时，显示对应的内容，并且高亮显示当前选中的链接。

/* 获取上部导航栏（class为up）中所有的列表项（<li>）元素，并将其存储在lis变量中。
var up=document.querySelector("up");
var lis=up.querySelectorAll("li");
可以写成一句话 */
var lis = document.querySelector(".up").querySelectorAll("li");
//获取下方内容区域（class为down）中所有的<div>元素，并将其存储在divs变量中。
var divs = document.querySelector(".down").querySelectorAll("div");
//闭包帮我们保存变量到函数中
for (var i = 0; i< lis.length; i++) {
    (function (i) {
        // 为当前列表项添加鼠标进入事件的监听器
        lis[i].onmouseenter= function () {
            //在鼠标进入当前列表项的事件处理函数中，遍历所有的列表项
            for (var j = 0; j < lis.length; j++) {
                //移除所有列表项的class属性，以清除之前设置的样式
                lis[j].removeAttribute("class");
                //移除所有下方内容区域的class属性，以清除之前设置的样式
                divs[j].removeAttribute("class");
            }
            //为当前列表项添加select类，以设置选中状态的样式
            lis[i].setAttribute("class", "select");
            //给当前鼠标进入的导航链接对应的内容区域添加div-select类，以显示该内容
            divs[i].setAttribute("class", "div_select");
        }
    }(i))
}