import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { isProduction } from "../utils/env";
import { onError } from "@apollo/client/link/error";
import { useToast } from "../components/toast";

const domain = isProduction ? "" : "http://localhost:4000/";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const toast = useToast.getState();
  console.log({ graphQLErrors, networkError });
  if (graphQLErrors) {
    graphQLErrors.forEach(() =>
      toast.showToast("Unexpected Error: We are working on it.", "error")
    );
    // TODO: log to error monitoring service
  } else if (networkError) {
    if (!window.navigator.onLine) {
      toast.showToast(
        "Network error: Please check your internet connection",
        "error"
      );
    } else {
      toast.showToast(
        "Network error: Sorry our server is down. Please try again later",
        "error"
      );
    }
  }
});

const httpLink = new HttpLink({ uri: domain });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

type AppApolloProviderProps = {
  children: React.ReactNode;
};

export const AppApolloProvider = ({ children }: AppApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
