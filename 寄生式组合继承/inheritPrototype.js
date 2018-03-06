function inheritObject(o){
	function F(){};
	F.prototype = o;
	return new F();
}

function inheritPrototype(subClass supperClass){
	var p = inheritObject(superClass.prototype);
	p.constructor = subClass;
	subClass.prototype = p;
}
