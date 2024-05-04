import LoadingIndicator from "@/components/LoadingIndicator";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  useUser,
} from "@clerk/clerk-react";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function Component() {
  return (
    <ClerkProvider
      signUpUrl="/signup"
      signInUrl="/signin"
      signUpFallbackRedirectUrl="/dashboard"
      signInFallbackRedirectUrl="/dashboard"
      appearance={{
        layout: {
          logoImageUrl: "/assets/img/logo.svg",
          logoLinkUrl: "/index.html",
        },
      }}
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    >
      <ClerkLoading>
        <LoadingIndicator />
      </ClerkLoading>
      <ClerkLoaded>
        <Protected>
          <Outlet />
        </Protected>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

const privateRoutes = [
  "/dashboard",
  "/profile",
  "/profile/security",
];

function Protected({ children }: PropsWithChildren) {
  const { isSignedIn } = useUser();
  const { pathname } = useLocation();
  const isPrivate = privateRoutes.includes(pathname);

  if (isSignedIn && !isPrivate) return <Navigate to="/dashboard" replace />;
  else if (!isSignedIn && isPrivate) return <Navigate to="/signin" replace />;

  return <>{children}</>;
}
