import React from 'react';
import './style/App.css';
import Logo from './assets/logo';
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <header>
        <Logo/>
      </header>
      <div class="wrapper">
        <Form/>
      </div>
    </div>
  );
}

export default App;
