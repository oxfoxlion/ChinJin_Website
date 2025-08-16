import './App.css'
import { RouterProvider } from 'react-router-dom'

import {route} from './router.tsx'

function App() {

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
