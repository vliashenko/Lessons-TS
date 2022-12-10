import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Fetch from './components/Fetch/Fetch';

function App() {

  const [user, setUser] = useState<string>("");

  return (
    <>
      <Form setUser={setUser}/>
      {user && <Fetch username={user}/>}
    </>
  );
}

export default App;
