import { UserProfile } from "@clerk/clerk-react";

export function Component() {
  return (
    <UserProfile
      appearance={{
        elements: {
          navbarMobileMenuRow: {
            height: "0",
            padding: "0",
          },
          navbar: { display: "none" },
          rootBox: { margin: "0 auto" },
        },
      }}
      path="/profile"
      routing="path"
    />
  );
}
