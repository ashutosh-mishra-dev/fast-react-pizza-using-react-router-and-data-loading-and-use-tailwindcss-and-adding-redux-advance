//------------------------- react router v 6.4  --------------------------------------------------------------------
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./ui/Home";
// import Menu, { Loader as menuLoader } from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
// import CreateOrder from "./features/order/CreateOrder";
// import Order from "./features/order/Order";
// import AppLayout from "./ui/AppLayout";

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/menu",
//         element: <Menu />,
//         loader: menuLoader,
//       },
//       { path: "/cart", element: <Cart /> },
//       { path: "/order/new", element: <CreateOrder /> },
//       { path: "/order/:orderId", element: <Order /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

//------------------------- react router v 7.9 --------------------------------------------------------------------

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home";
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    Component: AppLayout, // layout component
    ErrorBoundary: Error,
    children: [
      { index: true, Component: Home }, // / -> Home
      {
        path: "menu",
        Component: Menu,
        loader: menuLoader, // loader for menu data
      },
      { path: "cart", Component: Cart },
      { path: "order/new", Component: CreateOrder },
      { path: "order/:orderId", Component: Order },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
