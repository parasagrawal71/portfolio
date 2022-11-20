import React from "react";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT ALL PAGES HERE //
import MainPage from "pages/main/Main";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import history from "routes/history";
import "./App.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <main className="app">
      <Helmet>
        <title>{fullName}</title>
      </Helmet>

      <RouterProvider router={router} />
    </main>
  );
};

export default App;
