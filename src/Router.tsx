import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { addAppNavbar } from "./layouts/Navbar";
import { UseDataFetch } from "./pages/UseDataFetch";
import { UseDeepEffect } from "./pages/UseDeepEffect";
import { UseCombinedRef } from "./pages/UseCombinedRef";
import { UseComponentUpdate } from "./pages/useComponentUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: addAppNavbar(() => null),
  },
  {
    path: "/use-deep-effect",
    element: addAppNavbar(UseDeepEffect),
  },
  {
    path: "/use-combined-ref",
    element: addAppNavbar(UseCombinedRef),
  },
  {
    path: "/use-data-fetch",
    element: addAppNavbar(UseDataFetch),
  },
  {
    path: "/use-component-update",
    element: addAppNavbar(UseComponentUpdate),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
