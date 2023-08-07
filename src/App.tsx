import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Template, Uplaoad } from "./components/index"
import './App.css'

function App() {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <p>Copyresume</p>
      </header>
      <div className='flex items-center justify-center h-auto'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/upload" element={<Uplaoad />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
