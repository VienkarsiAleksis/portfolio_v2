import '../css/app.css';

import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Projects from './pages/Projects';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const Page = path === '/projects' ? Projects : Home;

createRoot(document.getElementById('root')).render(<Page />);