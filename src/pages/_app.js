import { Provider } from "react-redux";
import store from "../redux/store";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}
