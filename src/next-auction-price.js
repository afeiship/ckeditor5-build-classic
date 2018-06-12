(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.auctionPrice = function (inData) {
    var status = inData.status;
    var leave = inData.leave;
    switch (true) {
      case status === 'N':
        return { key: 'beginPrice', value: '起拍价' };
      case status === 'A':
        return { key: 'currentPrice', value: '当前价' };
      case status === 'F' && !leave:
        return { key: 'hammerPrice', value: '成交价' };
      case status === 'F' && leave:
        return { key: null, value: '流拍' };
    }
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.auctionPrice;
  }

}());
