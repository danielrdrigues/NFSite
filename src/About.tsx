import type { Component } from 'solid-js';

import logo from './assets/NFlogo.png';
import styles from './App.module.css';
import Header from './components/Header';


const About: Component = () => {
  return (
    <div class={styles.App}>
        <h1>ABOUT</h1>
    </div>
  );
};

export default About;
