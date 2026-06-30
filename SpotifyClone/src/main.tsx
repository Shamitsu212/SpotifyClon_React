import { createRoot } from 'react-dom/client'

import './index.css'
import './assets/fonts/fonts.css'
import './assets/theme/theme.css'

import App from './App.tsx'

import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { SearchProvider } from './context/SearchContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>

        <Provider store={store}>
    
            <ThemeProvider>
                <SearchProvider>
                    <App />
                </SearchProvider>
            </ThemeProvider>
            
        </Provider>

    </BrowserRouter>
    
)
