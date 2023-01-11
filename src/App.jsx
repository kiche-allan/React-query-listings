import { QueryClientProvider } from "react-query";


export default function App() {
  return (
    //Provide the client to your app
    <QueryClientProvider client = {queryClient}>
    <Todos />
    </QueryClientProvider>
  )
}
