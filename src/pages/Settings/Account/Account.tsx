import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import ThemeSwitcher from '../../../Components/ThemeSwitcher/ThemeSwitcher';

type AccountPreferencesState = {
  username: string;
  email: string;
  newPassword: string;
  enable2FA: boolean;
  language: string;
  timeZone: string;
  theme: string;
};

const AccountPreferences: React.FC = () => {
  const [formState, setFormState] = useState<AccountPreferencesState>({
    username: '',
    email: '',
    newPassword: '',
    enable2FA: false,
    language: 'English',
    timeZone: 'GMT',
    theme: 'light',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Account Preferences updated with:', formState);
    alert('Account Preferences updated successfully!');
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;
    setFormState(prevState => ({
      ...prevState,
      theme: newTheme,
    }));
  };

  return (
    <div className="w-full min-h-full text-t1 p-4 bg-b1">
      <h2 className="text-2xl w-full border-b pb-[.5rem] border-b3 font-semibold">Account & Preferences</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        {/* User Information Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-t1">User Information</h3>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Username"
            className="mt-1 block w-full max-w-[20rem] bg-b2 border-b3 rounded-md shadow-sm py-2 px-3 text-t1"
          />
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="mt-1 block w-full max-w-[20rem] bg-b2 border-b3 rounded-md shadow-sm py-2 px-3 text-t1"
          />
        </div>

        {/* Security Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-t1">Security</h3>
          <input
            type="password"
            name="newPassword"
            value={formState.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="mt-1 block w-full max-w-[20rem] bg-b2 border-b3 rounded-md shadow-sm py-2 px-3 text-t1"
          />
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              name="enable2FA"
              checked={formState.enable2FA}
              onChange={handleChange}
              className="text-l1 border-b3 rounded"
            />
            <span className="ml-2 text-t2">Enable Two-Factor Authentication</span>
          </label>
        </div>

        {/* Preferences Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-t1">Preferences</h3>
          <select
            name="language"
            value={formState.language}
            onChange={handleChange}
            className="mt-1 block w-full max-w-[20rem] bg-b2 border-b3 rounded-md shadow-sm py-2 px-3 text-t1"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more languages as needed */}
          </select>
          <select
            name="timeZone"
            value={formState.timeZone}
            onChange={handleChange}
            className="mt-1 block w-full max-w-[20rem] bg-b2 border-b3 rounded-md shadow-sm py-2 px-3 text-t1"
          >
            <option value="GMT">GMT</option>
            <option value="EST">EST</option>
            {/* Add more time zones as needed */}
          </select>
        </div>

        {/* Interface Customization Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-t1">Interface Customization</h3>
          <ThemeSwitcher theme={formState.theme} handleChange={handleThemeChange} />
        </div>

        <button type="submit" className="inline-flex items-center w-[10rem] justify-center gap-2 px-4 py-2 bg-t2 hover:bg-t3 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-t2 mt-4">
          <FaSave />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountPreferences;
