React Query
React query is a library for fetching and managing the state of asynchronous data in React applications. It is designed to work with both React’s built-in hooks and the higher order components that handle common task related to fetching and managing data such as caching, pagination, retries and more. 
It allows developers to fetch and manage data in a way that is simple, efficient, and easy to understand while also providing a powerful set of features for more advanced ue cases. 


the major concepts of react include:
    1. Queries
    2. Mutations
    3. Query Invalidations

    Query is a way to fetch and cache data . Can be created using usequery hook and passing it as a key tha represnts the data you want to fetch

    const {data, status} = useQuery('users', () =>
    fetch('https://my-api.com/users'))

    Mutations - A mutation is a way to update data. U can create a mutation by calling the 'useMutation' hook and passing it as a function that performs the update. 

    const [updateUser, {status}] = useMutation(async (id, name) => {
        await fetch(`https://my-api.com/users/${id}`, {
            method : 'PATCH',
            body: JSON.stringify({ name })
        });
    });

    Configs - U can configure various aspects of React Query like caching, background updates, and more by passing a config object when you call `useQuery` or `useMutation`

    const {data, status} = useQuery('users', () =>
    
    fetch('https://my-api.com/users'), {
        refetchInterval: 0 * 1000, 
    }
    );

    Statuses - React query keeps track of the status of each query and mutation, such as whether it's loading, error or sucess. U can use these statuses to control the UI of your application

    const {data, status} = useQuery('users', () =>
    fetch(''https://my-api.com/users'));

    )
    if (status === 'loading') {
  return <LoadingSpinner />;
}

return <div>{data.map(user => <User key={user.id} {...user} />)}</div>