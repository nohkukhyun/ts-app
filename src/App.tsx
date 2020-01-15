import React from "react"
import "./App.css"
import Counter from "./components/Counter/Counter"

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Greetings name="hello" option="typescript" onClick={handleClick} /> */}
      <Counter />
    </div>
  )
}

export default App
