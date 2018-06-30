(function () {

  var global = global || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.auctionPrice = function (inStatus, inIsLeave) {
    switch (true) {
      case inStatus === 'N':
        return { key: 'beginPrice', value: '起拍价' };
      case inStatus === 'A':
        return { key: 'currentPrice', value: '当前价' };
      case inStatus === 'F' && !inIsLeave:
        return { key: 'hammerPrice', value: '成交价' };
      case inStatus === 'F' && inIsLeave:
        return { key: null, value: '流拍' };
    }
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.auctionPrice;
  }

}());
