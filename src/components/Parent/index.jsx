// src/components/Parent/index.jsx

import React, { useEffect, useState } from 'react';
import styles from './Parent.module.css';
import {
  fetchPosts,
  deletePost as apiDelete,
  updatePost as apiUpdate,
} from '../../api/jsonPlaceholder';
import PostForm from '../PostForm';
import Child from '../Child';

export default function Parent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(data => data.sort((a, b) =>
        a.title.localeCompare(b.title, 'es', { sensitivity: 'base' })
      ))
      .then(sorted => setPosts(sorted))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = newPost =>
    setPosts(prev => [newPost, ...prev].sort((a, b) =>
      a.title.localeCompare(b.title, 'es', { sensitivity: 'base' })
    ));

  const handleDelete = async id => {
    await apiDelete(id);
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const handleUpdate = async (id, fields) => {
    const updated = await apiUpdate(id, fields);
    setPosts(prev => 
      prev
        .map(p => p.id === id ? updated : p)
        .sort((a, b) =>
          a.title.localeCompare(b.title, 'es', { sensitivity: 'base' })
        )
    );
  };

  // Agrupa por primera letra
  const groups = posts.reduce((acc, post) => {
    const L = post.title[0].toUpperCase();
    acc[L] = acc[L] || [];
    acc[L].push(post);
    return acc;
  }, {});

  if (loading) return <p className={styles.loading}>Cargando…</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>POSTS</h1>
      <PostForm onCreate={handleCreate} />

      {Object.keys(groups).sort().map(letter => (
        <section
          key={letter}
          className={`${styles.group} ${styles[`group${letter}`] || ''}`}
        >
          <header className={styles.groupHeader}>{letter}</header>
          <div className={styles.cardsGrid}>
            {groups[letter].map(post => (
              <Child
                key={post.id}
                post={post}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
