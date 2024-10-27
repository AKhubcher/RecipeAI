import React from 'react';

function Settings({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="page-container">
      <h2>Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="theme">Theme</label>
          <select id="theme" name="theme" value={theme} onChange={toggleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group notifications-group">
          <label htmlFor="notifications">Notifications</label>
          <input type="checkbox" id="notifications" name="notifications" />
        </div>
        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
