import { Footer } from "@components";
import { Header } from "@components";
import { Outlet } from "react-router-dom";
import { store } from "../store";
import { Provider } from "react-redux";
export default () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};
