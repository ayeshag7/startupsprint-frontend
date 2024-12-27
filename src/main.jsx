import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { DarkModeProvider } from './context/DarkModeContext';  // Corrected import (no `.jsx` extension needed)
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </Provider>
);
