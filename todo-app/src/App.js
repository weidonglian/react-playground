import React from 'react';
import './App.css';
import { StateProvider } from './utils/state'
import { ThemeButton } from './components/Counter'

const App = () => {
  const initialState = {
    theme: { primary: 'green' }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeButton />
    </StateProvider>
  );
}

export default App;
