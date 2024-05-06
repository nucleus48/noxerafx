import {
  BiArrowLeft,
  Fa6SolidMoneyBills,
  Fa6SolidMoneyCheck,
  IconamoonProfileFill,
  MaterialSymbolsDashboard,
  MaterialSymbolsHistory,
  MaterialSymbolsMenu,
  MaterialSymbolsSecurity,
  StreamlineInvestmentSelectionSolid,
} from "@/components/Icons";
import UserAccountProvider from "@/providers/UserAccount";
import { UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Component() {
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpenNav(false), [pathname]);

  return (
    <UserAccountProvider>
      <header className="px-4 py-2 flex items-center gap-2 border-b">
        <img src="/assets/img/logo.svg" alt="logo" className="w-4" />
        <div className="text-xl font-bold mr-auto">NoxeraFX</div>
        <UserButton
          afterSignOutUrl="/index.html"
          userProfileMode="navigation"
          userProfileUrl="/profile"
        />
        <button onClick={() => setOpenNav(true)}>
          <MaterialSymbolsMenu className="text-3xl" />
        </button>
      </header>
      <main className="bg-gray-50 px-4 py-8 min-h-screen">
        <Outlet />
      </main>

      <nav
        onClick={() => setOpenNav(false)}
        className={`fixed text-gray-700 transition-all h-screen w-screen top-0 left-0 backdrop-brightness-50 ${
          openNav ? "opacity-100 z-50" : "opacity-0 -z-50"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`transition-all h-screen bg-white w-max p-4 ${
            !openNav && "-translate-x-full"
          }`}
        >
          <div className="text-end">
            <button onClick={() => setOpenNav(false)}>
              <BiArrowLeft className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 font-medium pt-8 pl-6 pr-12">
            <li>
              <Link to="/dashboard" className="flex items-center gap-2">
                <MaterialSymbolsDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2">
                <IconamoonProfileFill />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/investment" className="flex items-center gap-2">
                <StreamlineInvestmentSelectionSolid />
                <span>Investment</span>
              </Link>
            </li>
            <li>
              <Link to="/withdraw" className="flex items-center gap-2">
                <Fa6SolidMoneyCheck />
                <span>Withdraw</span>
              </Link>
            </li>
            <li>
              <Link to="/deposit" className="flex items-center gap-2">
                <Fa6SolidMoneyBills />
                <span>Deposit</span>
              </Link>
            </li>
            <li>
              <Link to="/history" className="flex items-center gap-2">
                <MaterialSymbolsHistory />
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link to="/profile/security" className="flex items-center gap-2">
                <MaterialSymbolsSecurity />
                <span>Security</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </UserAccountProvider>
  );
}
