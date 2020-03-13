type exirSymbols = "btc-tmn" | "eth-tmn" | "bch-tmn" | "usdt-tmn";
type exirTrades = {
  symbol: exirSymbols;
  size: string;
  price: string;
  time: string;
};
type exirTradesResult = {
  side: string;
  size: string;
  price: string;
  timestamp: string;
};
type exirOrderBooksResult = {
  bids: [number, number][];
  asks: [number, number][];
  timestamp: string;
};

type exirTradesRes = {
  [key in exirSymbols]: exirTradesResult[];
};

type exirOrderBooksRes = {
  [key in exirSymbols]?: exirOrderBooksResult;
};

type exirBalanceRes = {
  updated_at: string;
  fiat_balance: number;
  fiat_pending: number;
  fiat_available: number;
  btc_balance: number;
  btc_pending: number;
  btc_available: number;
  eth_balance: number;
  eth_pending: number;
  eth_available: number;
  bch_balance: number;
  bch_pending: number;
  bch_available: number;
  usdt_balance: number;
  usdt_pending: number;
  usdt_available: number;
};

type exirbalanceType={
  pending: number;
  balance: number;
  available: number;
}

type getUserBalanceType= exirbalanceType &{
  fiat:exirbalanceType
}

type getExirUserCreateOrderProp = {
  token: string;
  symbol: exirSymbols;
  side: "buy" | "sell";
  size: number;
  price: number;
};
type getExirUserTradesProp = {
  token: string;
  limit?: number;
  symbol?: exirSymbols;
  page?: number;
};
type exirUserTradesRes = {
  side: "buy" | "sell";
  symbol: exirSymbols;
  size: number;
  price: number;
  timestamp: string;
  fee: number;
}[];
type exirOrderRes = {
  id: string;
  side: "buy" | "sell";
  symbol: string;
  size: number;
  filled: number;
  type: string;
  price: number;
  created_at: string;
  title: string;
  created_by: number;
};

type exirUserAllOrdersRes = exirOrderRes[];

type allowSymbolType = { symbol: exirSymbols, buyOrderSize: number, sellorderSize: number }

type symbolTradeNeedDataType = {
  trades: exirUserTradesRes;
  orders: exirUserAllOrdersRes;
  priceStep: number;
}
type getUserCurrentAutoOrder={
  buyOrders: exirOrderRes[];
  sellOrders: exirOrderRes[];
}

type initCreateOrderdataType={
  token: string;
  orderbook: exirOrderBooksResult;
  symbolItem: allowSymbolType;
  symbolTradeNeedData:symbolTradeNeedDataType;
  userBalance:getUserBalanceType
  config:autoTradeConfigType
}
type autoTradeConfigType={
  SPACE_BETWEEN: number;
  SPACE_FROM_TWO: number;
}