import DefaultLayout from "./layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Postlist from "./pages/PostList"
import Post from "./pages/Post"

export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" element={<HomePage />} />
            <Route path="/chisiamo" Component={ChiSiamo} />
            <Route path="/postlist" Component={Postlist} />
            <Route path="/posts/:id" Component={Post} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

