import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const mizu = document.getElementById('root') as HTMLElement
console.log(mizu)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
