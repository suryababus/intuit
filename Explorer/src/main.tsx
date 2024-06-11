import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TanstackRouterProvider } from "./setup/router.tsx";
import { AppApolloProvider } from "./setup/apollo-client.tsx";
import { ToastProvider } from "./components/toast/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppApolloProvider>
      <ToastProvider />
      <TanstackRouterProvider />
    </AppApolloProvider>
  </React.StrictMode>
);
