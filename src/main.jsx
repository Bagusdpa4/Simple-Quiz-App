import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store/store";
import { App } from "./routes/App";
import "./assets/css/index.css";

// Redux Persist
// import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Toaster />
        <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>,
);
