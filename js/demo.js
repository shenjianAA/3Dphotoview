// js在页面中的作用是什么
//   1、做特效  JS语法改变HTML+css样式属性的值
// 2.页面逻辑
// 3.数据交互
// 4.插件
// 今日需求：
// 1.动态布局，图片根据你的算 法到指定的位置中
// 2.如果要操作或者得到元素的某些信息，必须要JS中获取的对象
//3.事件触发某个特效
//   按下 onmousedown  移动onmousemove  松开onmouseup
//4.旋转的度数跟谁有关  鼠标移动多少>>鼠标移动的距离
var oWrap=document.getElementById("wrap");
var oImg=document.getElementsByTagName("img");
var len=oImg.length;
var Deg=360/len;//获取每一张图片旋转的度数
for(var i=0;i<len;i++){//对全部的图片旋转
    //获取每个img元素  并设置对应的旋转角度
    oImg[i].style.transform="rotateY("+Deg*i+"deg) translateZ(350px)";
}
var x,y,
    nowX,nowY,//nowx:鼠标移动一次产生的新值
    lastX,lastY,//lastX:鼠标移动过后新值转为旧值
    minX,minY,//鼠标移动的差值
    roX=0,roY=0;//

document.onmousedown=function(e){
    var e=e || window.event;
    lastX=e.clientX;//起始值为一开始的旧值
    lastY=e.clientY;
    this.onmousemove=function(e){
        nowX=e.clientX;//新值用完以后就变成旧的了
        nowY=e.clientY;
        minX=nowX-lastX;
        minY=nowY-lastY;
        roX-=minY*0.05;
        roY+=minX*0.1;//从左到右改变的是y轴的值
        oWrap.style.transform="rotateX("+roX+"deg) rotateY("+roY+"deg)";
        //console.log(minX,minY);
        lastX=nowX;
        lastY=nowY;
    }
    this.onmouseup=function(e){
        this.onmousemove=null;//终止移动事件
        this.onmouseup=null;
    }
}
