import React, { useEffect } from 'react';
import styles from './Child.module.css';
import Grandchild from '../Grandchild';

export default function Child({ post, onDelete }) {
  useEffect(() => {
    console.log('Child recibió post:', post.id);
  }, [post]);

  return (
    <div className={styles.card}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post.id)}>Eliminar</button>
      <Grandchild postId={post.id} />
    </div>
  );
}
