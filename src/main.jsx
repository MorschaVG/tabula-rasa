import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCountProvider from "./context/ClickCountProvider.jsx";



createRoot(document.getElementById('root')).render(
<ClickCountProvider>
    <App />
</ClickCountProvider>
)
