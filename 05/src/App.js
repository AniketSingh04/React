import React from 'react';
import { useCreatePostMutation, useGetApiByNameQuery, useDeletePostMutation, useUpdatePostMutation } from './services/api';

const App = () => {
  const { data, error, isLoading, isSuccess, isFetching, refetch } = useGetApiByNameQuery();

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
      <div>
        <AddPost refetch={refetch} />
      </div>
    </div>
  );
};

const AddPost = ({ refetch }) => {
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const post = {
    id: 2,
    title: "Posted",
    author: "Aniket"
  };

  const postUpdate = {
    id: 2,
    title: "Updated",
    author: "momento"
  };

  const handlePost = async () => {
    await createPost(post);
    refetch();
  };

  const handleDelete = async () => {
    await deletePost(post.id);
    refetch();
  };

  const handleUpdate = async () => {
    await updatePost(postUpdate);
    refetch();
  };

  return (
    <>
      <button onClick={handlePost}>Add Post</button>
      <button onClick={handleDelete}>Delete Post</button>
      <button onClick={handleUpdate}>Update Post</button>
    </>
  );
};

export default App;
