import React from 'react'
import ReactDOM from 'react-dom/client'
//redux Provider
import { Provider } from 'react-redux'
//redux store
import store from './store.js'
// react router
import { BrowserRouter } from 'react-router-dom'
//component
import App from './App.jsx'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
