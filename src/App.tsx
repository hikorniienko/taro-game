import './App.css';
import { createAccount, createSession, createEmailPasswordSession, deleteCurrentSession,  getTokents } from './api';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={() => createAccount('test@mail.com','pwonline12', 'test')}>Create Account</button>
      <button onClick={() => createEmailPasswordSession('test@mail.com', 'pwonline12')}>Login</button>
      <button onClick={() => deleteCurrentSession()}>Logout</button>
      <button onClick={() => getTokents()}>Get Tokens</button>

    </div>
  );
};

export default App;
