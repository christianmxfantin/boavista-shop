import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const persistor = persistStore(store);

root.render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
