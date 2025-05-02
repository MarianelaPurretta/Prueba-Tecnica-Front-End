import React, { useEffect, useState } from 'react';
import styles from './Grandchild.module.css';
import { fetchComments } from '../../api/jsonPlaceholder';

export default function Grandchild({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId).then(setComments);
  }, [postId]);

  return (
    <div className={styles.comments}>
      <h3>Comentarios</h3>
      <ul>
        {comments.slice(0, 5).map(c => (
          <li key={c.id}>{c.body}</li>
        ))}
      </ul>
    </div>
  );
}
