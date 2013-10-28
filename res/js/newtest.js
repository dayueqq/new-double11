// JavaScript Document
//图片透明蒙版
 function openVessel(strId)
    {
        document.getElementById(strId).style.display = "block";
    }
 function closeVessel(strId)
    {
        document.getElementById(strId).style.display = "none";
    }
	
//右侧边栏浮动效果
function aa(strId){
var obj=document.getElementById(strId);
obj.style.visibility="visible";
}
function bb(strId){
var obj=document.getElementById(strId);
obj.style.visibility="hidden";
}