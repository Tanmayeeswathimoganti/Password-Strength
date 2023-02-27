import React  from 'react';
import './App.css';
import PasswordChecker from './components/PasswordChecker';
import 'h8k-components';

const title = "Password Strength";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <PasswordChecker/>
    </div>
  );
}

export default App;
