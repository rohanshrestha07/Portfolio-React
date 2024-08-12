
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoute from './Routes/AppRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoute></AppRoute>
      </BrowserRouter>
    </>
  )
}

export default App
