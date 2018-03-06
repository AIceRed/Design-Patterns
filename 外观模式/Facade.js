function addEvent(dom,type,fn){
	if(dom.addEventListener){//支持Dom二级事件处理程序addEventListener
		dom.addEventListener(type,fn,false);
	}else if(dom.attachEvent){//支持Dom二级事件处理程序attachEvent(低于IE9)
		dom.attachEvent('on'+type,fn);
	}else{
		dom['on'+type] = fn;
	}
}
/**
 * var myInput = document.getElement.ById("myInput");
 * addEvent(myInput,'click',function(){
 * 		......
 * })
 */
//获取事件对象
var getEvent = function(event){//标准返回event IE返回window.event
	return event || window.event;
}
//获取元素
var getTarget = function(event){//标准event.target IE下event.srcElement
	var event =getEvent(event);
	return event.target || event.srcElement;
}
//阻止默认行为
var preventDefault = function(event){
	var event = getEvent(event);
	if(event.preventDefault){//标准浏览器
		event.preventDefault();
	}else{//IE浏览器
		event.returnValue = false;
	}
}
/**
 * docunment.onclick = function(e){
 * 	preventDefault(e);//阻止默认行为
 *  if(getTarget(e) !== document.getElementById('myinput')){//获取事件源目标对象
 * 		hideInputSug();
 * 	}
 * }
 */
//属性样式方法库
var Ice = {
	Id:function(id){
		return document.getElementById(id);
	},
	Css:function(id,key,value){
		document.getElementById(id).[key] = value;
	},
	Attr:function(id,key,value){
		docuemnt.getElementById(id)[key] = value;
	},
	Html:function(id,html){
		docuemnt.getElementById(id).innerHTML = html;
	}
	On:function(id,key,fn){
		docuemnt.getElementById(id).['on'+type] = fn;
	}
}
/**
 * Ice.Css('box','background','red');//设置css
 * Ice.Attr('box','className','box');//设置class
 * Ice.Html('box','NewMessage');//设置内容
 * Ice.On('box','width','500px');//绑定事件
 */