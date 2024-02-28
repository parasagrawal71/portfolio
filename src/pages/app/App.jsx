import React from "react";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT ALL PAGES HERE //
import MainPage from "pages/main/Main";
import GlobalContextProvider from "contexts/GlobalContextProvider";
import ProjectDetails from "sections/projectDetails/ProjectDetails";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import { menuItems } from "config/header";
import "./App.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/project",
      element: <ProjectDetails />,
    },
  ]);

  function getSectionNameByHash() {
    const { hash } = window.location || {};
    return menuItems?.filter((mI) => mI.hash === hash)?.[0]?.name;
  }

  return (
    <main className="app" id="app">
      <GlobalContextProvider initialState={{ activeSectionName: getSectionNameByHash() }}>
        <Helmet>
          <title>{fullName}</title>
        </Helmet>

        <RouterProvider router={router} />
      </GlobalContextProvider>
    </main>
  );
};

export default App;
