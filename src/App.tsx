import templateLogo from './assets/template4.svg'
import uploadLogo from './assets/upload2.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className="">
          <img src={uploadLogo} className="logo pl-12 h-44	" alt="Upload and edit" />
          <p className="text-lg text-left pl-12 font-semibold">Upload and Edit</p>
        </div>
        <div className=''>
          <img src={templateLogo} className="logo pl-14 h-44" alt="Create from template" />
          <p className="text-lg text-right  font-semibold">Create from Template</p>
        </div>
      </div>
    </>
  )
}

export default App
