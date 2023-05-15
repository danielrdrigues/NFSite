import type { Component } from 'solid-js';

import logo from './assets/NFlogo.png';
import styles from './App.module.css';
import Header from './components/Header';


const App: Component = () => {
  return (
    
    <div class={styles.App}>
      <Header></Header>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Faça sua história, acesse nosso Discord!
        </p>
        {/* <a
          class={styles.link}
          href="https://discord.gg/nafaixa"
          target="_blank"
          rel="nfsite" >
          Discord
        </a> */}
      </header>
    </div>
  );
};

export default App;
