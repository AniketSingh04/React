import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    tagTypes: ['Post'], // Add tag types
    endpoints: (builder) => ({
        getApiByName: builder.query({
            query: () => '/posts',
            providesTags: ['Post'], // Provide tags
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: ['Post'], // Invalidate tags
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'], // Invalidate tags
        }),
        updatePost: builder.mutation({
            query: (updatedPost) => ({
                url: `/posts/${updatedPost.id}`,
                method: 'PUT',
                body: updatedPost,
            }),
            invalidatesTags: ['Post'], // Invalidate tags
        }),
    }),
});

export const {
    useGetApiByNameQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,
} = api;
