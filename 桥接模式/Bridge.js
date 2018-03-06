//实现层与抽象层解耦分离
//抽象
function changeColor(dom,color,bg){
	dom.style.color = color;
	dom.style.background = bg;
}

var spans =document.getElementsByTagName("span");
spans[0].onmouseover = function(){
	changeColor(this,'red','#ddd')
}
