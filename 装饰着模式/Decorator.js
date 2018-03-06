//不需要知道原有方法实现细节
var decorator = function(input,fn){
	var input = document.getElementById(input);
	if(typeof input.onclick === 'function'){
		var oldClickFn = input.onclick;
		input.onclick = function(){
			oldClickFn();
			fn();
		}else{
			input.onclick = fn;
		}
	}
}
