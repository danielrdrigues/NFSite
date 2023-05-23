import type { Component } from 'solid-js';

import logo from './assets/NFlogo.png';
import styles from './App.module.css';
import Header from './components/Header';
import dLogo from './assets/discord.png'

const App: Component = () => {
  return (
    
    <div class={styles.App}>
      <Header></Header>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h1>Nova cidade Roleplay</h1>
        <p>
          Faça sua história, acesse nosso Discord!
        </p>
         <a
          class={styles.link}
          href="https://discord.gg/nafaixa"
          target="_blank"
          rel="nfsite" >
         <img class={styles.dLogo} src={dLogo} alt="Discord"/>  
        </a> 
        
      </header>
    </div>
  );
};

export default App;
