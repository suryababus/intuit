import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { useTheme } from "../hooks/states/useTheme";
import { ErrorBoundry } from "../components/ErrorBoundry";

export const Route = createRootRoute({
  component: () => {
    const { theme } = useTheme();
    return (
      <div
        className={` ${theme} fixed h-screen w-screen bg-background text-foreground transition-colors duration-300 `}
      >
        <Navbar />
        <ErrorBoundry>
          <Outlet />
        </ErrorBoundry>
      </div>
    );
  },
});
