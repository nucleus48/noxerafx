import { SignIn } from "@clerk/clerk-react";

export function Component() {
  return (
    <main className="h-screen min-h-max grid place-items-center">
      <div className="py-16">
        <SignIn />
      </div>
    </main>
  );
}
