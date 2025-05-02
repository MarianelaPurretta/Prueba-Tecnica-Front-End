// src/api/jsonPlaceholder.js

import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

/**
 * Obtiene todos los posts.
 * @returns {Promise<Array>} Array de posts
 */
export const fetchPosts = () =>
  axios
    .get(`${BASE}/posts`)
    .then(res => res.data);

/**
 * Obtiene los comentarios de un post dado su ID.
 * @param {number} postId — ID del post
 * @returns {Promise<Array>} Array de comentarios
 */
export const fetchComments = postId =>
  axios
    .get(`${BASE}/posts/${postId}/comments`)
    .then(res => res.data);

/**
 * Crea un nuevo post.
 * @param {{ title: string, body: string }} data — Datos del post
 * @returns {Promise<Object>} Post creado (con ID simulado)
 */
export const createPost = data =>
  axios
    .post(`${BASE}/posts`, data)
    .then(res => res.data);

/**
 * Actualiza un post existente.
 * @param {number} id — ID del post a actualizar
 * @param {{ title?: string, body?: string }} data — Campos a modificar
 * @returns {Promise<Object>} Post actualizado
 */
export const updatePost = (id, data) =>
  axios
    .put(`${BASE}/posts/${id}`, data)
    .then(res => res.data);

/**
 * Elimina un post por ID.
 * @param {number} id — ID del post a eliminar
 * @returns {Promise<void>}
 */
export const deletePost = id =>
  axios
    .delete(`${BASE}/posts/${id}`)
    .then(res => res.data);
