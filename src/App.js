
import './App.css';
import Random from './Components/Random';
import Display from './Components/Display';
import { Route,Routes } from 'react-router-dom';
import DisplayCart from './Components/DisplayCart';

function App() {
  return (
      <div>
        <Display/>
        <Routes>
              <Route path="/" element={<Random/>}/>
              <Route path='/mycart' element={<DisplayCart/>}/>
        </Routes>
      </div>
  )
}

export default App;
