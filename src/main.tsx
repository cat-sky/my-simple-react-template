import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ScreenIndexRouter from "@/screens/index-router";
import '@/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScreenIndexRouter/>
        </BrowserRouter>
    </React.StrictMode>,
)
