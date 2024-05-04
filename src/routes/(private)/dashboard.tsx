import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export function Component() {
  return (
    <>
      <div className="bg-gray-300"></div>
      <AdvancedRealTimeChart
        width="100%"
        height="800px"
        allow_symbol_change
        copyrightStyles={{ parent: { display: "none" } }}
      />
    </>
  );
}
