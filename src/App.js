import { useContext } from 'react';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {ctx.isLoggedin && <Home />}
        {!ctx.isLoggedin && <Login />}
      </main>
    </>
  );
}

export default App;
