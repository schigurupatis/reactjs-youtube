import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Results from "./components/Results";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <Watch /> },
        { path: "results", element: <Results /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
