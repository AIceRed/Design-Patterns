/**
 * 虚拟父类
 */
Var news function(){
	this.children = [];//子组件容器
	this.element = null;//当前组件元素
}
News.prototype = {
	init:function(){
		throw new Error("Please Rewrite");
	}
	add:function(){
		throw new Error("Please Rewrite");
	}
	getElement:function(){
		throw new Error("Please Rewrite");
	}
}
/**
 * 组合容器
 */
var Container = function(id,parent){
	News.call(this);//继承父类
	this.id=id;
	this.parent=parent;
	this.init();
}
//寄生式继承父类原型方法
inheritPrototype(Container,News);
Container.prototype.init = function(){
	this.element = document.createElement('ul');
	this.element.id = this.id;
	this.element.className = 'new-container';
};
Container.prototype.add = function(child){
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
};
Container.prototype.getElement = function(){
	return this.element;
};
Container.prototype.show = function(){
	this.parent.appendChildre(this.element);
}
/**
 * 组成成员
 */
var Item = function(classname){
	News.call(this);//继承父类
	this.classname=classname||'';
	this.init();
}
inheritPrototype(Item,News);
Item.prototype.init = function(){
	this.element = document.createElement('li');
	this.element.className = this.classname;
};
Item.prototype.add = function(child){
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
};
Item.prototype.getElement = function(){
	return this.element;
};
var NewsGroup = function(classname){
	News.call(this);
	this.classname = classname || '';
	this.init;
}
inheritPrototype(NewsGroup,News);
NewsGroup.prototype.init = function(){
	this.element = document.createElement('div');
	this.element.className = this.classname;
}
NewsGroup.prototype.add = function(child){
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}
NewsGroup.prototype.getElement = function(){
	return this.element;
}
/**
 * 创建新闻类
 */
var ImageNews = function(url,href,classname){
	News.call(this);
	this.url = url || '';
	this.href = href || #;
	this.classname = classname || 'normal';
	this.init();
}
inheritPrototype(ImageNews,News);
ImageNews.prototype.init = function(){
	this.element = document.createElement('a');
	var img = newImage();
	img.src = this.url;
	this.element.appendChild(img);
	this.element.className = 'image-news' + this.classname;
	this.element.href = this.href;
}
ImageNews.prototype.add = function(){}
ImageNews.prototype.getElement = function(){
	return this.element;
}

var IconNews = function(text,href,type){
	News.call(this);
	this.text = text || '';
	this.href = href || #;
	this.classname = classname || 'video';
	this.init();
}
inheritPrototype(IconNews,News);
IconNews.prototype.init = function(){
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'icon' + this.type;
}
IconNews.prototype.add = function(){}
IconNews.prototype.getElement = function(){
	return this.element;
}

var EasyNews = function(text,href){
	News.call(this);
	this.text = text || '';
	this.href = href || #;
	this.init();
}
inheritPrototype(EasyNews,News);
EasyNews.prototype.init = function(){
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'text';
}
EasyNews.prototype.add = function(){}
EasyNews.prototype.getElement = function(){
	return this.element;
}
/**
 * 新闻模块
 */
var news = Contenrainer('news',document.body);
news.add(
	new Item('normal').add(
		new IconNews('测试新闻','#','video')
	)
).add(
	new Item('normal').add(
		new NewsGroup('has-img').add(
			new ImageNews('img/1.jpg','#','small')
		).add(
			new EasyNews('前端开发','#')
		)
	)
).show();