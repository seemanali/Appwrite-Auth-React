import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import comp from './components/index.js'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import { Provider } from 'react-redux'
import reduxStore from './store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <comp.Dashboard />
      },
      {
        path: "/signup",
        element: <comp.SignUpForm />
      },
      {
        path: "/login",
        element: <comp.LoginForm />
      },
      {
        path: "/logout",
        element: <comp.Logout />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
