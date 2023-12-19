import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Layout from "./components/Layout";
import News from "./pages/news";
import Category from "./pages/category";
import Tag from "./pages/tag";
import Newsletter from "./pages/newsletter";

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
      },
      {
        path: 'category/:id',
        element: <Category />
      },
      {
        path: 'tag/:id',
        element: <Tag />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      }
    ]
  }
])

export { router }
