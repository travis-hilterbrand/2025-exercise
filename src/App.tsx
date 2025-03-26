import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CardSection } from "./components/CardSection";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h3>App</h3>
        <CardSection />
      </div>
    </QueryClientProvider>
  );
}

export default App;
