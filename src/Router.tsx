import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./components/Layout";
import News from "./pages/news";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/news/:id',
        element: <News />
      }
    ]
  }
])

export { router }
