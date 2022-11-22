const valumeUnits = {
  FIRSTCCY: "#tickervolccy_0",
  USD: "#tickervolccy_USD",
  BTC: "#tickervolccy_BTC",
  ETH: "#tickervolccy_ETH",
};

var volumeSetup = function () {
  // setup volume unit interface
  var volumeUnit = window.APP.util.getSettings("ticker_vol_unit").toUpperCase();
  var element = $(valumeUnits[volumeUnit]); // by this way, element variable easely get value from valumeUnits directly with property name. without any conditions.
  if (element) {
    element.prop("checked", true);
  }
  // override currencies list
  var result = window.APP.util.initCurrenciesList();
  return result;
};
