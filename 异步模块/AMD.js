var loadScript = function(src){
	var _script = document.createElement('script');
	_script.type = 'text/javascript';
	_script.src = src;
	document.getElementsByTagName('head')[0].appenfChild(_script);
}
F.moudle = function(url,modDeps,modCallback){
	
}
