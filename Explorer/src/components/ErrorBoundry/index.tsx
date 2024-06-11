import React, { ReactNode } from "react";
import SomethingWentWrong from "./something-went-wrong";

interface ErrorBoundryProps {
  children: ReactNode;
}

export class ErrorBoundry extends React.Component<ErrorBoundryProps> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error: unknown) {
    // TODO: send error to error reporting service
    console.error(error);

    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <SomethingWentWrong />;
    }
    return this.props.children;
  }
}
