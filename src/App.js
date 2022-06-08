import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createUserData } from './services/userDataService';
import './styles/_app.scss';
import Layout from './pages/Layout';
import { ThemeContext } from './contexts/ThemeContext';
import { userDataSource } from './utils/dataSource';

import Switch from './components/Switch/Switch';
import Navbar from './components/NavBar/NavBar';
import localStorageData from './utils/localStorageData';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [value, setValue] = useState(false);
  const userData = localStorageData('GET', 'friendList');
  createUserData(userDataSource, userData);
  const switchMode = () => {
    setValue(!value);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    localStorageData('SET', 'theme', theme);
  }, [theme]);
  return (
    <div className={theme}>
      <div className="container">
        <Router>
          <Navbar />
          <Layout />
        </Router>
      </div>
      <Switch isOn={value} handleToggle={switchMode} />
    </div>
  );
}

export default App;
