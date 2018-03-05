//自定义框架适配jQery
//自定义框架
var Ice = Ice || {};
Ice.g = function(id){
	return document.getElementById(id);
}
//适配
Ice.g = function(id){
	return $('#'+id).get(0);
}
//参数适配
function adp(obj){
	var _adpter = {
		name:Ice,
		age:18,
		size:100
	}
	for(var i in _adpter){
		_adpter[i] = obj[i] || _adpter[i];
	}
}
//数据适配
var arr =['JavaScript','Book',48];
var obj ={
	name : '',
	type : '',
	price : ''
}
function arrToObjectAdapter(arr){
	return {
		name : arr[0],
		type : arr[1],
		price : arr[2]
	}
}
var adapterData = arrToObjectAdapter(arr);
//服务器端数据适配
function ajaxAdatper(data){//处理并返回数据
	return [data['key1'],data['key2']];
}
$.ajax({
	url : 'someAdress.php',
	sucess : function(data,status){
		if(data){
			doSomething(ajaxAdapter(data));
		}
	}
});














