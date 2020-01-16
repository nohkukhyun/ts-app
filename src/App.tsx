import React from "react"
import "./App.css"
import Counter from "./components/Counter/Counter"
import MyForm from "./components/MyForm/MyForm"
import ReducerSample from "./ReducerSample"

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }
  return (
    <div className="App">
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  )
}

export default App
