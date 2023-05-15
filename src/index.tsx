/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.css';
import App from './App';
import About from './About';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => 
<Router>
  <Routes>
    <Route path="/" component={App} /> {/* 👈 Define the home page route */}
    <Route path="/about" component={About} />
  </Routes>
</Router>
, root!);
