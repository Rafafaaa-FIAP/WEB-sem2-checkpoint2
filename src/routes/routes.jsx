import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App'
import Error from './Error'
import Home from './Home'
import Produtos from './Produtos'
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Home', element: <Home /> },
      { path: '/Produtos', element: <Produtos/>},
      { path: '/Contact', element: <Contact/>}
    ]
  }
])


function Routes() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes