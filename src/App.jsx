// import { QueryClient, QueryClientProvider, useMutation, useQuery } from "react-query";
// import { ReactQueryDevtools } from 'react-query/devtools'
// import { getTodos, postTodo } from '../my-api'

import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

// //Create an instnce of  QueryClient called queryclient.

// const queryClient = new QueryClient();

// export default function App() {

//   //import two functions from a module called 'my-api
// //  that are responsible for fetching and updating todos
  
//   return (
//     //Provide the client to your app
//     //this component provides a query client to all of the child components
//     // everything is wrapped on this main component and passed through using queryClient. This allows the app to access the client.
//     <QueryClientProvider client = {queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//     <Todos />
//     </QueryClientProvider>
//   )
// }

// function Todos() {
//   //useQueryClient hook to access the client
//   const queryClient = useQueryClient();

//   //useQuery hook to fetch todos to get queries
//   // the usequery returns an object that contains the ata and status of the query. It maps over the data and dispalys a list of todos
//   const query = useQuery("todos", getTodos);

//   //useMutation hook to update todos
//   // It also passes a cofig object that specifies a callback function to be invoked when the mutation is successful. In this case the callback function is 'queryclient.invalidateQueries('todos')''
//   const mutation = useMutation(postTodo, {
//     onSuccess: () => {
//       //invalidate the todos query to refetch the todos

//       queryClient.invalidateQueries("todos");
//     }
//   })

//   return (
//     <div>
//       <ul>
//         {query.data.map(todo => (
//           <li key = {todo.id}>{todo.title}</li>
//         ))}
//       </ul>

//       <button onClick={() => {
//         mutation.mutate({
//           id: Date.now(),
//           title: 'Do Laundry'
//         })
//       }}> Add Todo</button>
//     </div>
//   )

// }
// render(<App />, document.getElementById('root'))


// This is a functional component in React called "App". It uses the Hook "useState" to track the value of a "page" state variable, which is initially set to "planets". The component renders a header, a Navbar component that takes a "setPage" prop, and a div with the class "content". Inside the content div, it renders a component called "Planets" or "People" based on the value of the "page" state variable. The ternary operator {page === 'planets' ? <Planets /> : <People />} is used to conditionally render either the Planets component or the People component.
export default function App() {
  const [page, setPage] = useState('planets');
  return (
    <>
    <h1>Star Wars Info</h1>
    <Navbar setPage = {setPage}/>
    <div className="content">
      {page === 'planets' ? <Planets /> : <People />}
     
    </div>
    </>
  )
}
