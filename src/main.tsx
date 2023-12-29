import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokeProvider from "./contexts/PokeProvider";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Layout from "./components/Layout";
import PokeSelection from "./views/PokeSelection";
import PokeDetails from "./views/PokeDetails";
import ErrorBoundary from "./views/ErrorBoundary";

const rand = Math.floor(Math.random() * 1026) + 1;
const url = `https://pokeapi.co/api/v2/pokemon/${rand}`

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          loader: async() => {
            return fetch(url)
              .then(res => res.json());
          },
          Component: Home,
        },
        {
          path: "pokemon",
          Component: PokeSelection,
          children: [
            {
              path: ":name",
              loader: async ({ params }) => {
                return fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
                  .then(res => res.json());
              },
              element: <PokeDetails />,
            },
          ],
        },
      ],
    }],
  {
    basename: "/react_ii-challenge_03",
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokeProvider>
      <RouterProvider router={router} />
    </PokeProvider>
  </React.StrictMode>,
);
