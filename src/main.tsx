import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import './colors.css';
import Router from './routes.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
