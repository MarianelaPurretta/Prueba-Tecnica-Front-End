// src/components/Child/index.jsx

import React, { useState } from 'react';
import styles from './Child.module.css';
import Grandchild from '../Grandchild';

export default function Child({ post, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onUpdate(post.id, { title, body });
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input
            className={styles.input}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className={styles.textarea}
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className={styles.actions}>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => onDelete(post.id)}>Eliminar</button>
          </div>
        </>
      )}
      <Grandchild postId={post.id} />
    </div>
  );
}
