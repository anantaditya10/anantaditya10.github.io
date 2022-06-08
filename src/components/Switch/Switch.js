/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './switch.scss';

function Switch({ isOn, handleToggle }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        className={`react-switch-label ${theme === 'dark' ? 'switch-color-on' : 'switch-color-off'}`}
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
        <p className="text mode-text">{theme === 'dark' ? 'dark' : 'light'}</p>
      </label>
    </div>
  );
}

export default Switch;
