import { QueryClientProvider, useMutation, useQuery } from "react-query";


export default function App() {

  //import two functions from a module called 'my-api
//  that are responsible for fetching and updating todos


  //Create an instnce of  QueryClient called queryclient.

  const queryClient = new QueryClient();
  return (
    //Provide the client to your app
    //this component provides a query client to all of the child components
    // everything is wrapped on this main component and passed through using queryClient. This allows the app to access the client.
    <QueryClientProvider client = {queryClient}>
    <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  //useQueryClient hook to access the client
  const queryClient = useQueryClient();

  //useQuery hook to fetch todos to get queries
  const query = useQuery("todos", fgetTodos);

  //useMutation hook to update todos
  const Mutation = useMutation(postTodo, {
    onSuccess: () => {
      //invalidate the todos query to refetch the todos
      queryClient.invalidateQueries("todos");
    }
  })
}
