import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Test from "./pages/Test"


export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Test" element={<Test/>} />
      </Routes>

    </BrowserRouter>
  )
}