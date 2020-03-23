import React,{useState} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeButton from './themed-button';

function App() {
  const [themesObj, setThemesObj] = useState(themes.dark);

  const toggleTheme = ()=>{
    setThemesObj(themesObj === themes.dark ? themes.light : themes.dark);
  };

  return (
    <div>
      <ThemeContext.Provider value={{themesObj,toggleTheme}}>
        <ThemeButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
