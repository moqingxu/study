/* 原理以下：
1.获取屏幕的宽度
2.获取一个图片元素容器的宽度
3.动态计算页面横向最多可放置的图片数量
4.动态设置样式，让内容左右居中 */
//JavaScript 函数 `waterFlow()`
function waterFlow() {
    //通过getElementById方法获取 id为container的元素，将其赋值给变量parentContainer,这个容器包含了图片的父元素
    var parentContainer=document.getElementById("container");
    //获取当前文档的可视区域宽度，即浏览器窗口的宽度，并将其赋值给变量 `screenWidth`
    var screenWidth=document.documentElement.clientWidth;
    var childWidth=allChild[0].offsetWidth; // 这里应该是获取子元素的宽度，但由于 `allChild` 未定义，因此无法获取到子元素的宽度，因此这里的 `childWidth` 值是不确定的。
    var rowsNum=Math.floor(screenWidth/childWidth); // 根据可视区域宽度和子元素的宽度计算可以容纳的行数，并向下取整
    parentContainer.style.cssText="width:"+childWidth*rowsNum+"px;margin:0 auto"; // 设置容器的样式，宽度为可以容纳的行数乘以子元素的宽度，左右外边距为 "auto"，使其水平居中显示
}

// 假设 `allChild` 是一个包含了所有子元素的数组，这行代码尝试获取数组中第一个子元素的宽度，并将其赋值给变量 `childWidth`。但在当前代码中，`allChild` 并没有被定义或赋值，因此这行代码会导致错误。

// 4. `var rowsNum = Math.floor(screenWidth / childWidth);`：根据可视区域宽度和子元素的宽度计算可以容纳的行数，并将结果向下取整，赋值给变量 `rowsNum`。

// 5. `parentContainer.style.cssText = "width:" + childWidth * rowsNum + "px;margin:0 auto";`：通过 `style.cssText` 属性设置容器的样式。这里将容器的宽度设置为可以容纳的行数乘以子元素的宽度，同时设置左右外边距为 "auto"，使其水平居中显示。

// 6. `waterFlow();`：调用 `waterFlow` 函数，触发上述布局调整逻辑的执行。

// 需要注意的是，代码中存在一个问题，即缺少了获取子元素的部分（`allChild` 未定义），因此无法正确计算子元素的宽度，可能需要进一步完善。
function waterFlow(){
    var parentContainer = document.getElementById("container");
    var screenWidth = document.documentElement.clientWidth;
    var childWidth = allChild[0].offsetWidth;
    var rowsNum = Math.floor(screenWidth / childWidth);
    parentContainer.style.cssText = "width:" + childWidth * rowsNum + "px;margin:0 auto";
  }
  waterFlow();
  