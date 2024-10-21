import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Notes from "./components/Notes"
import Note from "./components/Note"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>,
    },
    {
      path: "/Notes",
      element:
        <>
          <Navbar />
          <Notes />
          <Footer />
        </>,
    },
    {
      path: "/Note/:noteId",
      element:
        <>
          <Navbar />
          <Note />
          <Footer />
        </>,
    },
  ]
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
