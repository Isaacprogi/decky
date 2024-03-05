import React, { useEffect, useState } from 'react';


interface ThemeSwitcherProps {
    theme:string,
    handleChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void
}

const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({theme,handleChange}) => {

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <select className='w-full max-w-[20rem]' value={theme} onChange={handleChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="Cloudscape Dream">Cloudscape Dream</option>
    </select>
  );
};

export default ThemeSwitcher;
