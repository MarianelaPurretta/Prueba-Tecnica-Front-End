import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () =>
  axios.get(`${BASE}/posts`).then(res => res.data);

export const fetchComments = postId =>
  axios.get(`${BASE}/posts/${postId}/comments`).then(res => res.data);

// Opciones para CRUD futuro:
export const createPost = data =>
  axios.post(`${BASE}/posts`, data).then(res => res.data);

export const updatePost = (id, data) =>
  axios.put(`${BASE}/posts/${id}`, data).then(res => res.data);

export const deletePost = id =>
  axios.delete(`${BASE}/posts/${id}`).then(res => res.data);
