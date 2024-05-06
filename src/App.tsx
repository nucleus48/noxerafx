import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route lazy={() => import("@/routes/layout")}>
      <Route path="/signup" lazy={() => import("@/routes/signup")} />
      <Route path="/signin" lazy={() => import("@/routes/signin")} />
      <Route lazy={() => import("@/routes/(private)/layout")}>
        <Route
          path="/dashboard"
          lazy={() => import("@/routes/(private)/dashboard")}
        />
        <Route
          path="/profile"
          lazy={() => import("@/routes/(private)/profile")}
        />
        <Route
          path="/profile/security"
          lazy={() => import("@/routes/(private)/security")}
        />
        <Route
          path="/deposit"
          lazy={() => import("@/routes/(private)/deposit")}
        />
        <Route
          path="/withdraw"
          lazy={() => import("@/routes/(private)/withdraw")}
        />
        <Route
          path="/history"
          lazy={() => import("@/routes/(private)/history")}
        />
        <Route
          path="/investment"
          lazy={() => import("@/routes/(private)/investment")}
        />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<LoadingIndicator />} />
  );
}
