import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store/index";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Provider } from "react-redux";

const EditPost = lazy(() => import("./pages/EditPost"));
const AddPost = lazy(() => import("./pages/AddPost"));
const Details = lazy(() => import("./pages/Details"));

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response(
      "Bad Request",
      { statusText: "please make sure to insert a right post id " },
      { status: 400 }
    );
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "post", element: <Home /> },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback={<div>looding please wait....</div>}>
            <EditPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "post/add",
        element: (
          <Suspense fallback={<div>looding please wait....</div>}>
            {" "}
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback={<div>looding please wait....</div>}>
            <Details />
          </Suspense>
        ),
        loader: postParamHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
