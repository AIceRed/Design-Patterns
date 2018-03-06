var girl = function (name) {
    this.name = name;
};

var dudu = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        alert("Hi " + girl.name + ", dudu送你一个礼物：" + gift);
    }
};

var proxyTom = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        (new dudu(girl)).sendGift(gift);
    }
};

var proxy = new proxyTom(new girl("sister"));
proxy.sendGift("flower");