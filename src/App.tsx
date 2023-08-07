import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, Template, Uplaoad } from "./components/index"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/">
            <p>Copyresume</p>
          </Link>
        </header>
        <div className='flex items-center justify-center h-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/upload" element={<Uplaoad />} />
          </Routes>
        </div >
      </BrowserRouter >
    </>
  )
}

export default App
