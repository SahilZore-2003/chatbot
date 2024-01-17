import { useState } from "react"
import { Main, Navbar, Section, Sidebar } from "./components"
function App() {

  const [shownav, setShowNav] = useState(false)

 
  return (
    <>
      <Navbar setShowNav={setShowNav} shownav={shownav} />
      <Sidebar shownav={shownav} setShowNav={setShowNav} />
      <div className="flex">
        <Section />
        <Main setShowNav={setShowNav} />
      </div>

    </>
  )
}

export default App
