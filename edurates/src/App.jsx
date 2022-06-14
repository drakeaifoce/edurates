import { Routes, Route } from "react-router-dom"
import { routes } from "./routes"

function App() {

  return (
      <Routes>
        {
          routes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
          )}
      </Routes>
  )
}

export default App
