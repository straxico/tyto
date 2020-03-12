import io from "socket.io-client";

const ExirRealTime = (
  { symbol, event, fn }: {
    symbol: exirSymbols; event: "orderbook" | "trades", fn: any
  }
) => {
  const socket = io("https://api.exir.io/realtime", {
    query: { symbol }
  });

  socket.on(event, fn); // orderbook event
};
export default ExirRealTime;
