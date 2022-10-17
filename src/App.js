import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Header } from './components';
import { CreatProduct } from './components';
import { MainContainer } from './components';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/creatProduct' element={<CreatProduct />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
