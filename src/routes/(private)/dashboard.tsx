import {
  Fa6SolidMoneyBills,
  Fa6SolidMoneyCheck,
  FluentMoney16Filled,
  PhWalletFill,
  RiMoneyDollarCircleFill,
} from "@/components/Icons";
import { useAppUser } from "@/providers/UserAccount";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export function Component() {
  const user = useAppUser();

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-wrap mb-8">
        <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
          <PhWalletFill className="text-2xl text-blue-600" />
          <div>
            <div className="text-sm">Balance</div>
            <div className="font-semibold">${user?.balance}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
          <RiMoneyDollarCircleFill className="text-2xl text-blue-600" />
          <div>
            <div>Profits</div>
            <div className="font-semibold">${user?.balance}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
          <FluentMoney16Filled className="text-2xl text-blue-600" />
          <div>
            <div>Investments</div>
            <div className="font-semibold">${user?.balance}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
          <Fa6SolidMoneyCheck className="text-2xl text-blue-600" />
          <div>
            <div>Withdrawals</div>
            <div className="font-semibold">${user?.balance}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
          <Fa6SolidMoneyBills className="text-2xl text-blue-600" />
          <div>
            <div>Deposits</div>
            <div className="font-semibold">${user?.balance}</div>
          </div>
        </div>
      </div>

      <AdvancedRealTimeChart
        width="100%"
        height="800px"
        allow_symbol_change
        copyrightStyles={{ parent: { display: "none" } }}
      />
    </>
  );
}
