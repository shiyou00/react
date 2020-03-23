import React from 'react';
import {ThemeContext} from './theme-context';

function ThemeButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({themesObj, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: themesObj.background}}>
          我是按钮2
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeButton;
