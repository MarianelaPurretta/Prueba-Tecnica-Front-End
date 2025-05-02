// src/components/Parent/index.jsx

import React, { useEffect, useState } from 'react';
import styles from './Parent.module.css';
import { fetchPosts, deletePost as apiDeletePost } from '../../api/jsonPlaceholder';
import PostForm from '../PostForm';
import Child from '../Child';

export default function Parent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carga inicial de posts
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Handler para crear un post nuevo
  const handleCreate = newPost => {
    // jsonplaceholder devuelve un objeto con id simulado
    setPosts(prev => [newPost, ...prev]);
  };

  // Handler para eliminar un post
  const handleDelete = async id => {
    try {
      await apiDeletePost(id);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Cargando posts…</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>

      {/* Formulario para crear */}
      <PostForm onCreate={handleCreate} />

      {/* Lista de posts */}
      {posts.length === 0 ? (
        <p className={styles.empty}>No hay posts disponibles.</p>
      ) : (
        posts.map(post => (
          <Child
            key={post.id}
            post={post}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}
