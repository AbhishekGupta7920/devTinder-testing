import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from "./utils/appStore";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Provider store= {appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
