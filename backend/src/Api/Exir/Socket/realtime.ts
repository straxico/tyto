import io from "socket.io-client";
import _ from "lodash";

const ExirRealTime = (
  { symbol, event, fn }: {
    symbol: exirSymbols; event: "orderbook" | "trades", fn: any
  }
) => {
  const socket = io("https://api.exir.io/realtime", {
    query: { symbol }
  });

  socket.on(event,_.debounce(fn, 5000)); // orderbook event
};
export default ExirRealTime;
