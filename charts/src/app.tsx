import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
