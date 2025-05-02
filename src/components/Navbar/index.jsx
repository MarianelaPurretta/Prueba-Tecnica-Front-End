// src/components/Navbar/index.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Marianela Purretta</div>
      <div className={styles.icons}>
        <a href="https://github.com/MarianelaPurretta" target="_blank" rel="noopener">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/marianela-purretta-842bb0254/" target="_blank" rel="noopener">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/marianela_purretta/" target="_blank" rel="noopener">
          <FaInstagram size={24} />
        </a>
      </div>
    </nav>
  );
}
