import DefaultLayout from "./layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Postlist from "./pages/PostList"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={HomePage} />
            <Route path="/ChiSiamo" Component={ChiSiamo} />
            <Route path="/PostList" Component={Postlist} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
