import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { About, Application, Support, Home, PrivcyPolicy } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Application />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/Support",
        element: (
          <Suspense fallback={<Loader />}>
            <Support />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/policy",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivcyPolicy />
          </Suspense>
        ),
      },
    ],
  },
]);
