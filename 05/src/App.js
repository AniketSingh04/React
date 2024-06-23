import React from 'react';
import { useGetApiByNameQuery } from './services/api';

const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useGetApiByNameQuery();

  return (
    <div>
      <h1>React RTK-Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && !isLoading && <h2>Fetching...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {isSuccess && data && (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;


