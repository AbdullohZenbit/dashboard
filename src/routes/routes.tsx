import { createBrowserRouter } from "react-router-dom";
import { LayoutAdmin } from "../layout";
import { IncomeDocs } from "../pages";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAdmin />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <IncomeDocs />,
      },
      {
        path: "/incoming",
        element: <IncomeDocs />,
      },
      {
        path: "/outgoing",
        element: <IncomeDocs />,
      },
      {
        path: "/saved",
        element: <IncomeDocs />,
      },
      {
        path: "/deleted",
        element: <IncomeDocs />,
      },
    ],
  },
]);
