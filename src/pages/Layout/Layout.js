import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import AddExpense from '../AddExpense';
import Dashboard from '../Dashboard';
import AddGroup from '../AddGroup';
import './_layout.scss';

function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="layout-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/addgroup" element={<AddGroup />} />
      </Routes>
    </div>
  );
}

export default Layout;
