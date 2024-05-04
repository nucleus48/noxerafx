import UserAccountProvider from "@/providers/UserAccountProvider";
import { UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export function Component() {
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
      </header>
      <main className="bg-gray-50 px-4 py-8">
        <Outlet />
      </main>
    </UserAccountProvider>
  );
}
