import React from 'react';
import STORE from './store.js';
import List from './composition/List.js'


function App() {
  let result="result"

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <List>{STORE}</List>
    </main>
  );
}

export default App;