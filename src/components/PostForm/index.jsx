import React, { useState } from 'react';
import { createPost } from '../../api/jsonPlaceholder';
import styles from './PostForm.module.css';

export default function PostForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    const newPost = await createPost({ title, body });
    onCreate(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
