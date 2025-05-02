// src/components/Footer/index.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        © {new Date().getFullYear()} Marianela Purretta // UTEAM
      </div>
      <div className={styles.icons}>
        <a href="https://github.com/MarianelaPurretta" target="_blank" rel="noopener">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/marianela-purretta-842bb0254/" target="_blank" rel="noopener">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/marianela_purretta/" target="_blank" rel="noopener">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
